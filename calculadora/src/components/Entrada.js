import React from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero';

export default props => (
  <View style={styles.container}>
    <Numero num={props.num1} acao={props.acao} nome="num1" />
    <Numero num={props.num2} acao={props.acao} nome="num2" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
