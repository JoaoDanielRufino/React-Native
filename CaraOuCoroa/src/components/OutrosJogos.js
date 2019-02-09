import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class OutrosJogos extends Component {
  static navigationOptions = {
    title: 'Outros jogos'
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#61BD8C'}}>
        <Text>Outros jogos</Text>
      </View>
    );
  }
}
