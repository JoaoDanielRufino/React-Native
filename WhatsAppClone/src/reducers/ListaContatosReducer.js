import { LISTA_CONTATOS } from "../actions/types";

const INITIAL_STATE = {

}

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case LISTA_CONTATOS: return action.payload;
    default: return state;
  }
}