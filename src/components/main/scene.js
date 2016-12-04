import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Components,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import MainScene from '../scenes/main'
import CustomTransitions from '../../transitions/CustomTransitions';
import NavigationStore from '../../stores/NavigationStore';
import background from '../../images/background.jpg'

import clientStyle from '../../styles/sceneStyle';

// TODO: Refactor this method
const scenes = (route, navigator) => {
    return <MainScene navigator={navigator} />
};

export default class Scene extends Component {
    renderScene(route, navigator) {
        NavigationStore.navigator = navigator;
        return <View>{ scenes(route, navigator) }</View>
    }

    render() {
        return (
            <View style={styles.main}>
                <Image source={background} style={styles.backgroundImage}>
                    <View style={styles.header}>
                        <Icon style={styles.hamburger} name="md-reorder" size={30} color="#900" />
                        <Text style={styles.title}>Trelper</Text>
                    </View>
                    <Navigator
                        initialRoute={{ name: NavigationStore.navigationState }}
                        renderScene={ this.renderScene }
                        configureScene={(route, routeStack) => CustomTransitions.NONE}
                    />
                </Image>
            </View>
        );
    }
}

const styles = StyleSheet.create(clientStyle);

AppRegistry.registerComponent('Scene', () => Scene);