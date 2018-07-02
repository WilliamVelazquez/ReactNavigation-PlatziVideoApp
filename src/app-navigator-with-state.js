import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';

import AppNavigator from './app-navigator';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root');

class AppNavigatorWithState extends ReduxifyApp{
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