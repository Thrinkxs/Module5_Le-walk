//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
const Loader = () => {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <Text>Loader</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
});

//make this component available to the app
export default Loader;
