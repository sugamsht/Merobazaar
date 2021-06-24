import React from 'react';
import {
    StyleSheet, Text, View, Image, ImageBackground
} from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/background/bg1.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../assets/logo/1.png')}
                />
                {/* <Text style={{ top: -20, fontSize: 30, fontWeight: 'bold' }}>Sajilo Kinbech</Text> */}
            </View>
            <View style={styles.loginButton} />
            <View style={styles.RegisterButton} />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        //for notch in android
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'dodgerblue'
    },
    RegisterButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'tomato'
    },
    logo: {
        width: 200,
        height: 200,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
});

export default WelcomeScreen;