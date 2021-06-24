import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeModules, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';


const { StatusBarManager } = NativeModules;


export default function App() {
  return (
    <ViewImageScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     //for notch in android
//     paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
//   },
// });
