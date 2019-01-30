import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

const pedra = require('../../imgs/pedra.png');
const papel = require('../../imgs/papel.png');
const tesoura = require('../../imgs/tesoura.png');

export default class Icone extends Component{
  render(){
    if(this.props.escolha == 'pedra'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={pedra}/>
        </View>
      );
    }
    else if(this.props.escolha == 'papel'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={papel}/>
        </View>
      );
    }
    else if(this.props.escolha =='tesoura'){
      return(
        <View style={styles.icone}>
          <Text style={styles.txtJogador}>{this.props.jogador}</Text>
          <Image source={tesoura}/>
        </View>
      );
    }
    else
      return false;
  }
}

const styles = StyleSheet.create({
  icone: {
    alignItems: 'center',
    marginBottom: 20
  },
  txtJogador: {
    fontSize: 18
  }
});
