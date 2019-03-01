import firebase from 'firebase';
import b64 from 'base-64';
import {
  MODIFICA_NOME,
  MODIFICA_SENHA,
  MODIFICA_EMAIL,
  CADASTRO_SUCESSO,
  CADASTRO_ERRO,
  LOGIN_SUCESSO,
  LOGIN_ERRO,
  LOGIN_EM_ANDAMENTO,
  CADASTRO_EM_ANDAMENTO
} from './types';

export const modificaEmail = (text) => {
  return {
    type: MODIFICA_EMAIL,
    payload: text
  }
}

export const modificaSenha = (text) => {
  return {
    type: MODIFICA_SENHA,
    payload: text
  }
}

export const modificaNome = (text) => {
  return {
    type: MODIFICA_NOME,
    payload: text
  }
}

export const cadastraUsuario = ({ nome, email, senha }, props) => {
  return dispatch => {
    dispatch({ type: CADASTRO_EM_ANDAMENTO });

    firebase.auth().createUserWithEmailAndPassword(email, senha)
      .then(user => {
        const emailB64 = b64.encode(email);
        firebase.database().ref(`contatos/${emailB64}`).push({ nome: nome })
          .then(val => cadastroUsuarioSucesso(dispatch, props));
      })
      .catch(erro => cadastroUsuarioErro(erro, dispatch));
  }
}

const cadastroUsuarioSucesso = (dispatch, props) => {
  dispatch({ type: CADASTRO_SUCESSO });
  props.navigation.navigate('BoasVindas');
}

const cadastroUsuarioErro = (erro, dispatch) => {
  dispatch({ type: CADASTRO_ERRO, payload: erro.message });
}

export const autenticarUsuario = ({ email, senha }, props) => {
  return dispatch => {
    dispatch({ type: LOGIN_EM_ANDAMENTO });

    firebase.auth().signInWithEmailAndPassword(email, senha)
      .then(val => loginSucesso(dispatch, props))
      .catch(erro => loginErro(erro, dispatch));
  }
}

const loginSucesso = (dispatch, props) => {
  dispatch({ type: LOGIN_SUCESSO });
  props.navigation.navigate('Principal');
}

const loginErro = (erro, dispatch) => {
  dispatch({ type: LOGIN_ERRO, payload: erro.message });
}