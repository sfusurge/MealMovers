import React, { Component } from 'react';
import { KeyboardAvoidingView, Image, StyleSheet, View, TextInput, TouchableOpacity, Text, Navigitor} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function SignUp({navigation}){
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
                <Text> Name of Organization</Text>
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
                    //ref={((input) => this.passwordinput = input)}
                    />   
                    <TouchableOpacity style = {styles.buttonContainer}>
                        <Text style = {styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
    
                    <View style = {styles.signUpBox}>
                    <Text style = {styles.signUps}> Already have an account? </Text>
                    <TouchableOpacity onPress={()=> {navigation.navigate('SignUp')}}><Text> Log In</Text>
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
        backgroundColor : '#B3FE78' 
        
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