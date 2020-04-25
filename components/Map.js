import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Dimensions, Platform  } from 'react-native'
import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'

//import {request,PERMISSIONS} from 'react-native-permissions'

export default function Map({navigation}) {
    let thisLatitude
    let thisLongitude
    var _map

    

    // requestLocationPermission = async () => {
    //     if (Platform.OS === 'ios'){
    //         var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    //         console.log('Iphone' + response)
    //     }
    //     if (response === 'granted'){
    //         locateCurrentPos();
    //     } 
    // }

    const locateCurrentPos = (thisLatitude,thisLongitude) => {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log("Check this statement")
                console.log(JSON.stringify(position))
                thisLatitude = position.coords.latitude,
                thisLongitude = position.coords.longitude                
            }   
        )
    }




    return(
        <View style={styles.container}>
            <Text>{thisLatitude}</Text>            
            <MapView 
            provider = {PROVIDER_GOOGLE} 
            //ref = {map=> _map = map}
            showsUserLocation = {true}
            style = {styles.mapStyle}
            region = {{
                latitude: thisLatitude,
                longitude: thisLongitude,
                latitudeDelta: 0.09,
                latitudeDelta: 0.035
            }}>
                <Marker
                coordinate  = {{latitude: 49.278094, longitude: -122.919883}}
                title = {'Meal Movers Home Base'}>

                <Callout>
                    <Image 
                    style = {styles.logo}
                    source = {require('./Images/UIHere.png')}
                    />
                    <Text>Meal Movers Home Base</Text>
                </Callout>

                </Marker>
            </MapView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
        width : 100,
        height : 100
    },
    mapStyle: {
        width: '100%',
        height: '80 %'
      },

  });
