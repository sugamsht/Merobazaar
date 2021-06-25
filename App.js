import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NativeModules, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import Styling from './practice/Styling';
import Card from './components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';



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
