import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class SobreJogo extends Component {
  static navigationOptions = {
    title: 'Sobre o jogo'
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#61BD8C'}}>
        <Text >Um jogo simples de cara ou coroa</Text>
      </View>
    );
  }
}
