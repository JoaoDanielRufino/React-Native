import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Itens from './Itens';
import axios from 'axios';

export default class ListaItens extends Component{
  constructor(props){
    super(props);
    this.state = {listaItens: []};
  }

  componentWillMount(){
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(res => { this.setState({listaItens: res.data}); })
    .catch(() => { console.log('Erro'); });
  }

  render(){
    return(
      <ScrollView style={{backgroundColor: '#DDD'}}>
        {this.state.listaItens.map((item, index) => {return(<Itens key={index} item={item}/>);})}
      </ScrollView>
    );
  }
}
