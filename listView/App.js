import React from 'react';
import {Alert, StyleSheet, TouchableOpacity, ToastAndroid, FlatList, Text, View} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: [{key: 'Devin'}, {key: 'Jackson'}, {key: 'James'}, {key: 'Joel'}, {key: 'John'}, {key: 'Jillian'}, {key: 'Jimmy'}, {key: 'Julie'}]}
  }

  renderItemHandler = ({item}) => {
    onPressHandler = () => {
      ToastAndroid.show(item.key, ToastAndroid.SHORT);
    };

    onLongPressHandler = () => {
      Alert.alert("Alert Box",item.key);
    };
    return (
      <TouchableOpacity onPress={onPressHandler} onLongPress={onLongPressHandler}>
        <Text style={styles.item}>{item.key}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this.renderItemHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    margin: 2,
    color: 'white',
    backgroundColor: 'green',
  },
})
