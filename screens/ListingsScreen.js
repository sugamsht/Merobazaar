import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';


import Card from '../components/Card';
import colors from '../config/colors';
import ListingApi from '../api/listings';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';


function ListingsScreen({ navigation }) {

    const { data: listings, error, loading, request: loadListings } = useApi(ListingApi.getListings);

    useEffect(() => {
        loadListings();
    }, [])

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && <>
                    <AppText> Couldn't retrieve the data. Please check your internet connection and reload. </AppText>
                    <AppButton title="Retry" onPress={loadListings} ></AppButton>
                </>}
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) =>
                        <Card
                            title={item.title}
                            subTitle={item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        />
                    }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 10,
        backgroundColor: colors.light,

    }
})

export default ListingsScreen;