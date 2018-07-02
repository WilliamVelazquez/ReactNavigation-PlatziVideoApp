import React from 'react';

import {
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

function FullScreen(props){
  return(
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.container}
      hitSlop={{
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
      }}
    >
      {
        props.inFullScreen ?
        <Text style={styles.button}>Exit</Text>
        :
        <Text style={styles.button}>Full Screen</Text>
      }
    </TouchableHighlight>
  )
}

const styles=StyleSheet.create({
  container:{
    justifyContent: 'center',
    paddingHorizontal: 10,
    height: 25,
    marginRight: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'gray'
  },
  button:{
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold'
  }
})

export default FullScreen;