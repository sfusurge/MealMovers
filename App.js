import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Nav from './components/Nav.js';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          *LOGO*
        </Text>
      </View>
      // <Nav></Nav>
    );
  }
}

const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
  },
  {
    initialRouteName: 'Home'
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F6D7A',
  },
  logo: {
    fontSize: 80,
    textAlign: 'center',
    margin: 40,
    color: '#F5FCFF',
  },
});