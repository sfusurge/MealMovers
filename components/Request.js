import React from 'react';
import { Text, View } from 'react-native';
import Nav from './Nav.js'
import Styles from '../Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function RequestDelivery() {
    return (
        <View>
            <Text style={Styles.requestText}>
                Next Delivery:
            </Text>
            <Text style={Styles.requestDate}>
                MM/DD/YYYY
            </Text>
            <TouchableOpacity
              style={Styles.requestButton}
              onPress={()=>console.log("Food requested")}
            >
                <Text style={{fontSize: 20}}>Request Food</Text>
            </TouchableOpacity>
        </View>
    )
}