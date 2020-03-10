import React from 'react';
import { Text, View, Image } from 'react-native';
import Nav from './Nav.js'
import Styles from '../Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function FoodRequested() {
    return (
        <View>
            <View>
                <Image
                    source={require('../assets/orderConfirmed.png')}
                    style={Styles.orderConfirmedImage}
                />
                <Text style={Styles.requestDate}>Order Confirmed!</Text>
            </View>
            <View style={Styles.contactInfo}>
                <Text style={{fontSize: 20}}>ETA:</Text>
                <Text style={{fontSize: 20}}>Contact:</Text>
                <Text style={{fontSize: 20}}>Phone:</Text>
            </View>
            <TouchableOpacity
              style={Styles.requestButton}
              onPress={()=> console.log("Cancel order")}
              >
                <Text style={{fontSize: 20}}>Cancel Order</Text>
            </TouchableOpacity>
        </View>
    )
}