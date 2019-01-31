import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListaItens from './src/components/ListaItens';

export default class App extends Component<Props> {
  render() {
    return (
      <ListaItens/>
    );
  }
}

const styles = StyleSheet.create({

});
