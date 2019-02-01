import React, {Component} from 'react';
import {StyleSheet, StatusBar, Text, View, Image} from 'react-native';

const detalheContato = require('../imgs/detalhe_contato.png');

export default class CenaContato extends Component {
  static navigationOptions = {
    title: 'Contato',
    headerStyle: {
      backgroundColor: '#61BD8C'
    }
  };

  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor='#61BD8C'/>

        <View style={styles.header}>
          <Image source={detalheContato}/>
          <Text style={styles.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={styles.detalhes}>
          <Text style={styles.texto}>TEL: (34) 1234-4567</Text>
          <Text style={styles.texto}>CEL: (34) 91234-4567</Text>
          <Text style={styles.texto}>EMAIL: contato@gmail.com</Text>
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
    color: '#61BD8C',
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
