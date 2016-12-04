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

export default class MainScene extends Component {
    goToStart() {
        NavigationStore.navigationState = 'start';
        NavigationStore.navigator.push({
            name: 'start'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.introText}>Welcome! We glad to see you in our app.</Text>
                <Text style={styles.introText}>TRALPER is a new way to find information about eveithyng that you need in Kyrgyzstan.</Text>
                <Text style={styles.introText}>Just open electronic guide with information or type to one of our operators in chat, or you can just call him and he will answer questions.</Text>

                <TouchableOpacity style={styles.startButton} onPress={this.goToStart}>
                    <Icon style={styles.arrow} name="ios-arrow-forward-outline" size={27} color="#fff" />
                    <Text style={styles.letsText}>Let's start</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
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
        paddingTop: 10,
        paddingBottom: 10,
        marginRight:5,
        marginLeft:5
    },
    startButton: {
        flexDirection: 'row',
        marginRight:40,
        marginLeft:40,
        marginTop:40,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#FF6514',
        borderRadius:10,
        borderWidth: 0
    },
    letsText: {
        fontSize: 20,
        color: '#fff',
        marginRight:10,
        marginLeft:5,
    },
    arrow: {
        marginLeft: 10
    }
});

AppRegistry.registerComponent('MainScene', () => MainScene);