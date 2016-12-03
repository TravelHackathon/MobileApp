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

import MainScene from '../scenes/main'
import CustomTransitions from '../../transitions/CustomTransitions';
import NavigationStore from '../../stores/NvaigationStore';
import background from '../../Images/background.jpg'

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

const styles = StyleSheet.create({
    main: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
    header: {
        backgroundColor: '#FF6514',
        borderBottomWidth: 4,
        borderBottomColor:'#D0450F'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 46
    }
});

AppRegistry.registerComponent('Scene', () => Scene);