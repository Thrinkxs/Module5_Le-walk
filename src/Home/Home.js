//import liraries
import React, { Component } from 'react';
import { View, Text,Dimensions, StyleSheet, SafeAreaView,Image, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import dashData from './Dashboard';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height; 

// create a component
const Home = ({navigation}) => {
    return (
        <SafeAreaView>
            <FlatList
            data={dashData}
            contentInset={{padding:12}}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity style={{margin:20, height:windowHeight * 0.2, backgroundColor:item.bgColor, borderRadius:5}} onPress={() => navigation.navigate('Profile')}>
                      <View style={{backgroundColor:item.bgColor}}>
                      <Text styele={styles.category} >
                            {item.category}
                        </Text>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                        <Text>
                            {item.numberCompany}
                        </Text>
                        
                      </View>
                      <Image 
                      style={{
                        height:90, width:60, position:'absolute', right:0, margin:10, bottom:0
                      }}source={item.image}/>
                        
                    </TouchableOpacity>
                )
            }}
            
            >

            </FlatList>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    category:{
fontSize: 24,
fontWeight: '200'
    },
    name:{
fontSize:18
    },
});

//make this component available to the app
export default Home;