import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function ListItem({ title, subTitle, image }) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image}></Image>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1}>
                    {title}
                </AppText>
                <AppText style={styles.subTitle} numberOfLines={2}>
                    {subTitle}
                </AppText>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 20,
        justifyContent: "center",
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginLeft: 0,
    },
    subTitle: {
        color: colors.listing,
        fontSize: 20
    },
    title: {
        fontWeight: "600",
    },
})
export default ListItem;