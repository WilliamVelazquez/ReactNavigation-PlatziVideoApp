import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Search from '../../sections/containers/search';

import Icon from '../../sections/components/icon';

class Lucky extends Component {
  static navigationOptions = () => {
    return {
      title: 'Voy a tener suerte',
      tabBarIcon: <Icon icon="⭐"/>
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.iconImage}>🍀</Text>
        <Search />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 40
  },
  iconImage: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15
  }
})

export default Lucky