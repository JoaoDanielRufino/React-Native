import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Itens extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.foto}>
          <Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}}/>
        </View>

        <View style={styles.texto}>
          <Text style={styles.titulo}>{this.props.item.titulo}</Text>
          <Text style={styles.valor}>R$ {this.props.item.valor}</Text>
          <Text>Local: {this.props.item.local_anuncio}</Text>
          <Text>Data: {this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102,
  },
  texto: {
    marginLeft: 20,
    flex: 1
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
