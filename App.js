// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Platform, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import Styling from './practice/Styling';
import Card from './components/Card';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import MessagesScreen from './screens/MessagesScreen';
import Screen from './components/Screen';
import Icon from './components/Icon';
import ListItem from './components/ListItem';
import AccountScreen from './screens/AccountScreen';
import ListingsScreen from './screens/ListingsScreen';



export default function App() {
  return (
    <ListingsScreen />

    // <View style={styles.container}>
    //   <AccountScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //for notch in android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1
  },
});
