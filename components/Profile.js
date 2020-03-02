import React from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles.js';

export function ProfileScreen() {
    return (
        <View style={Styles.container}>
            <Text style={Styles.logo}>
                Profile!
            </Text>
        </View>
    );
  }