import React, {Component} from 'react';
import {StyleSheet, StatusBar, Text, View, Image} from 'react-native';

const detalheServicos = require('../imgs/detalhe_servico.png');

export default class CenaServicos extends Component {
  static navigationOptions = {
    title: 'Servicos',
    headerStyle: {
      backgroundColor: '#19D1C8'
    }
  };

  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor='#19D1C8'/>

        <View style={styles.header}>
          <Image source={detalheServicos}/>
          <Text style={styles.txtTitulo}>Nossos servicos</Text>
        </View>

        <View style={styles.detalhes}>
          <Text style={styles.texto}>-Consultoria</Text>
          <Text style={styles.texto}>-Processos</Text>
          <Text style={styles.texto}>-Acompanhamento de projetos</Text>
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
    color: '#19D1C8',
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
