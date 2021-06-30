// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Platform, StyleSheet, SafeAreaView, StatusBar, TextInput, Text, Switch } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import MessagesScreen from './screens/MessagesScreen';
import ListingDetailsScreen from './screens/ListingDetailsScreen';
import AccountScreen from './screens/AccountScreen';
import LoginScreen from './screens/LoginScreen';
import ListingsScreen from './screens/ListingsScreen';
import ListingEditScreen from './screens/ListingEditScreen';

import Screen from './components/Screen';
import Card from './components/Card';
import Icon from './components/Icon';
import AppTextInput from './components/AppTextInput';


export default function App() {

  return (
    <ListingEditScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    //for notch in android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1
  },
});
