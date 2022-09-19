//import liraries
import React, { Component } from "react";
import {
  View, Dimensions,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

// create a component
const Login = ({navigation}) => { 
  const [Email, setEmail] = useState('') 
  const [Password, setPassword] = useState('')
  return (
    <SafeAreaView style={styles.container}>
       <Text style={{fontWeight: '100', fontSize: 34, marginBottom: 10}}>
        Welcome</Text>
        <Text style={{marginBottom: 10, fontSize: 18}}>Sign in to continue</Text>
      <View style={styles.form}>
      <TextInput style={styles.input} placeholder="Email" value={Email}
       Email = 'Email'
       onChange={(Email) =>{setEmail(Email)}}/>
      <TextInput style={styles.input} placeholder="Password" value={Password}
       Password = 'Password'
       onChange={(Password) =>{setPassword(Password)}}/>
      <Text style={{fontWeight: 200, fontSize: 10}}>
        Don't have an account, signup here
      </Text>
      <TouchableOpacity style={{margin: 10, backgroundColor: 'grey'}} onPress={() => navigation.navigate('Profile')}>
        <Text>Signup</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text>Login</Text>
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
export default Login;
