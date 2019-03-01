import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { conversasUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Conversas extends Component {
  componentWillMount() {
    this.props.conversasUsuarioFetch();
  }

  render() {
    return (
      <FlatList 
        data={this.props.conversas}
        keyExtractor={(item) => item.uid}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Conversa', { nome: item.nome, email: item.email })} >
            <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }} >
              <Text style={{ fontSize: 25 }} >{item.nome}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const mapStateToProps = state => {
  const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
    return { ...val, uid };
  });

  return {
    conversas
  }
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);