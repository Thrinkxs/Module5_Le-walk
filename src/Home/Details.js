//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import Loader from "../Loader";
import carousel from "react-native-snap-carousel";
import Carousel from "react-native-snap-carousel";
import { TouchableOpacity } from "react-native-web";
import serviceList from './serviceList'
const [currentLocation, setCurrentLocation] = useState(null);

// create a component
const Details = () => {
  const companies = serviceList;
  let refCarousel = null;
  const [currentLocation, setCurrentLocation] = useState(null);
  let mapRef = null
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
              image={maker.avatar}
            />
            )
          })
        }
      </View>
   
    )
      }
  const renderCard = ({item, index}) => {
    return (
      <View style={{backgroundColor:'white', borderRadius: 18, padding: 10, height: 150}}>
<View style={{margin: 10}}>
  <Text style={{fontSize: 20, width: Dimensions.get('window').width /2,}}>{{item}}</Text>
  <View style={{position: 'absolute', bottom: 0, display: 'flex', flexDirection: 'left'}}>
<Text> {item.name}</Text>
<Text> {item.email}</Text>
<TouchableOpacity>
  <Text>
    Book Now
  </Text>
</TouchableOpacity>
      </View>
  </View>
      <View style={{backgroundColor: '#dedede', height: 60, borderRadius: 4, margin: 10}}>
        <Image style={{ resizeMode: 'contain',width: 40, height:60}}></Image>
    </View>
    </View>
    )
  }  
  const onCarouselChange = (index) => {
    let location = companies[index].coord
    mapRef.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    })
  }
  
  return (
    <View style={styles.container}>
      {
      companies != null ? (
        <View>
          <MapView
            style={styles.map}
            ref={(c) => mapRef = c}
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
          <View>
          <Carousel
            ref={(c) => {
              refCarousel = c;
            }}
            data={companies.entries}
            renderItem={renderCard}
            sliderwidth={Dimensions.get('window').width}
            itemWidth={300}
            containerCustomStyle={styles.carousel}
            onSnapToItem={(index) => onCarouselChange(index)}
          />
          </View>
         
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
