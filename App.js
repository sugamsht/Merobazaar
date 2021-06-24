import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Platform, SafeAreaView, NativeModules,
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
const { StatusBarManager } = NativeModules;


export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log(useDimensions(), useDeviceOrientation());
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'red',
        width: '100%',
        height: landscape ? '100%' : '40%'
      }}>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
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
