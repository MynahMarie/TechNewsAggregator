/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { getNews } from './src/getNews';
import Article from './src/components/Article';
import AppNavigator from './src/components/navigation/AppNavigator';

export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}
