import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles.js';

export function ContactScreen({navigation}) {
    return (
        <View style={Styles.container}>
            <Text style={Styles.logo}>
                Contact!
            </Text>
        </View>
        
    );
  }