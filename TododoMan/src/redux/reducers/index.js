import { combineReducers } from 'redux';

import folders from './folders';
import users from './users';
import color from './color';
import events from './events';

const rootReducer = combineReducers({
  folders,
  users,
  color,
  events
});

export default rootReducer;