import React, { useState } from 'react'
import { FlatList, Image, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';



const initialMessages = [
    {
        id: 1,
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget volutpat nisi. Aliquam vel dignissim est. Integer tincidunt nec orci non posuere. Vivamus pretium, lorem eget efficitur pellentesque, nibh leo pellentesque nisi, vel rutrum metus mauris ac nisl. Cras vel ex vitae nisl consectetur pretium. Nulla lobortis lacus tortor, at aliquet justo dictum nec. Curabitur in risus nulla. Mauris non orci nisl. Aenean placerat lectus vel ligula sagittis viverra. In eleifend neque ipsum, hendrerit placerat lectus pulvinar vitae. Fusce vel est at nibh lobortis pretium.",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget",
        image: require("../assets/photo.jpg"),
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require("../assets/photo.jpg"),
    },
];


function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages 
        setMessages(messages.filter(m => m.id !== message.id));

    }

    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('listitem pressed', item)}
                    renderRightActions={() =>
                        <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                />}
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([{
                    id: 2,
                    title: "T2",
                    description: "D2",
                    image: require("../assets/photo.jpg"),
                },])
            }}
        />
    );
}

export default MessagesScreen;