import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import CenaPrincipal from '../components/CenaPrincipal';
import CenaCliente from '../components/CenaCliente';
import CenaContato from '../components/CenaContato';
import CenaEmpresa from '../components/CenaEmpresa';
import CenaServicos from '../components/CenaServicos';

const RootStack = createStackNavigator({
  Home: {
    screen: CenaPrincipal
  },
  Cliente: {
    screen: CenaCliente
  },
  Contato: {
    screen: CenaContato
  },
  Empresa: {
    screen: CenaEmpresa
  },
  Servicos: {
    screen: CenaServicos
  }
});

export default createAppContainer(RootStack);
