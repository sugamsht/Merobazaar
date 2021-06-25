import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
// import AppText from './AppText';

function AppButton({ title, onPress, color = "primary" }) {
    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: colors[color] }]}
            onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 25,
        marginTop: 20,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",

    },
})

export default AppButton;