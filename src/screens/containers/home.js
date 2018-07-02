import React, {Component, Fragment} from 'react';

import {
  StatusBar
} from 'react-native';

import {connect} from 'react-redux';

import Header from '../../sections/components/header';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list';
import Movie from '../../screens/containers/movie';
import Search from '../../sections/containers/search';

import API from '../../../utils/api';

class Home extends Component{
  static navigationOptions = () => {
    return {
      header: Header
      // title: 'Inicio'
    }
  };
  async componentDidMount(){
    
    this.focus = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('white');
    });

    const categoryList =  await API.getMovies();
    this.props.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })

    const suggestionList =  await API.getSuggestion(10);
    this.props.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
  }

  componentWillUnmount(){
    this.focus.remove();
  }

  render(){
    return(
      <Fragment>
        <Search />
        <CategoryList />
        <SuggestionList />
      </Fragment>
    )
  }
}

export default connect(null)(Home);