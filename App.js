

import React, {Component} from 'react';
import {
  Platform, 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from './screens/Home';
import Menu from './screens/Menu';

const AppNavigator = createStackNavigator({
  HomeScreen: { screen: Home},
  MenuScreen: { screen: Menu}
}); 

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}