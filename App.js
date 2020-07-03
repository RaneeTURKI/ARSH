


import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableHighlight, Alert, TouchableOpacity, Image, ImageBackground, ActivityIndicator } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login';
import Home from './components/Home';
import Chat from './components/Chat';

import { DrawerLayoutAndroid } from 'react-native';
import Signup from './components/Signup';



const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{

        headerShown: null,
     



      }}>
      
      <Stack.Screen  name="Login" component={Login} /> 
      <Stack.Screen  name="Signup" component={Signup} />   
      <Stack.Screen  name="Home" component={Home} />  
      <Stack.Screen  name="Chat" component={Chat} />
    


    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
    >
      <MyStack />
    </NavigationContainer>
  );
}




var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 66
  },
  button: {
    padding: 8,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 17,
    color: "#007AFF"
  },
  subView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFFFFF",
    height: 630,  //taille 
  }
});

































