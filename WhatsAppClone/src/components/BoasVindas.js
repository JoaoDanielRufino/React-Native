import React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';

export default props => (
  <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')} >
    <View style={{ flex: 1, padding: 15 }} >
      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
        <Text style={{ fontSize: 20, color: '#fff' }} >Seja Bem-Vindo</Text>
        <Image source={require('../imgs/logo.png')} />
      </View>

      <View style={{ flex: 1 }} >
        <Button title="Fazer Login" onPress={() => props.navigation.navigate('Login')} />
      </View>
    </View>
  </ImageBackground>
);