import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Dimensions, Platform, Button, Linking, Modal, TouchableHighlight  } from 'react-native'
import React, { Component, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView,{PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps'
import * as Permissions from 'expo-permissions';
import MapViewDirections from 'react-native-maps-directions';


export default function Map({navigation}) { 
    const [thisLatitude, setLatitude] = useState(0)
    const [thisLongitude, setLongitude] = useState(0)
    const [status, setStatus] = useState(null)
    const [modalVisible, setModalVisible] = useState(false);
    const [minutes, setMinutes] = useState(0);
    const [distance, setDistance] = useState(0);
    

    const origin = {latitude: 49.278094, longitude: -122.919883}
    //const destination = {latitude: 24, longitude: -122.95259854497922};
    const GOOGLE_MAPS_APIKEY = 'AIzaSyBpFag3WoUi3-GvDBHspuczDDElH8JEIEQ';

    const componentWillMount = () => {
        try{
            requestLocationPermission()
        }
        catch{
            console.log("caught exception")
            
        }
    }

    async function requestLocationPermission() {  
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION)
    
        if (status === 'granted'){
            console.log("worked")
            return locateCurrentPos()
        }
        else{
            console.log("failed")
            //throw new Error('Location permission not granted')
            setModalVisible(true);
        }    

    }
    
    const triggerSettings = () => {
        if (modalVisible){
            
            Linking.openURL('app-settings:')
            setModalVisible(false)
        }
    }

    const locateCurrentPos = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(thisLatitude)
                console.log(thisLongitude)
                const newLatitude = position.coords.latitude
                const newLongitude = position.coords.longitude
                setLongitude(newLongitude)
                setLatitude(newLatitude)
                
            }   
        )
    }

    return(
    
        <View style={styles.container}>
            <Text>You clicked {thisLatitude} times.</Text>
            <Text>Approx. distance is {distance} km</Text>
            <Text>Approx. travel time to get food is {minutes} minutes</Text>
            <View>{componentWillMount()}</View>
            
            <Modal
                animationType="slide"
                transparent={false}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                }}>
                <View style={{
                    flex: 1,
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                <View>
                    <Text>    You do not have location services enabled!</Text>
                    <Button onPress = {()=> triggerSettings()}
                    title = "Enable Location Services in Settings"/>

                </View>
                </View>
            </Modal>
				
            <MapView 
            provider = {PROVIDER_GOOGLE}
            showsUserLocation = {true}
            style = {styles.mapStyle}
            region = {{
                latitude: thisLatitude,
                longitude: thisLongitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035
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
                <MapViewDirections
                    origin={origin}
                    destination={{latitude: thisLatitude, longitude: thisLongitude}}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="blue"

                    onReady={result => {
                            console.log(`Distance: ${result.distance} km`)
                            console.log(`Duration: ${result.duration} min.`)
                            const mins = result.duration
                            const dist = result.distance
                            setMinutes(mins);
                            setDistance(dist);
                        }
                    }
                />
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
