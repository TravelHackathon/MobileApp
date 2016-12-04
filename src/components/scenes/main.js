import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import NavigationStore from '../../stores/NavigationStore';


export default class MainScene extends Component {
    render() {
        return (
            <Text>{NavigationStore.platform}</Text>
        );
    }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('MainScene', () => MainScene);