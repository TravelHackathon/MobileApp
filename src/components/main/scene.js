import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Components,
    TouchableOpacity,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import MainScene from '../scenes/main'
import StartScene from '../scenes/start'
import ChatScene from '../scenes/chat'
import CatalogScene from '../scenes/catalog'
import TaxiScene from '../scenes/taxi'
import CustomTransitions from '../../transitions/CustomTransitions';
import NavigationStore from '../../stores/NavigationStore';
import background from '../../images/background.jpg'

import clientStyle from '../../styles/sceneStyle';

// TODO: Refactor this method
const scenes = (route, navigator) => {
    if (route.name === 'start') {
        return <StartScene navigator={navigator} />
    }

    if (route.name === 'chat') {
        return <ChatScene navigator={navigator} />
    }

    if (route.name === 'catalog') {
        return <CatalogScene navigator={navigator} />
    }

    if (route.name === 'taxi') {
        return <TaxiScene navigator={navigator} />
    }

    return <MainScene navigator={navigator} />
};

const goTo = (name) => {
    NavigationStore.navigationState = name;
    NavigationStore.navigator.push({
        name: name
    })
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
                        <TouchableOpacity onPress={() => (goTo('catalog'))}><Icon style={styles.hamburger} name="ios-apps" size={30} color="#900" /></TouchableOpacity>
                        <TouchableOpacity onPress={() => (goTo('start'))}><Text style={styles.title}>Trelper</Text></TouchableOpacity>
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