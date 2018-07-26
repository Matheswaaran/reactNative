import React from 'react';
import {ToastAndroid, TextInput, Text, View, TouchableNativeFeedback, Alert} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: '', data: ''};
  }

  onPressHandler = () => {
    // ToastAndroid.show('Converting...', ToastAndroid.SHORT);
    this.setState({data: this.state.text.split(' ').map((x) => x && '🕷').join(' ')});
  }

  chageTextHandler = (e) => {
    this.setState({text: e});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput style={{height: 40}} placeholder="Type the text here" onChangeText={this.chageTextHandler} autoFocus/>
        <TouchableNativeFeedback onPress={this.onPressHandler}>
          <View style={{padding: 10, boderRadius: '5px', alignItems: 'center', backgroundColor: '#2196F3'}}>
            <Text style={{ color: 'white' }}>Convert</Text>
          </View>
        </TouchableNativeFeedback>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.data}
        </Text>
      </View>
    );
  }
}
