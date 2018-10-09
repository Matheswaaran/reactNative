import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppState} from 'react-native';
import NotifyController from './src/NotifyController';
import PushNotification from 'react-native-push-notification';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = { appState: AppState.currentState }
  }

  appStateChangeHadler = (appState) => {
    if (appState === 'background') {
      PushNotification.localNotificationSchedule({
        title: "Google Firebase",
        message: "My Notification",
        date: new Date(Date.now() + (5 * 1000)),
        actions: '["Yes", "No"]',
        repeatType: 'minute',
        // repeatTime: new Date(Date.now() + (5 * 1000)),
      });
    }
  };

  componentDidMount(){
    AppState.addEventListener('change', this.appStateChangeHadler);
  }

  componentWillUnmount(){
    AppState.removeEventListener('change', this.appStateChangeHadler);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <NotifyController/>
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
