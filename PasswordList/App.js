import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducer';
import AppContainer from './src/navigator';

export default class App extends Component {

  render() {
    return (
      <Provider store={createStore(reducer, {})} >
        <AppContainer />
      </Provider>
    );
  }
}
