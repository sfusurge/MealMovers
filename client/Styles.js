import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#4F6D7A',
    },
    logo: {
      fontSize: 80,
      textAlign: 'center',
      margin: 40,
      color: '#F5FCFF',
    },
    requestText: {
      fontSize: 45,
      textAlign: 'center',
      fontWeight: 'bold'
    },
    requestDate: {
      fontSize: 45,
      textAlign: 'center',
    },
    requestButton: {
      backgroundColor: "#c4c4c4",
      borderRadius: 15,
      padding: 10,
      alignItems: 'center',
      marginHorizontal: 100,
      marginTop: 20,
    },
    orderConfirmedImage: {
      alignSelf: 'center'
    },
    contactInfo: {
      borderWidth: 2,
      borderColor: '#000000',
      width: 300,
      height: 100,
      alignSelf: 'center',
      padding: 5
    }
});