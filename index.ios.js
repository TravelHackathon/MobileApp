import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import Client from './src/client';

import NavigationStore from './src/stores/NavigationStore';
NavigationStore.platform = 'ios';

export default class HackatonHelpButton extends Component {
    render() {
        return (
            <Client />
        );
    }
}


AppRegistry.registerComponent('HackatonHelpButton', () => HackatonHelpButton);
