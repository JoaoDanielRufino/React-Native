import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import Topo from './src/components/Topo';
import Icone from './src/components/Icone';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {escolhaUsuario: '', escolhaComputador: '', resultado: ''};
  }

  jokenpo(escolha){
    let num = Math.floor(Math.random()*3);
    let escolhaComputador = '';
    let resultado = '';

    switch(num){
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura';
    }

    if(escolhaComputador == 'pedra'){
      if(escolha == 'pedra')
        resultado = 'Empate';
      else if(escolha == 'papel')
        resultado = 'Voce venceu';
      else
        resultado = 'Voce perdeu';
    }
    else if(escolhaComputador == 'papel'){
      if(escolha == 'papel')
        resultado = 'Empate';
      else if(escolha == 'pedra')
        resultado = 'Voce perdeu';
      else
        resultado = 'Voce venceu';
    }
    else{
      if(escolha == 'tesoura')
        resultado = 'Empate';
      else if(escolha == 'pedra')
        resultado = 'Voce venceu';
      else
        resultado = 'Voce perdeu';
    }

    this.setState({escolhaUsuario: escolha, escolhaComputador: escolhaComputador, resultado: resultado});
  }

  render(){
    return(
      <View>
        <Topo/>

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}><Button title="Pedra" onPress={() => {this.jokenpo('pedra')}}/></View>
          <View style={styles.btnEscolha}><Button title="Papel" onPress={() => {this.jokenpo('papel')}}/></View>
          <View style={styles.btnEscolha}><Button title="Tesoura" onPress={() => {this.jokenpo('tesoura')}}/></View>
        </View>

        <View style={styles.corpo}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'/>
          <Icone escolha={this.state.escolhaUsuario} jogador='Voce'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  corpo: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});
