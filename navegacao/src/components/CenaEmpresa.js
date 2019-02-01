import React, {Component} from 'react';
import {StyleSheet, StatusBar, Text, View, Image} from 'react-native';

const detalheEmpresa = require('../imgs/detalhe_empresa.png');

export default class CenaEmpresa extends Component {
  static navigationOptions = {
    title: 'Empresa',
    headerStyle: {
      backgroundColor: '#EC7148'
    }
  };

  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor='#EC7148'/>

        <View style={styles.header}>
          <Image source={detalheEmpresa}/>
          <Text style={styles.txtTitulo}>A Empresa</Text>
        </View>

        <View style={styles.detalhes}>
          <Text style={styles.texto}>Lorem ipsum dolores</Text>
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
    color: '#EC7148',
    marginLeft: 10,
    marginTop: 25
  },
  detalhes: {
    padding: 20,
    marginTop: 20
  },
  texto: {
    fontSize: 18
  }
});
