import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ContactScreen } from './Contact.js';
import { ProfileScreen } from './Profile.js';
import { RequestDelivery } from './Request.js';
import { FoodRequested } from './FoodRequested.js';

// Modified from https://reactnavigation.org/docs/tab-based-navigation

const Tab = createBottomTabNavigator();

export default function Nav() {
  const [requested, setRequested] = React.useState(1);
  // TODO: assign based on data in database

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Contact" component={ContactScreen} />
        <Tab.Screen name="Home" component={requested ? FoodRequested : RequestDelivery} /> 
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}