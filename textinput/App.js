import React from 'react';
import {TextInput, Text, View} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  chageTextHandler = (e) => {
    this.setState({text: e});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput style={{height: 40}} placeholder="Type the text here" onChangeText={this.chageTextHandler}/>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((x) => x && '🕷').join(' ')}
        </Text>
      </View>
    );
  }
}
