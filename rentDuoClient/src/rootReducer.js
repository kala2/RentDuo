import { combineReducers } from 'redux';
import flashMessages from './reducers/flashMessages';
import auth from './reducers/auth';
import user from './reducers/user';

export default combineReducers({
  flashMessages,
  user,
  auth
});
