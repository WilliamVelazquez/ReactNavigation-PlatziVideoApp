import React, {Component} from 'react';
import Video from 'react-native-video';
import {
  StyleSheet,
  ActivityIndicator,
  Text
} from 'react-native';
import Layout from '../components/player-layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/full-screen';

class Player extends Component {
  state = {
    loading: true,
    paused: false,
    inFullScreen: false
  }
  onBuffer = ({isBuffering}) => {
    this.setState({
      loading: isBuffering
    });
  }
  onLoad = () => {
    this.setState({
      loading: false
    });
  }
  playPause = () => {
    this.setState({
      paused: !this.state.paused
    });
  }
  setPlayer = (ref) => {
    this.player = ref;
  }
  fullScreen = () => {
    !this.state.inFullScreen ?
    this.player.presentFullscreenPlayer()
    :this.player.dismissFullscreenPlayer();
    this.setState({
      inFullScreen: !this.state.inFullScreen
    });
  }
  render(){
    return(
      <Layout
        loading={this.state.loading}
        video={
          <Video 
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode="contain"
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            ref={this.setPlayer}
          />
        }
        loader={
          <ActivityIndicator color="red" />
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <Text>Progress bar |</Text>
            <Text>time left |</Text>
            <Text>full screen</Text>
            <FullScreen
              onPress={this.fullScreen}
              inFullScreen={this.state.inFullScreen}
            />
          </ControlLayout>
        }
      />      
    )
  }
}

const styles=StyleSheet.create({
  video:{
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0
  }
})

export default Player;