import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ConfirmEmail from './components/ConfirmEmail';
import Nav from './components/Nav'
import { NavigationContainer } from '@react-navigation/native';
import Onboard from './components/Onboard';
import Map from './components/Map';
import { Text, View } from 'react-native';
import App from './App';

//import SignUp from 'SignUp'

const AppStack = createStackNavigator();

export default function AppNavigator(){
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen name = "Login" component = {Login}/>
        <AppStack.Screen name = "SignUp" component = {SignUp}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

