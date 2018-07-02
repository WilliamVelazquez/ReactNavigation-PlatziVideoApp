import React, {Component} from 'react';
import {
  Animated
} from 'react-native';

import MovieLayout from '../components/movie-layout';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Player from '../../player/containers/player';
import Details from '../../videos/components/details';
import {connect} from 'react-redux';

class Movie extends Component{
  state={
    opacity: new Animated.Value(0)
  }

  static navigationOptions = ({navigation}) => {
    return{
      header: (
        <Header>
          <Close 
            //onPress={this.closeVideo}
            onPress={()=>{navigation.goBack()}}
          />
        </Header>
      )
    }
  }

  closeVideo=()=>{
    this.props.dispatch({
      type:'SET_SELECTED_MOVIE',
      payload: {
        movie: null
      }
    })
  }

  componentDidMount(){
    Animated.timing(
      this.state.opacity,
      {
        toValue: 1,
        duration: 1000//ms
      }
    ).start();
  }

  render(){
    return(
      <Animated.View
        style={{
          flex: 1,
          opacity: this.state.opacity
        }}
      >
        <MovieLayout>
          
          <Player />
          <Details {...this.props.movie}/>
        </MovieLayout>
      </Animated.View>
    );
  }
}

function mapStateToProps(state){
  return{
    movie: state.videos.selectedMovie
  }
}

export default connect(mapStateToProps)(Movie);