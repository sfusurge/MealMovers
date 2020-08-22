import React,{ Component, useState } from 'react';
import { Text, View } from 'react-native';
import Styles from '../Styles.js';
import * as firebase from 'firebase';


export function ProfileScreen() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [number, setNumber] = useState("")
    const [flag, setFlag] = useState(1)
    const [flag1, setFlag1] = useState(1)
    
    const wrapperGetInfo = () =>{
        if(flag == 1){
            getInfo();
            //getOtherInfo();
            setFlag(0)
        }
    }
    const wrapperGetOtherInfo = () =>{
        if (flag1 == 1){
            getOtherInfo();
            setFlag1(0)
        }
    }

    
    const getInfo = () =>{
        console.log("Print yes")
        var user = firebase.auth().currentUser
        
        
        if (user != null){
            console.log(user.displayName)
            setName(user.displayName)
            var ref = firebase.database().ref("users")
            console.log("the user is: " + user.displayName)
            ref.orderByChild("username").equalTo(user.displayName).on("child_added", function(data) {
                    console.log(data.val().userEmail);
                    setEmail(data.val().userEmail)
                    setNumber(data.val().userPhoneNum)
                    setAddress(data.val().userAddress)
            });

            return
        }
    }

    
    return (
        <View style={Styles.container}>
            <View>{wrapperGetInfo()}</View>
            <Text style={Styles.logo}>
                Profile!
            </Text>
            <View>
                <Text>Username: {name}</Text>
            </View>
            <View>
                <Text>Email: {email} </Text>
            </View>
            <View>
                <Text>PhoneNumber: {number} </Text>
            </View>
            <View>
                <Text>Address: {address} </Text>
            </View>
        </View>
        
    );
  }