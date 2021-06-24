import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Platform, SafeAreaView, NativeModules,
} from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
const { StatusBarManager } = NativeModules;


export default function App() {
  return (
    <View style={{
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'row', //aligns horizontally 
      justifyContent: 'center', //aligns in primary axis
      alignItems: 'center',  //alignment of content within each line(in secondary axis)
      // alignContent: 'center', //alignment of entire content
      // flexWrap: "wrap"
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 300,
        height: 100,
        flexShrink: 1, //same as flex:-1
        // alignSelf: 'flex-start'
      }} />
      <View style={{
        backgroundColor: 'gold',
        // flexBasis: 100, //sets size along the primary axis
        // flexGrow: 1,  //same as flex:1
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100,
        top: 50,
        position: 'absolute'
      }} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aquamarine',
    //for notch in android
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
    alignItems: 'center',
    // justifyContent: 'center',
  }
});
