import React from 'react';
import {StyleSheet, Text, View, Alert, ActivityIndicator, FlatList, ScrollView} from 'react-native';

type Props = {};
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoading: true, datas: ''};
  }

  componentDidMount(){
    return fetch('https://api.myjson.com/bins/erh9a')
      .then((response) => response.json())
      .then((response) => {
        this.setState({isLoading: false, datas: response.questions});
      })
      .catch((error) => {
        Alert.alert(error);
      });
  }

  renderListItemHandler = ({item}) => (
    <Text>{item.id}, {item.name}</Text>
  );

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      );
    }
    return (
      <ScrollView>
        <View style={{flex: 1, paddingTop:20}}>
          <FlatList data={this.state.datas} renderItem={this.renderListItemHandler} keyExtractor={(item, index) => index.toString()}/>
        </View>
      </ScrollView>
    );
  }
}
