import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import {database_displayname, database_name, database_size, database_version} from "./Utils";
// SQLite.DEBUG(true);
// SQLite.enablePromise(false);
let db;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {api_value: []};
    }

    loadApiData = async () => {
        try{
            let settings = {
                method: 'POST',
                headers: {
                    'deviceid': 'abc',
                    'Content-Type': 'application/json',
                    'cache-control': 'no-cache'
                },
                body: "{\"query\":\"{listCollections{id name updatedAt list_count}}\"}",
            };
            this.setState({refresh: true});
            const result = await fetch("http://api.listado.co/graphql", settings);
            const response = await result.json();
            this.setState({api_value: response.data.listCollections, refresh: false});
        } catch(e){
            console.log(e);
        }
    };

    dbErrorCallback = (err) => {
        console.log("DB Error: " + JSON.stringify(err));
    };

    dbOkCallback = () => {
        console.log("DB Okay");
        this.createDBTables();
    };

    dbCloseCallback = () => {
        console.log("DB Closed")
    };

    createDBTables = () => {
        db.transaction((tx) => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS collections (id INTEGER NOT NULL, name TEXT NOT NULL, updatedAt TEXT NOT NULL, list_count INTEGER NOT NULL, PRIMARY KEY(id))", [], (tx, results) => {
                // console.log("CREATE TABLE IF NOT EXISTS Collections");
                // console.log(results);
            }, (err) => console.log(err));
        }, (err) => console.log(err));
    };

    insertIntoDB = () => {
        db.transaction((tx) => {
            this.state.api_value.map(x => {
                tx.executeSql(" INSERT INTO collections (id, name, updatedAt, list_count) VALUES (?,?,?,?)", [x.id, x.name, x.updatedAt, x.list_count], (tx, results) => {

                }, (err) => console.log(err))
            });
        }, (err) => console.log(err));
    };

    async componentDidMount() {
        db = SQLite.openDatabase(database_name, database_version, database_displayname, database_size, this.dbOkCallback, this.dbErrorCallback);
        await this.loadApiData();
        this.insertIntoDB();
    }


    componentWillUnmount() {
        db.close(this.dbCloseCallback, this.dbErrorCallback);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                {/*<Text style={styles.instructions}>{`John has ${this.state.petname}`}</Text>*/}
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