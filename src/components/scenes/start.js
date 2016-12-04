import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

import logo from '../../images/logo.png'

import Icon from 'react-native-vector-icons/Ionicons';

import NavigationStore from '../../stores/NavigationStore';

const goTo = (name) => {
    NavigationStore.navigationState = name;
    NavigationStore.navigator.push({
        name: name
    })
};

export default class StartScene extends Component {
    goToChat() {
        goTo('chat')
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.introText}>All you need is to call or chat.</Text>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonCall} onPress={this.goTo}>
                        <Icon style={styles.arrow} name="ios-call" size={25} color="#fff" />
                        <Text style={styles.letsText}>Call</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.callText}>Call cost is 1$/min</Text>
                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.buttonChat} onPress={this.goToChat}>
                        <Icon style={styles.arrow} name="ios-chatboxes" size={25} color="#fff" />
                        <Text style={styles.letsText}>Get chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    containerButtons: {
        flexDirection: 'row',
    },
    logo: {
        width: 220,
        height: 100,
        resizeMode: 'contain'
    },
    introText: {
        color: '#fff',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'stretch',
        marginRight:5,
        marginLeft:5,
        paddingTop: 10,
        paddingBottom: 10
    },
    callText: {
        color: '#fff',
        fontSize: 15
    },
    buttonCall: {
        flex: 1,
        flexDirection: 'row',
        marginRight:5,
        marginLeft:5,
        marginTop:40,
        paddingTop:10,
        paddingBottom:8,
        backgroundColor:'#0c940a',
        borderRadius:10,
        borderWidth: 0
    },
    buttonChat: {
        flex: 1,
        flexDirection: 'row',
        marginRight:5,
        marginLeft:5,
        marginTop:10,
        paddingTop:10,
        paddingBottom:8,
        backgroundColor:'#203bae',
        borderRadius:10,
        borderWidth: 0
    },
    letsText: {
        fontSize: 18,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center',
        marginRight:10,
        marginLeft:5,
    },
    arrow: {
        marginLeft: 10
    }
});

AppRegistry.registerComponent('StartScene', () => StartScene);