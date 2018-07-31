import React from 'react';
import {StyleSheet, Text, View, PermissionsAndroid, ToastAndroid, RefreshControl, ScrollView} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {per: false, refreshing: false};
  }

  checkPermissions = async () => {
    try {
      await PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE])
        .then((result) => {
          ToastAndroid.show(JSON.stringify(result), ToastAndroid.LONG);
          this.setState({per: true, refreshing: false});
        });
    } catch (e) {
      ToastAndroid.show(e, ToastAndroid.SHORT);
    }
  }

  componentWillMount() {
    this.checkPermissions();
  }

  _onRefresh = () => {
    this.checkPermissions();
  }

  render() {
    return (
      <ScrollView refreshControl={<RefreshControl onRefresh={this._onRefresh} refreshing={this.state.refreshing}/>}>
        <View style={styles.container}>
          <Text>{this.state.per ? 'Got Permissions' : 'Go to Hell'}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 50
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
