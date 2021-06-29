import React from 'react';
import { Text, TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultstyles from '../config/styles';


function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container} >
            {icon && <MaterialCommunityIcons name={icon} size={30} color={defaultstyles.colors.medium} style={styles.icon} />}
            <TextInput placeholder="Enter Your Name"
                // onChangeText={text => setName(text)}
                style={defaultstyles.text}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultstyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
    }
})

export default AppTextInput;