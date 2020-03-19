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

          <View>
              <Text>Please Verify your Email</Text>
          </View>
        
          <View>
                <Text>Didn't get an Email</Text>
                <TouchableOpacity>
                    Click here to Resend
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
})