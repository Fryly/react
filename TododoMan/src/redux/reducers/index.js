import { combineReducers } from 'redux';

import folders from './folders';
import users from './users';
import color from './color';

const rootReducer = combineReducers({
  folders,
  users,
  color
});

export default rootReducer;