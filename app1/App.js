import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';

const geraNumeroAleatorio = () => {
  let num = Math.floor(Math.random()*10);
  alert(num);
}

export default class App extends Component{
  render(){
    return (
      <View>
        <Text>Gerador de numeros aleatorios</Text>
        <Button title="Gerar um numero randomico" onPress={geraNumeroAleatorio}/>
      </View>
    );
  }
}
