import React from 'react';
import { Text, Platform, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppText({ children, style }) {
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}



const styles = StyleSheet.create({
    text: {
        color: colors.text,
        // textAlign: 'center',
        ...Platform.select({
            ios: {
                fontSize: 25,
                fontFamily: "Avenir",
            },
            android: {
                fontSize: 30,
                fontFamily: 'Roboto',
            }
        })

    }
})

export default AppText;