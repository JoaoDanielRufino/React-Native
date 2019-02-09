import React from 'react';
import MainScreen from '../components/MainScreen';
import SobreJogo from '../components/SobreJogo';
import OutrosJogos from '../components/OutrosJogos';
import Resultado from '../components/Resultado';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const RootStack = createStackNavigator({
  Home: {
    screen: MainScreen
  },
  Sobre: {
    screen: SobreJogo
  },
  Outros: {
    screen: OutrosJogos
  },
  Jogo: {
    screen: Resultado
  }
});

export default createAppContainer(RootStack);
