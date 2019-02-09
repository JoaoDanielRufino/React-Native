import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component {
  static navigationOptions = {
    title: 'Resultado'
  }

  contructor(props) {
    this.super(props);
    this.state = {res: ''};
  }

  componentWillMount() {
    const rand = Math.floor(Math.random() * 2);
    if(rand == 0)
      this.setState({res: 'cara'});
    else
      this.setState({res: 'coroa'});
  }

  render() {
    if(this.state.res == 'cara') {
      return (
        <View style={styles.res}>
          <Image source={cara}/>
        </View>
      );
    }
    else {
      return (
        <View style={styles.res}>
          <Image source={coroa}/>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  res: {
    flex: 1,
    backgroundColor: '#61BD8C',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
