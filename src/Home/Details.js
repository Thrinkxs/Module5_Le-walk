//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
const [currentLocation, setCurrentLocation] = useState(null);

// create a component
const Details = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    console.log("CurrentLocation");
    useEffect (() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    console.log(location);
    })();
  }, []);
    return (
        <View style={styles.container}>
             <MapView style={styles.map} 
             initialRegion={{
                latitudde: -26.143841,
                longitude: 27.995186,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
             }}
             />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      }
});

//make this component available to the app
export default Details;
