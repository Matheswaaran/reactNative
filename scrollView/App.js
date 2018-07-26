import React from 'react';
import {ScrollView, Text, View, TextInput} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text style={{fontSize: 70}}>Vertical</Text>
        <Text style={{fontSize: 70}}>Vertical</Text>
          <ScrollView horizontal>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
          </ScrollView>
          <ScrollView horizontal>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
          </ScrollView>
          <ScrollView horizontal>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
          </ScrollView>
          <ScrollView horizontal>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
          </ScrollView>
          <ScrollView horizontal>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
            <Text style={{fontSize: 70}}>Horizontal</Text>
          </ScrollView>
      </ScrollView>
    );
  }
}
