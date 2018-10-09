import React from 'react';
import {CameraRoll, Button, StyleSheet, ToastAndroid, PermissionsAndroid, ScrollView, Alert, Text, View, Image} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { photos: [] };
  }

  componentWillMount() {
    PermissionsAndroid.requestMultiple([PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE])
      .then((r) => {
        ToastAndroid.show("Got Permissions", ToastAndroid.SHORT);
      })
      .catch((e) => {
        ToastAndroid.show("Permissions Error", ToastAndroid.SHORT);
      });
  }

  onButtonClickHandler = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'All',
      groupName: 'Camera'
    }).then( r => {
      this.setState({ photos: r.edges });
    }).catch( (err) => {
      Alert.alert(err);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Load Images" onPress={this.onButtonClickHandler} />
        <ScrollView style={{marginTop: 20}}>
          {this.state.photos.map((photo, index) => {
            return(
              <Image key={index} style={{width: 300, height:300,}} source={{ uri: photo.node.image.uri }}/>
            );
          })}
        </ScrollView>
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
    padding: 10,
  },
  image: {
    minWidth: 300,
    minHeight:300,
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
