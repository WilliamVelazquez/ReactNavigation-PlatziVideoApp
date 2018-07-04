import React, {Component} from 'react';
import {connect} from 'react-redux';

import Loader from '../../sections/components/loader';

class Loading extends Component{
  componentDidMount(){
    if(this.props.user){
      this.props.navigation.navigate('App');
    }else{
      this.props.navigation.navigate('Login');
    }
  }
  render(){
    return <Loader />
  }
}

function mapStateToProps(state) {
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(Loading);