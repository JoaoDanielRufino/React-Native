import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default props => (
  <View>
    <TextInput style={styles.container} placeholder="Resultado" editable={false} value={props.resultado} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 100,
    fontSize: 30
  }
});
