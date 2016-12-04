import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native';

import NavigationStore from '../../stores/NavigationStore';
import Taxi from '../../images/taxi.jpg';
import Resto from '../../images/resto.jpg';

export default class CatalogScene extends Component {
    goTo(name) {
        NavigationStore.navigationState = name;
        NavigationStore.navigator.push({
            name: name
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.catalogDescription}>
                    <View style={styles.itemText}>
                        <Text style={styles.messageText}>Taxi</Text>
                        <Text style={styles.messageAuthor}>Local taxi guide</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    },
    catalogDescription: {
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 5,
        marginRight: 5,
        padding: 5,
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderColor: '#ff9e41'
    },
    messageText: {
        color: '#000'
    },
    messageAuthor: {
        textAlign: 'right'
    },
    item: {
        resizeMode: 'contain',
        width: 40,
        height: 40
    },
    itemText: {
        paddingLeft: 5
    }
});

AppRegistry.registerComponent('CatalogScene', () => CatalogScene);