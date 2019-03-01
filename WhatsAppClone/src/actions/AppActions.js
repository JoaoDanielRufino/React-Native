import {
  MODIFICA_ADICIONA_CONTATO_EMAIL,
  ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO,
  LISTA_CONTATOS, MODIFICA_MENSAGEM,
  LISTA_CONVERSA_USUARIO,
  ENVIA_MENSAGEM_SUCESSO,
  LISTA_CONVERSAS_USUARIO
} from "./types";
import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';

export const modificaAdicionaContatoEmail = (texto) => {
  return {
    type: MODIFICA_ADICIONA_CONTATO_EMAIL,
    payload: texto
  }
}

export const adicionaContato = email => {
  return dispatch => {
    const b64Email = b64.encode(email);
    firebase.database().ref(`/contatos/${b64Email}`).once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          const dadosUsuario = _.first(_.values(snapshot.val()));
          const emailCurrentUser = b64.encode(firebase.auth().currentUser.email);
          firebase.database().ref(`/usuario_contatos/${emailCurrentUser}`).push({ email, nome: dadosUsuario.nome })
            .then(() => adicionaContatoSucesso(dispatch))
            .catch(erro => adicionaContatoErro(dispatch, erro));
        }
        else {
          dispatch({ type: ADICIONA_CONTATO_ERRO, payload: 'E-mail inexistente' });
        }
      });
  }
}

const adicionaContatoErro = (dispatch, erro) => (
  dispatch({ type: ADICIONA_CONTATO_ERRO, payload: erro })
);

const adicionaContatoSucesso = dispatch => (
  dispatch({ type: ADICIONA_CONTATO_SUCESSO, payload: true })
);

export const habilitaInclusaoContato = () => ({
  type: ADICIONA_CONTATO_SUCESSO,
  payload: false
});

export const contatosUsuarioFetch = () => {
  return (dispatch) => {
    const emailB64 = b64.encode(firebase.auth().currentUser.email);
    firebase.database().ref(`/usuario_contatos/${emailB64}`).on('value', snapshot => {
      dispatch({ type: LISTA_CONTATOS, payload: snapshot.val() });
    });
  }
}

export const modificaMensagem = (text) => {
  return {
    type: MODIFICA_MENSAGEM,
    payload: text
  }
}

export const enviaMensagem = (texto, nome, email) => {
  return dispatch => {
    const usuarioEmailB64 = b64.encode(firebase.auth().currentUser.email);
    const contatoEmailB64 = b64.encode(email);

    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`).push({ texto, tipo: 'e' })
      .then(() => {
        firebase.database().ref(`/mensagens/${contatoEmailB64}/${usuarioEmailB64}`).push({ texto, tipo: 'r' })
          .then(() => dispatch({ type: ENVIA_MENSAGEM_SUCESSO }));
      })
      .then(() => {
        firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}/${contatoEmailB64}`).set({ nome, email });
      })
      .then(() => {
        firebase.database().ref(`/contatos/${usuarioEmailB64}`).once('value')
          .then(snapshot => {
            const dadosUsuario = _.first(_.values(snapshot.val()));
            firebase.database().ref(`/usuario_conversas/${contatoEmailB64}/${usuarioEmailB64}`).set({ nome: dadosUsuario.nome, email: firebase.auth().currentUser.email });
          });
      });
  }
}

export const conversaUsuarioFetch = contatoEmail => {
  const usuarioEmailB64 = b64.encode(firebase.auth().currentUser.email);
  const contatoEmailB64 = b64.encode(contatoEmail);

  return dispatch => {
    firebase.database().ref(`/mensagens/${usuarioEmailB64}/${contatoEmailB64}`).on('value', snapshot => {
      dispatch({ type: LISTA_CONVERSA_USUARIO, payload: snapshot.val() });
    });
  }
}

export const conversasUsuarioFetch = () => {
  const usuarioEmailB64 = b64.encode(firebase.auth().currentUser.email);

  return dispatch => {
    firebase.database().ref(`/usuario_conversas/${usuarioEmailB64}`).on('value', snapshot => {
      dispatch({ type: LISTA_CONVERSAS_USUARIO, payload: snapshot.val() });
    });
  }
}