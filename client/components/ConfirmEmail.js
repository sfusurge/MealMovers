import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput  } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function ConfirmEmail({navigation}){
   
    return (
        
      <View style={styles.container}>
          <View style = {styles.logoContainer}>
              <Image
               style = {styles.logo}
               source = {require('./Images/UIHere.png')}/>
               <Text style = {styles.title}> Meal Movers</Text>
          </View>
            
            <View style = {styles.formContainer}>
                <Text style = {styles.centerText}>Please Verify your Email</Text>
            </View>
            
            <View style = {styles.resendContainer}>
                <Text style = {styles.resendText}>Didn't get an Email?</Text>
                <TouchableOpacity>
                    <Text style = {styles.confirmEmailText}>
                        Click here to Resend
                    </Text>
                </TouchableOpacity>
            </View>
            
        
        </View>
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
        justifyContent: 'center',
        flexGrow: 1,
        alignItems: 'center'
        
    },
    centerText:{   
        marginBottom: 150,
        fontSize: 25,
        fontWeight: "200"
    },
    resendContainer:{
        flex: 0.4,
        
    },
    resendText:{
        fontWeight: "300",
        textAlign: 'center',
        fontSize: 20
    },
    confirmEmailText:{
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold"
    }
})