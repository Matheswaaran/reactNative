import React from 'react';
import {Alert, StyleSheet, ScrollView, TouchableOpacity, ToastAndroid, SectionList, Text, View} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: [
      {key: 'Aadhi'},
      {key: 'Caity'},
      {key: 'Iris'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
      {key: 'Devin'},
      {key: 'Hal'}
    ]};
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
  };

  renderSectionsHandler = ({section}) => (
    <Text style={styles.sectionHeader}>{section.title}</Text>
  );

  render() {
    let records = this.state.data.map(x => x);
    let results = [{title: '', data: []}];
    records.forEach((record_item) => {
      let value = results.find((results_item) => {
        return results_item.title === record_item.key.charAt(0);
      });
      if (typeof value === 'undefined') {
        let index = results.push({title: record_item.key.charAt(0), data: []});
        results[index-1].data.push(record_item);
      }else {
        value.data.push(record_item);
      }
    });
    results.sort((a,b) => {
      if (a.title < b.title) {
        return -1;
      }
      return 1;
    })
    return (
      <View style={styles.container}>
        <ScrollView>
          <SectionList sections={results} renderItem={this.renderItemHandler} renderSectionHeader={this.renderSectionsHandler} keyExtractor={(item, index) => index}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 5,
    fontSize: 18,
    height: 44,
  },
})
