import { TEXT_CHANGED } from './types';

export const updateText = text => {
  return { type: TEXT_CHANGED, payload: text };
}