import {
  combineReducers
} from 'redux';

import navigation from './navigation.js';
import videos from './videos.js';

const reducer = combineReducers({
  navigation,
  videos
});

export default reducer;