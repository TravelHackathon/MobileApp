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

const goTo = (name) => {
    NavigationStore.navigationState = name;
    NavigationStore.navigator.push({
        name: name
    })
};


export default class CatalogScene extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity  onPress={() => (goTo('taxi'))}>
                        <View style={styles.catalogList}>
                            <Image source={Taxi} style={styles.item}/>
                            <View style={styles.itemText}>
                                <Text style={styles.messageText}>Taxi</Text>
                                <Text style={styles.messageAuthor}>Local taxi guide</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.catalogList}>
                            <Image source={Resto} style={styles.item}/>
                            <View style={styles.itemText}>
                                <Text style={styles.messageText}>Resto</Text>
                                <Text style={styles.messageAuthor}>Local resto guide</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch'
    },
    catalogList: {
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