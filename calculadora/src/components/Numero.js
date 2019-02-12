import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View style={styles.container}>
    <TextInput style={styles.numero} value={props.num} onChangeText={val => props.acao(props.nome, val)} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#000',
    borderBottomWidth: 1
  },
  numero: {
    width: 140,
    height: 80,
    fontSize: 20
  }
});
