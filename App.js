// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

// import { View, Text, Platform, StyleSheet, StatusBar, Button, Animated } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import AccountScreen from './screens/AccountScreen';
import ListingEditScreen from './screens/ListingEditScreen';

// import Screen from './components/Screen';
// import AppButton from './components/AppButton';
import NavigationTheme from './navigation/NavigationTheme';
import AppNavigator from './navigation/AppNavigator';
import OfflineNotice from './components/OfflineNotice';
import AuthNavigator from './navigation/AuthNavigator';
import AuthContext from './auth/context';
import authStorage from './auth/storage';
import { navigationRef } from './navigation/rootNavigation';


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

  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  if (!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={console.warn} />


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

