//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Loader from "../Loader";
import carousel from "react-native-snap-carousel";
import Carousel from "react-native-snap-carousel";
import { TouchableOpacity } from "react-native-web";
const [currentLocation, setCurrentLocation] = useState(null);

// create a component
const Details = () => {
  const companies = serviceList;
  let refCarousel = null;
  const [currentLocation, setCurrentLocation] = useState(null);
  console.log("CurrentLocation");
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
      console.log(location);
    })();
  }, []);

  const RenderMarker = () => {
    return (
      <View>
        {
           companies.map((maker, index) => {
            return (
              <Marker
              key={index}
              coordinate={{
                latitude: maker.coord["latitude"],
                longitude: maker.coord["longitude"],
              }}
              title={maker.name}
              image={marker.avatar}
            />
            )
          })
        }
      </View>
   
    )
      }
  const renderCard = ({item, index}) => {
    return (
      <View style={{backgroundColor:'white'}}>
<Text> {item.name}</Text>
<Text> {item.email}</Text>
<TouchableOpacity>
  <Text>
    Book Now
  </Text>
</TouchableOpacity>
      </View>
    )
  }  
  
  return (
    <View style={styles.container}>
      {
      companies != null ? (
        <View>
          <MapView
            style={styles.map}
            initialRegion={{
              latitudde: -26.143841,
              longitude: 27.995186,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            showsUserLocation={true}
          >
            <RenderMarker />
          </MapView>
          <Carousel
            ref={(c) => {
              refCarousel = c;
            }}
            data={companies.entries}
            renderItem={renderCard}
            sliderwidth={Dimensions.get('window').width}
            itemWidth={300}
            containerCustomStyle={styles.carousel}
          />
        </View>
      ) : 
        <Loader />
      }
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
    ...StyleSheet.absoluteFillObject,
    height: '100',
  },
  map: {...StyleSheet.absoluteFillObject,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  carousel: {}
});

//make this component available to the app
export default Details;
