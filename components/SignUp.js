import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Navigitor} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SignUp extends Component {
    goBack(){
        Actions.pop();
    }
    render(){
        return(
            <View style={styles.Container}>
                <TouchableOpacity onPress={this.goBack}><Text> Sign Up Here!</Text>
                </TouchableOpacity>
            </View>
        );
    }

    
}
const styles = StyleSheet.create({
    
    Container:{
        alignItems : 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
})