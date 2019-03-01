import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';
import BoasVindas from '../components/BoasVindas';
import Conversas from '../components/Conversas';
import Contatos from '../components/Contatos';
import Menu from '../components/Menu';
import AdicionaContato from '../components/AdicionaContato';
import Conversa from '../components/Conversa';

const TabNavigator = createMaterialTopTabNavigator({
  Conversas: {
    screen: Conversas
  },
  Contatos: {
    screen: Contatos
  }
},
  {
    tabBarOptions: {
      style: {
        backgroundColor: '#114D44'
      }
    }
  }
);

const RootStack = createStackNavigator({
  Login: {
    screen: FormLogin,
    navigationOptions: {
      header: null
    }
  },
  Cadastro: {
    screen: FormCadastro,
    navigationOptions: {
      title: 'Cadastro',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  },
  BoasVindas: {
    screen: BoasVindas,
    navigationOptions: {
      header: null
    }
  },
  Principal: {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => ({ // Importe atribuir esta funcao para conseguir enviar o navigation como props para o botao no header
      headerLeft: null, // Tira o back icon
      title: 'WhatsApp Clone',
      headerTitleStyle: {
        color: '#fff'
      },
      headerRight: <Menu navigation={navigation} /> // Necessario forcar o envio do navigation
    })
  },
  AdicionaContato: {
    screen: AdicionaContato,
    navigationOptions: {
      title: 'Adicionar Contato',
      headerTitleStyle: {
        color: '#fff'
      }
    }
  },
  Conversa: {
    screen: Conversa,
    navigationOptions: ({ navigation }) =>  ({
      title: navigation.getParam('nome', 'Erro ao recuperar nome'),
      headerTitleStyle: {
        color: '#fff'
      }
    })
  }
},
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#115E54'
      }
    }
  }
);

export default createAppContainer(RootStack);