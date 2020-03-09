import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Nav from './components/Nav'
import { useNavigation } from '@react-navigation/native';
//import SignUp from 'SignUp'

function GoToButton({ screenName }) {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity
        
        onPress={() => navigation.navigate(screenName)}
      />
    );
}
const AppNavigator = createStackNavigator({
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Nav: {screen: Nav}
    
    
    },{ headerMode: 'none' },
    {
        // Specifing Initial Screen
        initalRoute: 'Login'
    }
);
const App = createAppContainer(AppNavigator);

export default App;