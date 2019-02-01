import React, {Component} from 'react';
import {StyleSheet, StatusBar, Text, View, Image} from 'react-native';

const detalheCliente = require('../imgs/detalhe_cliente.png');
const cliente1 = require('../imgs/cliente1.png');
const cliente2 = require('../imgs/cliente2.png');

export default class CenaCliente extends Component {
  static navigationOptions = {
    title: 'Clientes',
    headerStyle: {
      backgroundColor: '#B9C941'
    }
  };

  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor='#B9C941'/>

        <View style={styles.header}>
          <Image source={detalheCliente}/>
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalhes}>
          <Image source={cliente1}/>
          <Text style={styles.texto}>Lorem ipsum dolorem</Text>
        </View>

        <View style={styles.detalhes}>
          <Image source={cliente2}/>
          <Text style={styles.texto}>Lorem ipsum dolorem</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  detalhes: {
    padding: 20,
    marginTop: 10
  },
  texto: {
    marginLeft: 20,
    fontSize: 18
  }
});
