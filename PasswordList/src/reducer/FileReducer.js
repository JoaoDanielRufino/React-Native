import { TEXT_CHANGED } from '../action/types';

const INITIAL_STATE = {
  text: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case TEXT_CHANGED: return { text: action.payload };
    default: return state;
  }
}