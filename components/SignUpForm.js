import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Navigitor} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class SignUp extends Component{
    render(){
        return(
            <View style={styles.Container}>
                <View>
                    <Text>Name of Organization:</Text>
                    
                </View>
            </View>
        );
        
    }
}