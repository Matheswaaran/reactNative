import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View, Text} from 'react-native';

export default class ProfilTab extends Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello {JSON.stringify(navigation.getParam('name', 'No name'))} !!</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()}/>
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
