import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ContactScreen } from './components/Contact.js';
import { ProfileScreen } from './components/Profile.js';
import Nav from './components/Nav.js';

// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.logo}>
//         *LOGO*
//       </Text>
//     </View>
//   );
// }

// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator>
    //     <Tab.Screen name="Contact" component={ContactScreen} />
    //     <Tab.Screen name="Home" component={HomeScreen} />
    //     <Tab.Screen name="Profile" component={ProfileScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <Nav></Nav>
  );
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