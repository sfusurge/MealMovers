import React, { Component, useState } from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, View, TextInput, TouchableOpacity, Text, Navigitor} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';

export default function SignUp({navigation}){

    const firebaseConfig = {
        apiKey: "AIzaSyAzp_vpPlvxYoOsZVlnxVJe4ywvuzAADXI",
        authDomain: "mealmovers-7acea.firebaseapp.com",
        databaseURL: "https://mealmovers-7acea.firebaseio.com",
        projectId: "mealmovers-7acea",
        storageBucket: "mealmovers-7acea.appspot.com",
        messagingSenderId: "81825855785",
        appId: "1:81825855785:web:ccadf687ab8c0817d6df38",
        measurementId: "G-5F5MNEGHFX"
      };
      // Initialize Firebase
      if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [address, setAddress] = useState()
    const [phonenumber, setPhonenumber] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    // const [errorMessage, setErrorMessage] = useState()

    const createUser = ({navigation}) => {
        // firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(email, password)
        //     .then(() => navigation.navigate('Login'))
        // Firebase stuff!
        console.log(name)
        console.log(email)
        console.log(address)
        console.log(phonenumber)
        console.log(password)
        console.log(confirmPassword)
    }
    
    return (
        <KeyboardAwareScrollView
        style={{ backgroundColor: '#4c69a5' }}
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={true}
        >
            <View style = {styles.logoContainer}>
                <Image
                 style = {styles.logo}
                 source = {require('./Images/UIHere.png')}/>
                 <Text style = {styles.title}> Meal Movers</Text>
            </View>
            <View style = {styles.formContainer}>
              <View style={styles.signUpContainer}>
                    
                        
                        <TextInput
                            placeholder = "Name of Organization"
                            returnKeyType = "next"
                            onSubmitEditing = {()=> {secondTextInput.focus();}}
                            keyboardType = "email-address"
                            onChangeText = {text => setName(text)}
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
                   
                    
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
                            placeholder = "Phone number"
                            returnKeyType = "next"
                            ref={(input) => {thirdTextInput = input;}}
                            onSubmitEditing = {()=> fourthTextInput.focus()}
                            onChangeText = {text => setPhonenumber(text)}
                            keyboardType = "email-address"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
 
                        <TextInput
                            placeholder = "Address"
                            returnKeyType = "next"
                            ref={(input) => {fourthTextInput = input;}}
                            onSubmitEditing = {()=> fifthTextInput.focus()}
                            onChangeText = {text => setAddress(text)}
                            keyboardType = "email-address"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
                  
                    <TextInput
                        placeholder = "Password"
                        returnKeyType = "next"
                        ref={(input) => {fifthTextInput = input;}}
                        secureTextEntry
                        onSubmitEditing = {()=> sixthTextInput.focus()}
                        onChangeText = {text => setPassword(text)}
                        style = {styles.input}
                        
                    /> 

                    <TextInput
                        placeholder = "Confirm Password"
                        returnKeyType = "go"
                        ref={(input) => {sixthTextInput = input;}}
                        secureTextEntry
                        style = {styles.input}
                        onChangeText = {text => setConfirmPassword(text)}
                    />   
                    
                    <TouchableOpacity style = {styles.buttonContainer} onPress={() => createUser({navigation})}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
    
                    <View style = {styles.signUpBox}>
                    <Text style = {styles.signUps}> Already have an account? </Text>
                    <TouchableOpacity onPress={()=> {navigation.navigate('Login')}}><Text> Log In</Text>
                    </TouchableOpacity>
                    </View>
                            
                </View>
            </View>
            
        </KeyboardAwareScrollView>
    );   
}
const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#C5C5C5' 
        
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
    signUpContainer: {
        padding: 40
    },
    signUpBox: {
        alignItems:"flex-end",
        justifyContent:"center",
        flexDirection: 'row'
    },
    input:{
        height: 40,
        backgroundColor: '#CEFC9F',
        marginBottom : 20,
        padding: 10
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
    },
    
    inputNameText:{
        textAlign: 'center',    
    },
})