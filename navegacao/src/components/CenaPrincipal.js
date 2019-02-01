import React, {Component} from 'react';
import {StyleSheet, StatusBar, Text, View, Image, TouchableHighlight} from 'react-native';

const logo = require('../imgs/logo.png');
const menuCliente = require('../imgs/menu_cliente.png');
const menuContato = require('../imgs/menu_contato.png');
const menuEmpresa = require('../imgs/menu_empresa.png');
const menuServico = require('../imgs/menu_servico.png');

export default class CenaPrincipal extends Component {
  static navigationOptions = {
    title: 'ATM Consultoria',
    headerStyle: {
      backgroundColor: '#CCC'
    }
  };

  render() {
    return (
      <View>
        <StatusBar hidden={false} backgroundColor='#CCC'/>

        <View style={styles.logo}>
          <Image source={logo}/>
        </View>

        <View style={styles.menu}>
          <View style={styles.menuGrupo}>
            <TouchableHighlight underlayColor={'#B9C941'} onPress={() => this.props.navigation.navigate('Cliente')}>
              <Image style={styles.imgMenu} source={menuCliente}/>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={'#61BD8C'} onPress={() => this.props.navigation.navigate('Contato')}>
              <Image style={styles.imgMenu} source={menuContato}/>
            </TouchableHighlight>
          </View>

          <View style={styles.menuGrupo}>
            <TouchableHighlight underlayColor={'#EC7148'} onPress={() => this.props.navigation.navigate('Empresa')}>
              <Image style={styles.imgMenu} source={menuEmpresa}/>
            </TouchableHighlight>

            <TouchableHighlight underlayColor={'#19D1C8'} onPress={() => this.props.navigation.navigate('Servicos')}>
              <Image style={styles.imgMenu} source={menuServico}/>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    marginTop: 30,
    alignItems: 'center'
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo: {
    flexDirection: 'row'
  },
  imgMenu: {
    margin: 15
  }
});
