import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
const SQLite = require('react-native-sqlite-storage');

class App extends Component {

    constructor(props) {
      super(props);
      this.state = { petname: "", api_value: [] };
      this.db = SQLite.openDatabase({name: 'test.db', createFromLocation: '~sqlitedb.db'});
      this.db.transaction((tx) => {
        tx.executeSql("SELECT * FROM pets WHERE name=?", ['John'], (tx, results) => {
          console.log(results.rows.length);
          var len = results.rows.length;
          if (len > 0){
            var row = results.rows.item(0);
            this.setState({ petname: row.pets });
          }
        });
      });
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
            this.setState({api_value: response.data.listCollections, refresh: false}, () => console.log(this.state.api_value));
        } catch(e){
            console.log(e);
        }
    };

    async componentDidMount() {
        try {
            console.log("cdm");
            await this.loadApiData();
            this.db.transaction((tx) => {
                tx.executeSql('CREATE TABLE IF NOT EXISTS test_table (id integer primary key, name text, updatedAt text, list_count integer)');
                this.state.api_value.map((x) => {
                    tx.executeSql(`INSERT INTO test_table(id, name, updatedAt, list_count) VALUES (?,?,?,?)`, [x.id, x.name, x.updatedAt,x.list_count], (tx, results) => {
                        console.log(results);
                    }, (e) => console.log(e));
                });
            });
        }catch (e) {
            console.log(e);
        }
    }

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