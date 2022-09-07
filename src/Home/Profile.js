import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../../assets/main.gif");

const App = ({navigation}) => (
  
    <ImageBackground source={image} resizeMode="contain" style={styles.image}>
        <Text style={{margin:20,borderRadius:15}} onPress={() => navigation.navigate('Maindash')}>
    Profile
        </Text>
    </ImageBackground>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 23
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
    ,
  }
});

export default App;