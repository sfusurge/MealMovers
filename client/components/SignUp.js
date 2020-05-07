import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, View, TextInput, TouchableOpacity, Text, Navigitor} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Actions } from 'react-native-router-flux';

export default function SignUp({navigation}){
    var emailInput = "" 
    var passwordInput = ""
    var addressInput = ""
    var numberInput = ""
    var passwordInput = ""
    var confirmPasswordInput = ""
    
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
                            onSubmitEditing = {()=> emailInput.focus()}
                            keyboardType = "email-address"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
                   
                    
                        <TextInput
                            placeholder = "E-mail"
                            returnKeyType = "next"
                            onSubmitEditing = {()=> numberInput.focus()}
                            ref={((input) => emailInput = input)}
                            keyboardType = "email-address"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
                   
                    
                        <TextInput
                            placeholder = "Phone number"
                            returnKeyType = "next"
                            onSubmitEditing = {()=> addressInput.focus()}
                            ref={((input) => numberInput = input)}
                            keyboardType = "email-address"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
 
                        <TextInput
                            placeholder = "Address"
                            returnKeyType = "next"
                            onSubmitEditing = {()=> passwordInput.focus()}
                            ref={((input) => addressInput = input)}
                            keyboardType = "email-address"
                            style = {styles.input}
                            autoCapitalize = "none"
                            autoCorrect = {false}
                            />
                  
                    <TextInput
                        placeholder = "Password"
                        returnKeyType = "next"
                        secureTextEntry
                        onSubmitEditing = {()=> confirmPasswordInput.focus()}
                        ref={((input) => passwordInput = input)}
                        style = {styles.input}
                        
                        
                    /> 

                    <TextInput
                        placeholder = "Confirm Password"
                        returnKeyType = "go"
                        secureTextEntry
                        style = {styles.input}
                        ref={((input) => confirmPasswordInput = input)}
                    />   
                    
                    <TouchableOpacity style = {styles.buttonContainer} onPress={()=> {navigation.navigate('Onboard')}}>
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