import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';
import firebase from 'firebase';

class Menu extends Component {
  solve() {
    this.props.habilitaInclusaoContato();
    this.props.navigation.navigate('AdicionaContato');
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }} >
        <TouchableOpacity onPress={() => this.solve()} >
          <Image style={{ marginRight: 30 }} source={require('../imgs/adicionar-contato.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          firebase.auth().signOut();
          this.props.navigation.navigate('Login');
        }} >
          <Text style={{ marginRight: 20, fontSize: 20, color: '#fff' }} >Sair</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(null, { habilitaInclusaoContato })(Menu);