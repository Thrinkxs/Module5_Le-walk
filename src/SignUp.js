//import liraries
import React, { Component, useState } from 'react';
import {
    View, Dimensions,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
  } from "react-native";
import { registration } from './Backend/Authenttication';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

// create a component
const SignUp = (navigation) => {
  const [FirstName, setFirstName] = useState('') 
  const [LastName, setLastName] = useState('') 
  const [Email, setEmail] = useState('') 
  const [Password, setPassword] = useState('') 
  const signUser=()=>{
      registration(Email, Password, FirstName, LastName)
  }
  return (
        <SafeAreaView style={styles.container}>
        <Text style={{fontWeight: '100', fontSize: 34, marginBottom: 10}}>
         Welcome</Text>
         <Text style={{marginBottom: 10, fontSize: 18}}>Sign up to continue</Text>
       <View style={styles.form}>
       <TextInput style={styles.input} placeholder="First Name" value={FirstName} 
      FirstName = 'First Name'
      onChange={(FirstName) =>{setFirstName(FirstName)}}/>
       <TextInput style={styles.input} placeholder="Last Name" value={LastName} 
       LastName = 'Last Name'
       onChange={(LastName) =>{setLastName(LastName)}}
       />
       <TextInput style={styles.input} placeholder="Email" value={Email}
       Email = 'Email'
       onChange={(Email) =>{setEmail(Email)}}
       />

       <TextInput style={styles.input} placeholder="Password" value={Password}
       Password = 'Password'
       onChange={(Password) =>{setPassword(Password)}}
       />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text>Login</Text>
      </TouchableOpacity>
       </View>
       <TouchableOpacity style={styles.button} onPress={signUser}>
         <Text>Signup</Text>
       </TouchableOpacity>
     </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      input: {
        height: 40,
        margin: 12,
        //borderWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
      },
      button: {
        alignItems: "center",
        backgroundColor: "turquoise",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      },
      form:{
        margin: 16,
        paddingTop: 16,
      }
});

//make this component available to the app
export default SignUp;
