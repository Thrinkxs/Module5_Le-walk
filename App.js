import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Home from './src/Home/Home';
import Profile from './src/Home/Profile';
import Maindash from './src/Home/Maindash';
import Details from './src/Home/Details';
import * as firebase from 'firebase';
import firebaseConfig from './src/firebaseConfig';
import SignIn from './src/Signin';
const Stack = createNativeStackNavigator();

export default function App() {
  if (!firebase.apps.length){
    console.log("Firebase is connected");
    firebase.initializeApp(firebaseConfig)
  }
  return (
   
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Home" component={Home}/>
        <Stack.Screen name = "Profile" component={Profile} options={{title: 'Welcome'}}/>
        <Stack.Screen name = "Maindash" component={Maindash} options={{title: 'Demo'}}/>
        <Stack.Screen name = "Details" component={Details} options={{title: 'Services'}}/>
        <Stack.Screen name = "SignIn" component={SignIn} options={{title: 'SignIn'}}/>


      </Stack.Navigator>
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
