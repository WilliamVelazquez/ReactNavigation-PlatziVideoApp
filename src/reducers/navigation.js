import {
  createNavigationReducer
} from 'react-navigation-redux-helpers';

import AppNavigator from '../app-navigator';

//export default createNavigationReducer(AppNavigator);
const navigationReducer = createNavigationReducer(AppNavigator);

export default navigationReducer;