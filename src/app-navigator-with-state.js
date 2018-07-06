import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {connect} from 'react-redux';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';
import {NavigationActions} from 'react-navigation';

import AppNavigator from './app-navigator';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp{
  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount(){
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    //onPress Android Back Button
    this.props.dispatch(
      NavigationActions.back({
        key: null//'Home'
      })
    );
    return true;
  }
  // render(){
  //   return(
  //     <AppNavigator 
  //       //dispatch->A donde mandar esas acciones | state-> cual es el estado con el que maneja las acciones| addListener ->la forma de escuchar los eventos de react navigation
  //       navigation={}
  //     />
  //   );
  // }
}

function mapStateToProps(state){
  return {
    state: state.navigation
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);