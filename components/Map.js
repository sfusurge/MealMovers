import MapView from 'react-native-maps'
import { StyleSheet, View, Image, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, Dimensions  } from 'react-native'
import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Map({navigation}) {
    return(
        <View style={styles.container}>
            <MapView style={styles.mapStyle} />
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
    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },

  });
