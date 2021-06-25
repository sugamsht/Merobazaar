import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container} >

            <MaterialCommunityIcons style={styles.closeIcon} name="close-box" size={50} color={colors.primary} />
            <MaterialCommunityIcons style={styles.deleteIcon} name="trash-can-outline" size={50} color={colors.secondary} />
            <Image
                resizeMode="contain"
                style={styles.image}
                source={require('../assets/background/bg2.jpg')}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    closeIcon: {
        position: "absolute",
        top: 60,
        left: 30
    },
    deleteIcon: {
        position: "absolute",
        top: 60,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }
})

export default ViewImageScreen;