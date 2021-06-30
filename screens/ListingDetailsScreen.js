import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Fucking Jacket</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer} >
                    <ListItem
                        image={require("../assets/photo.jpg")}
                        title="Sugam"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    userContainer: {
        marginVertical: 10
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
        // marginLeft: 10
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
    },
    image: {
        width: '100%',
        height: 300,
    }
})

export default ListingDetailsScreen;