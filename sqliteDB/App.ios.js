import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
const SQLite = require('react-native-sqlite-storage');

class App extends Component {

    constructor(props) {
        super(props);
        this.state = { petname: "" , api_Value: []};
        this.db = SQLite.openDatabase({name : "testDB", createFromLocation : "~data/db.sqlite"}, this.dbOkCallback, this.dbErrorCallback);
        this.db.transaction((tx) => {
            tx.executeSql("SELECT * FROM pets WHERE name=?", ['John'], (tx, results) => {
                console.log(results.rows.length);
                var len = results.rows.length;
                if (len > 0){
                    var row = results.rows.item(0);
                    this.setState({ petname: row.pets });
                }
            }, (e) => console.log(e));
        });
    }

    dbErrorCallback = (err) => {
        console.log("SQL Error: " + err);
    };

    dbOkCallback = () => {
        console.log("SQL Okay");
    };


    render() {
        console.log(this.state.petname);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>{`John has ${this.state.petname}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default App;