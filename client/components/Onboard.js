import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput  } from 'react-native';

import { useNavigation } from '@react-navigation/native';


export default function Onboard({navigation}){
   
    return (
        
      <View style={styles.container}>
          <View style = {styles.logoContainer}>
              <Image
               style = {styles.logo}
               source = {require('./Images/UIHere.png')}/>
               <Text style = {styles.title}> Meal Movers</Text>
          </View>
            
            <View style = {styles.formContainer}>
                <Text style = {styles.centerText}>Please wait for the club to confirm your registration</Text>
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
        paddingTop: 50,
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
        marginBottom: 100,
        fontSize: 30,
        textAlign: 'center',
        fontWeight: "500",
        marginHorizontal: 70
    },
})