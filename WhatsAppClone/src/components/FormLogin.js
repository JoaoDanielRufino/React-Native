import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AtenticacaoAction';

class FormLogin extends Component {
  _autenticarUsuario() {
    const { email, senha } = this.props;
    this.props.autenticarUsuario({ email, senha }, this.props);
  }

  renderBtnAcessar() {
    if (this.props.loadingLogin)
      return (<ActivityIndicator size="large" />);
    return (<Button title="acessar" color="#115E54" onPress={() => this._autenticarUsuario()} />);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')} >
        <View style={styles.container}>
          <View style={styles.topo}>
            <Text style={styles.titulo}>WhatsApp Clone</Text>
          </View>

          <View style={styles.dados}>
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor='#fff' value={this.props.email} onChangeText={text => this.props.modificaEmail(text)} />
            <TextInput style={styles.input} secureTextEntry placeholder="Senha" placeholderTextColor='#fff' value={this.props.senha} onChangeText={text => this.props.modificaSenha(text)} />
            <Text style={{ fontSize: 18, color: '#ff0000' }} >{this.props.erroLogin}</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
              <Text style={{ fontSize: 18, color: '#fff' }}>Ainda nao tem conta? Cadastre-se</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btn}>
            {this.renderBtnAcessar()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin,
  loadingLogin: state.AutenticacaoReducer.loadingLogin
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(FormLogin);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  topo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 25,
    color: '#fff'
  },
  dados: {
    flex: 2
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 20,
    height: 45,
    color: '#fff'
  },
  btn: {
    flex: 3
  }
});