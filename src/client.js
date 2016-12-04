import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar
} from 'react-native';

import Scene from './components/main/scene';
import clientStyle from './styles/clientStyle';

export default class Client extends Component {
    render() {
        return (
            <View style={styles.wrap}>
                <StatusBar
                    backgroundColor="#ff8a42"
                    barStyle="light-content"
                />
                <Scene/>
            </View>
        );
    }
}

const styles = StyleSheet.create(clientStyle);