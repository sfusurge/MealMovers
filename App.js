import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>
          *LOGO*
        </Text>
      </View>
    );
  }
}

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