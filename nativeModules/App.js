import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, NativeModules, Button} from 'react-native';

class App extends Component {

  componentDidMount() {
    console.log(NativeModules);
  }

  onBtnPressHandler = () => {
    Platform.OS === "ios" ? NativeModules.CalenderManager.addEvent('Birthday Party', '4 Privet Drive, Surrey') : NativeModules.ToastExample.show("Hai form JS");
  };

  onCallBackBtnPressHandler = () => {
    Platform.OS === "ios" ? NativeModules.CalenderManager.getEvents(this.nativeCallBack) : NativeModules.ToastExample.getData(this.nativeCallBack);
  };

  nativeCallBack = (value) => {
    console.log(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button title="Add event" onPress={this.onBtnPressHandler}/>
        <Button title="CallBack" onPress={this.onCallBackBtnPressHandler}/>
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