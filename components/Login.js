import React, { Component, useState } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase';

export default function Login({navigation}){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [errorMsg, setErrorMsg] = useState()

    const loginUser = ({navigation}) => {
        console.log(email)
        console.log(password)
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('Nav'))
            .catch(() => setErrorMsg("Password or user doesn't exists"))
    }

    return (
      <KeyboardAvoidingView behavior = "padding" style={styles.container}>
          <View style = {styles.logoContainer}>
              <Image
               style = {styles.logo}
               source = {require('./Images/UIHere.png')}/>
               <Text style = {styles.title}> Meal Movers</Text>
          </View>
          <View style = {styles.formContainer}>
            <View style={styles.loginContainer}>
                <TextInput
                    placeholder = "E-mail"
                    returnKeyType = "next"
                    ref={(input) => {secondTextInput = input;}}
                    onSubmitEditing = {()=> thirdTextInput.focus()}
                    onChangeText = {text => setEmail(text)}
                    keyboardType = "email-address"
                    style = {styles.input}
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />

                <TextInput
                    placeholder = "Password"
                    returnKeyType = "go"
                    ref={(input) => {thirdTextInput = input;}}
                    secureTextEntry
                    style = {styles.input}
                    onChangeText = {text => setPassword(text)}
                />  
                
                
                <TouchableOpacity style = {styles.buttonContainer} onPress={()=> loginUser({navigation})}>
                    <Text style = {styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <View style = {styles.signUpBox}>
                <Text style = {styles.signUps}> Don't have an Account. </Text>
                <TouchableOpacity onPress={()=> {navigation.push('SignUp')}}><Text> Sign Up Here!</Text>
                </TouchableOpacity>
                </View>
                       
            </View>
          </View>
          
      </KeyboardAvoidingView>
    );
  
}


const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#7F7F7F' 
        
    },
    logoContainer:{
        alignItems : 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width : 100,
        height : 100
    },
    formContainer:{
        flexGrow: 0.5
    },
    title:{
        color: '#000',
        marginTop: 10,
        width: 190,
        textAlign : "center",
        opacity : 0.6
    },
    loginContainer: {
        padding: 20
    },
    signUpBox: {
        alignItems:"flex-end",
        justifyContent:"center",
        paddingVertical: 1, 
        flexDirection: 'row'
    },
    input:{
        height: 40,
        backgroundColor: '#C5C5C5',
        marginBottom : 20,
        paddingHorizontal: 10,
    },
    buttonContainer:{
        backgroundColor: '#EEEBEB',
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

