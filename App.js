import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet, Text, View, Platform, SafeAreaView, NativeModules, Image, TouchableWithoutFeedback, TouchableOpacity,
  TouchableHighlight, TouchableNativeFeedback, Button, Alert,
} from 'react-native';
const { StatusBarManager } = NativeModules;
import { ActivityIndicator } from 'react-native';

export default function App() {
  const onclick = () => console.log("dead");
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onLongPress={onclick}>Hello React Hello from the other siiiiiide today is euro cup  who will win</Text>
      <Text>Height is {StatusBarManager.HEIGHT} </Text>
      <TouchableOpacity>
        <Image style={styles.image} source={require('./assets/icon.png')} />
      </TouchableOpacity>
      <TouchableHighlight onPress={() => { console.log('Don\'t touch the image') }}>
        <Image
          blurRadius={0}
          source={{
            height: 200,
            width: 300,
            uri: "https://picsum.photos/200/300/?blur=1"
          }} />
      </TouchableHighlight>
      <TouchableNativeFeedback onLongPress={() => { console.log('asdh') }}>
        <View style={{ width: 200, height: 100, backgroundColor: 'red' }}>
        </View>
      </TouchableNativeFeedback>
      <Button
        color="green"
        title="Click me"
        onPress={() => Alert.alert("My title", "My message",
          [{ text: 'Yes', onPress: () => console.log('You clicked yes') },
          { text: "No", onPress: () => console.log('You clicked no') }])}
      // onPress={() => Alert.prompt("My title", "My message", text => console.log(text))} //Only works on IOS
      />
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
  },
  image: {
    width: 200,
    height: 200,
  }
});
