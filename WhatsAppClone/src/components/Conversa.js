import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { modificaMensagem, enviaMensagem, conversaUsuarioFetch } from '../actions/AppActions';
import _ from 'lodash';

class Conversa extends Component {
  constructor(props) {
    super(props);
    this.enviaMensagem.bind(this);
  }

  componentWillMount() {
    this.props.conversaUsuarioFetch(this.props.navigation.getParam('email', 'Email Erro'));
  }

  enviaMensagem() {
    const { mensagem } = this.props;
    const nome = this.props.navigation.getParam('nome', 'Nome Erro');
    const email = this.props.navigation.getParam('email', 'Email Erro');
    this.props.enviaMensagem(mensagem, nome, email);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#EEE4DC', padding: 10 }} >
        <View style={{ flex: 1, paddingBottom: 20 }} >
          <FlatList
            data={this.props.conversa}
            keyExtractor={(item) => item.uid}
            renderItem={({ item }) => {
              if (item.tipo === 'e') {
                return (
                  <View style={{ alignItems: 'flex-end', marginTop: 5 }} >
                    <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#DBF5B4', elevation: 1 }} >{item.texto}</Text>
                  </View>
                );
              }
              else {
                return (
                  <View style={{ alignItems: 'flex-start', marginTop: 5 }} >
                    <Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#F7F7F7', elevation: 1 }} >{item.texto}</Text>
                  </View>
                );
              }
            }}
          />
        </View>

        <View style={{ flexDirection: 'row', height: 60 }} >
          <TextInput style={{ flex: 4, backgroundColor: '#FFF', fontSize: 18 }} value={this.props.mensagem} onChangeText={text => this.props.modificaMensagem(text)} />
          <TouchableOpacity onPress={() => this.enviaMensagem()} >
            <Image source={require('../imgs/enviar_mensagem.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const conversa = _.map(state.ListaConversaReducer, (val, uid) => { // Conversao importante
    return { ...val, uid };
  });
  return {
    conversa,
    mensagem: state.AppReducer.mensagem
  }
}

export default connect(mapStateToProps, { modificaMensagem, enviaMensagem, conversaUsuarioFetch })(Conversa);