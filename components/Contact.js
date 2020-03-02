import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Styles from '../Styles.js';

export function ContactScreen() {
    return (
        <View style={Styles.container}>
            <Text style={Styles.logo}>
                Contact!
            </Text>
        </View>
    );
  }