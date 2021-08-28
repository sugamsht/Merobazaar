import React from 'react';
import { View, Image, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/lists/ListItem';
import ContactSellerForm from '../components/ContactSellerForm';

function ListingDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
        >
            <Image style={styles.image} source={{ uri: listing.images[0].url }} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>{listing.price}</AppText>
                <View style={styles.userContainer} >
                    <ListItem
                        image={require("../assets/photo.jpg")}
                        title="Sugam"
                        subTitle="5 Listings"
                    />
                </View>
                <ContactSellerForm listing={listing} />
            </View>
        </KeyboardAvoidingView>
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