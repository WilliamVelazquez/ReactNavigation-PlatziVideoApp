import {
  combineReducers
} from 'redux';

import navigation from './navigation.js';
import videos from './videos.js';
import user from './user.js';

const reducer = combineReducers({
  navigation,
  videos,
  user
});

export default reducer;