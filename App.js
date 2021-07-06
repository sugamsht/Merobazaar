// import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Platform, StyleSheet, SafeAreaView, StatusBar, TextInput, Text, Switch, Image, TouchableHighlight, Alert } from 'react-native';

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

import * as ImagePicker from 'expo-image-picker';
import AppButton from './components/AppButton';
import ImageInput from './components/ImageInput';
import ImageInputList from './components/lists/ImageInputList';


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
