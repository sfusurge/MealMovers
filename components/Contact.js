import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles.js';
import { TouchableOpacity } from 'react-native-gesture-handler'

export function ContactScreen({navigation}) {
    return (
        <View style={Styles.container}>
            <Text style={Styles.logo}>
                Contact!
            </Text>
            <TouchableOpacity onPress={()=> {navigation.push("Map")}}>
                <Text style={Styles.logo}>
                Go to the Map
                </Text>
            </TouchableOpacity>
        </View>
        
    );
  }