import React, { Component } from 'react';
import { StyleSheet, View, Button, TextInput, ImageBackground, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../actions/AtenticacaoAction';

class FormCadastro extends Component {
  _cadastraUsuario() {
    const { nome, email, senha } = this.props;
    this.props.cadastraUsuario({ nome, email, senha }, this.props);
  }

  renderBtnCadastro() {
    if (this.props.loadingCadastro)
      return (<ActivityIndicator />);
    return (<Button title="Cadastrar" color="#115E54" onPress={() => this._cadastraUsuario()} />);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('../imgs/bg.png')} >
        <View style={styles.container}>
          <View style={styles.dados}>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor='#fff' value={this.props.nome} onChangeText={text => this.props.modificaNome(text)} />
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor='#fff' value={this.props.email} onChangeText={text => this.props.modificaEmail(text)} />
            <TextInput style={styles.input} secureTextEntry placeholder="Senha" placeholderTextColor='#fff' value={this.props.senha} onChangeText={text => this.props.modificaSenha(text)} />
            <Text style={{ color: '#ff0000', fontSize: 18 }} >{this.props.erroCadastro}</Text>
          </View>

          <View style={styles.btn}>
            {this.renderBtnCadastro()}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroCadastro: state.AutenticacaoReducer.erroCadastro,
  loadingCadastro: state.AutenticacaoReducer.loadingCadastro
});

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(FormCadastro);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  dados: {
    flex: 4,
    justifyContent: 'center'
  },
  input: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    fontSize: 20,
    height: 45,
    color: '#fff'
  },
  btn: {
    flex: 1
  }
});