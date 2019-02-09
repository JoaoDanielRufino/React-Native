import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobreJogo = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

export default class MainScreen extends Component {
  static navigationOptions = {
    title: 'Cara ou Coroa'
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.jogo}>
          <Image source={logo}/>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Jogo')}>
            <Image source={btnJogar}/>
          </TouchableOpacity>
        </View>

        <View style={styles.rodape}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Sobre')}>
            <Image source={btnSobreJogo}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Outros')}>
            <Image source={btnOutrosJogos}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },
  jogo: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rodape: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
