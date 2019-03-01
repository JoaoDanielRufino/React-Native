import {
  MODIFICA_NOME,
  MODIFICA_SENHA,
  MODIFICA_EMAIL,
  CADASTRO_SUCESSO,
  CADASTRO_ERRO,
  LOGIN_ERRO,
  LOGIN_EM_ANDAMENTO,
  LOGIN_SUCESSO,
  CADASTRO_EM_ANDAMENTO
} from '../actions/types';

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: '',
  erroCadastro: '',
  erroLogin: '',
  loadingLogin: false,
  loadingCadastro: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFICA_NOME: return { ...state, nome: action.payload };
    case MODIFICA_EMAIL: return { ...state, email: action.payload };
    case MODIFICA_SENHA: return { ...state, senha: action.payload };
    case CADASTRO_ERRO: return { ...state, erroCadastro: action.payload, loadingCadastro: false };
    case CADASTRO_SUCESSO: return { ...state, nome: '', senha: '' };
    case LOGIN_ERRO: return { ...state, erroLogin: action.payload, loadingLogin: false };
    case LOGIN_EM_ANDAMENTO: return { ...state, loadingLogin: true };
    case LOGIN_SUCESSO: return { ...state, ...INITIAL_STATE }
    case CADASTRO_EM_ANDAMENTO: return { ...state, loadingCadastro: true };
    default: return state;
  }
}