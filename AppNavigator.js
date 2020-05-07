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


//import SignUp from 'SignUp'

const AppStack = createStackNavigator();

export default function AppNavigator(){
  return (
    <NavigationContainer>
      <AppStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <AppStack.Screen name = "Login" component = {Login}/>
        <AppStack.Screen name = "SignUp" component = {SignUp}/>
        <AppStack.Screen name = "Nav" component = {Nav}/>
        <AppStack.Screen name = "Map" component = {Map}/>
        <AppStack.Screen name = "ConfirmEmail" component = {ConfirmEmail}/>
        <AppStack.Screen name = "Onboard" component = {Onboard}/>
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

