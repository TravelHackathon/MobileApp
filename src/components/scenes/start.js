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

export default class StartScene extends Component {
    goTo(name) {
        NavigationStore.navigationState = name;
        NavigationStore.navigator.push({
            name: name
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.introText}>TRALPER is a new way to find information about eveithyng that you need in Kyrgyzstan.</Text>

                <View style={styles.containerButtons}>
                    <TouchableOpacity style={styles.startButton} onPress={this.goTo}>
                        <Icon style={styles.arrow} name="ios-arrow-forward-outline" size={27} color="#fff" />
                        <Text style={styles.letsText}>Call</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.startButton} onPress={this.goTo}>
                        <Icon style={styles.arrow} name="ios-arrow-forward-outline" size={27} color="#fff" />
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
    startButton: {
        flex: 1,
        flexDirection: 'row',
        marginRight:5,
        marginLeft:5,
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
        textAlign: 'center'
    },
    arrow: {
        marginLeft: 10
    }
});

AppRegistry.registerComponent('StartScene', () => StartScene);