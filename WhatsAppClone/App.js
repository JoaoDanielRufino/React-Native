import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import AppContainer from './src/routes/navigator';
import reducers from './src/reducers';

export default class App extends Component {
  componentWillMount() {
    let config = {
      apiKey: "AIzaSyDCC-Y7rcnDtJ3bKbMLXolbSBc5MDqY1ys",
      authDomain: "whatsappclonereact-9338e.firebaseapp.com",
      databaseURL: "https://whatsappclonereact-9338e.firebaseio.com",
      projectId: "whatsappclonereact-9338e",
      storageBucket: "whatsappclonereact-9338e.appspot.com",
      messagingSenderId: "629137053643"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <StatusBar backgroundColor="#114D44" />
        <AppContainer />
      </Provider>
    );
  }
}
