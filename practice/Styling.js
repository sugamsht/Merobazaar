import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import AppText from '../components/AppText';
import AppButton from '../components/AppButton';

function Styling(props) {
    return (
        <View style={styles.container}>
            <View style={styles.boxShadow} />
            <AppText>
                React is alright !
                This is the Nextline example.
            </AppText>
            <MaterialCommunityIcons name="account-box" size={44} color="black" />
            <AppButton title="Hello" onPress={() => console.log('Tapped')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxBorder: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        borderBottomColor: 'gold',
        borderWidth: 10,
        borderRadius: 10,
        borderTopLeftRadius: 30
    },
    boxShadow: {
        backgroundColor: 'red',
        height: 100,
        width: 100,
        shadowColor: 'green',
        shadowOffset: { height: 10, width: 10 },
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 30, //Only this works on android
    },
    text: {
        fontSize: 20,
        // fontFamily: 'Roboto',
        fontWeight: '700',
        color: 'blue',
        textTransform: 'uppercase',
        // textDecorationLine: 'line-through',
        lineHeight: 30,
        textAlign: 'center'
    },
    icon: {
        width: 50,
        height: 50,

    }
})



export default Styling;