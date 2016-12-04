import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default class ChatScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.myMessage}>
                        <Text style={styles.messageText}>Hi!</Text>
                        <Text style={styles.messageAuthor}>Me, Today at 1:00 PM</Text>
                    </View>

                    <View style={styles.touristMessage}>
                        <Text style={styles.messageText}>Wow!</Text>
                        <Text style={styles.messageAuthor}>Mike, Today at 1:04 PM</Text>
                    </View>

                    <View style={styles.assistentMessage}>
                        <Text style={styles.messageText}>Welcom to Kyrgyzstan!</Text>
                        <Text style={styles.messageAuthor}>Assistent, Today at 1:05 PM</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <TextInput
                        editable = {true}
                        value='Message'
                        style={styles.textarea}
                    />
                    <TouchableOpacity>
                        <Icon style={styles.send} name="md-send" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    },
    form: {
        marginTop: 380,
        alignSelf: 'flex-end',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    textarea: {
        flex: 1
    },
    send: {
        lineHeight: 45,
        marginLeft: 10,
        marginRight: 10
    },
    myMessage: {
        backgroundColor: '#c4ffb9',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderBottomWidth: 4,
        borderColor: '#83ff82'
    },
    assistentMessage: {
        backgroundColor: '#bbb1dd',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderBottomWidth: 4,
        borderColor: '#ba8add'
    },
    touristMessage: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        borderBottomWidth: 4,
        borderColor: '#ccc'
    },
    messageText: {
        color: '#000'
    },
    messageAuthor: {
        textAlign: 'right'
    }
});

AppRegistry.registerComponent('ChatScene', () => ChatScene);