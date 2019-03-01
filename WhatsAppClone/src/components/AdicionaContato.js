import React, { Component } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adicionaContato } from '../actions/AppActions';

class AdicionaContato extends Component {
  renderAdicionaContato() {
    if (!this.props.cadastro_inclusao) {
      return (
        <View style={{ flex: 1 }} >
          <View style={{ flex: 1, justifyContent: 'center', padding: 20 }} >
            <View style={{ flex: 1, justifyContent: 'center' }} >
              <TextInput placeholder='E-mail' style={{ fontSize: 20, borderBottomColor: '#000', borderBottomWidth: 1 }}
                value={this.props.email} onChangeText={(text) => this.props.modificaAdicionaContatoEmail(text)} />
            </View>

            <View style={{ flex: 1 }} >
              <Button title='Adicionar' color='#115E54' onPress={() => this.props.adicionaContato(this.props.email)} />
              <Text style={{ color: '#ff0000', fontSize: 20 }} >{this.props.cadastro_txt_erro}</Text>
            </View>
          </View>
        </View>
      );
    }
    else {
      return (
        <View>
          <Text style={{ fontSize: 20 }} >Cadastro realizado com sucesso</Text>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', padding: 20 }} >
        { this.renderAdicionaContato() }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AppReducer.adiciona_contato_email,
  cadastro_txt_erro: state.AppReducer.cadastro_txt_erro,
  cadastro_inclusao: state.AppReducer.cadastro_inclusao
});

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adicionaContato })(AdicionaContato);