import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View} from 'react-native';

export default class HomeTab extends Component {
  static navigationOptions = {
    title: 'Home Screen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title="Go to Jane's profile" onPress={ () => navigate('Profile', { name: 'Jane' }) }/>
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
