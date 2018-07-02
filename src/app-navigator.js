import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Home from './screens/containers/home';
import Movie from './screens/containers/movie';
import Category from './screens/containers/category';
import About from './screens/containers/about';
import Profile from './screens/containers/profile';
import Lucky from './screens/containers/lucky';
import Icon from './sections/components/icon';
import Header from './sections/components/header';

const Main = createStackNavigator(
  {
    Home,//Home:Home
    Movie,//Movie:Movie
    Category
  },
  {
    //initialRouteName: 'Home',
    navigationOptions: {
      header: Header,
      gesturesEnabled: true
    },
    mode: 'card',
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Main,
      navigationOptions: {
        title: 'Inicio',
        tabBarIcon: <Icon icon="🏡"/>,
      }
    },
    About: {
      screen: About,
      // navigationOptions: {
      //   tabBarIcon: <Icon icon="🤓"/>,
      // }
    },
    Lucky: {
      screen: Lucky,
      // navigationOptions: {
      //   tabBarIcon: <Icon icon="⭐"/>,
      // }
    },
    Profile: {
      screen: Profile,
      // navigationOptions: {
      //   tabBarIcon: <Icon icon="😎"/>,
      // }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: 'white',
      activeBackgroundColor: '#65A721'
    }
  }
);

export default TabNavigator;