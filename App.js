// import { StatusBar } from 'expo-status-bar';
import React from 'react';

// import { View, Text, Platform, StyleSheet, StatusBar, Button, Animated } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


// import WelcomeScreen from './screens/WelcomeScreen';
// import ViewImageScreen from './screens/ViewImageScreen';
// import MessagesScreen from './screens/MessagesScreen';
// import ListingDetailsScreen from './screens/ListingDetailsScreen';
// import LoginScreen from './screens/LoginScreen';
// import ListingsScreen from './screens/ListingsScreen';
import AccountScreen from './screens/AccountScreen';
import ListingEditScreen from './screens/ListingEditScreen';

// import Screen from './components/Screen';
// import AppButton from './components/AppButton';
// import AuthNavigator from './navigation/AuthNavigator';
import NavigationTheme from './navigation/NavigationTheme';
import AppNavigator from './navigation/AppNavigator';
import OfflineNotice from './components/OfflineNotice';


const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: '#eee',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 15,
      },
    }}
  >
    <Tab.Screen name="Feed" component={FeedNavigator} options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="home" size={size} color={color} /> }} />
    <Tab.Screen name="add" component={ListingEditScreen} options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons style={{ marginBottom: 20 }} name="plus-circle-outline" size={size * 3} color={color} /> }} />
    <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="account" size={size} color={color} /> }} />
  </Tab.Navigator>
)

export default function App() {

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={NavigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </>
  );
}

