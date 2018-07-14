

import React, {Component} from 'react';
import {
  Platform, 
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';

const AppNavigator = StackNavigator({
  HomeScreen: { screen: Home}
}); 

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}