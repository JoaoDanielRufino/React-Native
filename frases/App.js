import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, Alert} from 'react-native';

export default class App extends Component{
  _onPressButton() {
    let num = Math.floor(Math.random()*5);
    let frases = new Array();
    frases[0] = 'aa';
    frases[1] = 'bb';
    frases[2] = 'cc';
    frases[3] = 'dd';
    frases[4] = 'ee';
    Alert.alert(frases[num]);
  }

  render(){
    return(
      <View style={styles.container}>
        <Image source={require('./imgs/logo.png')}/>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao} onPress={this._onPressButton}>Nova Frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
