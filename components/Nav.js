import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Styles from '../Styles.js';
import { ContactScreen } from './Contact.js';
import { ProfileScreen } from './Profile.js';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Modified from https://reactnavigation.org/docs/tab-based-navigation

function HomeScreen({navigation}) {
  return (
    <View style={Styles.container}>
      <Text style={Styles.logo}>
        *LOGO*
      </Text>
      <TouchableOpacity onPress={()=> {navigation.push("Map")}}>
        <Text>
          Go to the Map
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default class Nav extends React.Component {
  render () {
    return (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Contact" component={ContactScreen} />
          <Tab.Screen name="Home" component={HomeScreen} /> 
          {/* ^ This should eventually be replaced by the home screen for giver/receiver */}
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
  }
}