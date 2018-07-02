import {createStackNavigator} from 'react-navigation';
import Loader from './sections/components/loader';

const Main = createStackNavigator(
  {
    Home: Loader
  }
);

export default Main;