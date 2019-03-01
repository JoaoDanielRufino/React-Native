import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Contatos extends Component {
  componentWillMount() {
    this.props.contatosUsuarioFetch();
  }

  render() {
    return (
      <FlatList
        data={this.props.contatos}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Conversa', { nome: item.nome, email: item.email })} >
            <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }} >
              <Text style={{ fontSize: 25 }} >{item.nome}</Text>
              <Text style={{ fontSize: 18 }} >{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const contatos = _.map(state.ListaContatosReducer, (val, uid) => { // Importante fazer esta conversao
    return { ...val, uid };
  });
  return { contatos };
}

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);