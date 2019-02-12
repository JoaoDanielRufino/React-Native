import React, { Component } from 'react';
import { View } from 'react-native';

import { Topo, Resultado, Painel } from './src/components/index';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { num1: '', num2: '', op: 'soma', res: '' };
    this.calcular = this.calcular.bind(this); //Mantendo o contexto da funcao
    this.atualizaValor = this.atualizaValor.bind(this);
    this.atualizaOperacao = this.atualizaOperacao.bind(this);
  }

  calcular() {
    let res = 0;
    if (this.state.op === 'soma')
      res = parseFloat(this.state.num1) + parseFloat(this.state.num2);
    else
      res = parseFloat(this.state.num1) - parseFloat(this.state.num2);
  
    this.setState({res: res.toString()});
  }

  atualizaValor(nome, numero) {
    let obj = {};
    obj[nome] = numero;
    this.setState(obj);
  }

  atualizaOperacao(op) {
    this.setState({ op });
  }

  render() {
    return (
      <View>
        <Topo />
        <Resultado resultado={this.state.res} />
        <Painel num1={this.state.num1} num2={this.state.num2} operacao={this.state.op}
          calcular={this.calcular} atualizaValor={this.atualizaValor} atualizaOperacao={this.atualizaOperacao} />
      </View>
    );
  }
}
