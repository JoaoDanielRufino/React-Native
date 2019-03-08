import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import FormLogin from './components/auth/FormLogin';
import NewAccount from './components/auth/NewAccount';
import MainScreen from './components/main/MainScreen';
import NewFolder from './components/main/NewFolder';
import NewFile from './components/main/NewFile';
import Folder from './components/main/Folder';
import File from './components/main/File';
import DoneButton from './components/main/DoneButton';

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: FormLogin,
      navigationOptions: {
        title: 'Login'
      }
    },
    SignUp: {
      screen: NewAccount,
      navigationOptions: {
        title: 'Create an account'
      }
    },
    Home: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Folders',
        headerLeft: null,
        headerRight: <NewFolder />
      }
    },
    Folder: {
      screen: Folder,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('folderName', ''),
        headerRight: <NewFile navigation={navigation} />
      })
    },
    File: {
      screen: File,
      navigationOptions: ({ navigation }) => ({
        title: navigation.getParam('fileName', ''),
        headerRight: <DoneButton navigation={navigation} />
      })
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ECA563'
      },
      headerTitleStyle: {
        flex: 1,
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 24
      }
    }
  }
);

export default createAppContainer(StackNavigator);