import React from 'react';
import {
    StyleSheet, Text, View, Image, ImageBackground
} from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={2}
            style={styles.background}
            source={require('../assets/background/bg1.jpg')}
        >
            <View style={styles.logoContainer}>

                <Image
                    style={styles.logo}
                    source={require('../assets/logo/1.png')}
                />
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title='Login' onPress={() => console.log('tapped Login')} color='primary' />
                <AppButton title='Register' onPress={() => console.log('tapped Register')} color='secondary' />
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        width: '100%',
        padding: 20,
        marginBottom: 20,
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