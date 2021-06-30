import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../AppText';
import colors from '../../config/colors';
import { MaterialIcons } from '@expo/vector-icons';

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image style={styles.image} source={image}></Image>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>
                            {title}
                        </AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>
                            {subTitle}
                        </AppText>}
                    </View>
                    <MaterialIcons name="chevron-right" size={24} color="black" />
                </View>
            </TouchableHighlight>
        </Swipeable>

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
        color: colors.medium,
        fontSize: 20
    },
    title: {
        fontWeight: "600",
        fontSize: 25
    },
})
export default ListItem;