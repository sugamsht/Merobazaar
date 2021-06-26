import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import colors from '../config/colors';
import Icon from '../components/Icon';



const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.Screen}>
            <View style={styles.container}>
                <ListItem
                    title="Sugam Shrestha"
                    subTitle="sugamsht@gmail.com"
                    image={require('../assets/photo.jpg')}
                />
                <View style={styles.container}></View>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            }
                        />
                    }
                />

            </View>
            <ListItem
                title="Log Out"
                IconComponent={
                    <Icon
                        name="logout"
                        backgroundColor="#ffe66d"
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    Screen: {
        backgroundColor: colors.light,
    }
})
export default AccountScreen;