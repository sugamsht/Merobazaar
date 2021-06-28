// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Platform, StyleSheet, SafeAreaView, StatusBar, TextInput, Text, Switch } from 'react-native';
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
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';

const categories = [
  { label: "Furniture", value: 1, },
  { label: "Clothes", value: 2, },
  { label: "Camera", value: 3, },
]

export default function App() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <View style={styles.container}>
      {/* <AppTextInput placeholder='Username' icon="account" /> */}
      <AppPicker
        selectedItem={category}
        onSelectItem={item => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="category" />
      <AppTextInput icon="email" placeholder="Email" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //for notch in android
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1
  },
});
