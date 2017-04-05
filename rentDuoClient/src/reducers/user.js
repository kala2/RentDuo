import { SET_USER } from '../actions/profileUpdateActions';

export default function user(state = [], action = {}) {
  switch(action.type) { 
    case SET_USER:
      return action.user;
    default: return state;
  }
}
