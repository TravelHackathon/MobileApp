import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import Scene from './components/main/scene';

export default class Client extends Component {


    render() {
        return (
            <View style={styles[this.props.platform]}>
                <StatusBar
                    backgroundColor="#ff8a42"
                    barStyle="light-content"
                />
                <Scene/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ios: {
        paddingTop: 20,
        backgroundColor: '#ff8a42',
        flex: 1
    },
    android: {
        flex: 1
    }
});