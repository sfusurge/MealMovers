import * as React from 'react';
import AppNavigator from './AppNavigator'
import * as firebase from 'firebase';


export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAzp_vpPlvxYoOsZVlnxVJe4ywvuzAADXI",
    authDomain: "mealmovers-7acea.firebaseapp.com",
    databaseURL: "https://mealmovers-7acea.firebaseio.com",
    projectId: "mealmovers-7acea",
    storageBucket: "mealmovers-7acea.appspot.com",
    messagingSenderId: "81825855785",
    appId: "1:81825855785:web:ccadf687ab8c0817d6df38",
    measurementId: "G-5F5MNEGHFX"
  };
  // Initialize Firebase
  if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  return (
    <AppNavigator></AppNavigator> 
  );
}