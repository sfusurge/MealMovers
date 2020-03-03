import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Navigitor} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Login extends Component {
  signUp(){
    Actions.signup()
  }

  render() {
    return (
      
      <View style={styles.container}>
          <TextInput
            placeholder = "username or email"
            returnKeyType = "next"
            onSubmitEditing = {()=>this.passwordinput.focus()}
            keyboardType = "email-address"
            style = {styles.input}
            autoCapitalize = "none"
            autoCorrect = {false}
            />
            
            <TextInput
            placeholder = "password"
            returnKeyType = "go"
            secureTextEntry
            style = {styles.input}
            ref={((input) => this.passwordinput = input)}
            />   
            <TouchableOpacity style = {styles.buttonContainer}>
                <Text style = {styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <View style = {styles.signUpBox}>
              <Text style = {styles.signUps}> Don't have an Account. </Text>
              <TouchableOpacity onPress= {this.signUp}>
                <Text style = {styles.signUpsBtn}> Sign Up Here!</Text>
              </TouchableOpacity>
            </View>
                       
      </View>
    );
  }
} 



const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    signUpBox: {
        alignItems:"flex-end",
        justifyContent:"center",
        paddingVertical: 1, 
        flexDirection: 'row'
    },
    input:{
        height: 40,
        backgroundColor: '#CEFC9F',
        marginBottom : 20,
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor: '#75BB09',
        paddingVertical: 15
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: '900'  
    },
    signUps:{
        color: 'rgba(0,0,0, 0.7)',
        fontSize: 16
    },
    signUpsBtn:{
      color: '#000000',
      fontSize: 16,
      fontWeight: "500"
    }
})