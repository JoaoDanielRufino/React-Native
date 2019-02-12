import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default props => (
  <View >
    <Button title="Calcular" onPress={props.acao}/>
  </View>
);
