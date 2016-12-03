import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import Client from './src/client';

export default class HackatonHelpButton extends Component {
    render() {
        return (
            <Client platform="ios"/>
        );
    }
}


AppRegistry.registerComponent('HackatonHelpButton', () => HackatonHelpButton);
