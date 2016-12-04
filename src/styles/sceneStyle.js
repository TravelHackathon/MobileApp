import NavigationStore from '../stores/NavigationStore';

const styles = {
    ios: {
        main: {
            flex: 1,
            flexWrap: 'wrap'
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover', // or 'stretch'
        },
        header: {
            backgroundColor: '#FF6514',
            borderBottomWidth: 4,
            borderBottomColor:'#D0450F',
            flexDirection: 'row',
            height: 46
        },
        title: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 46
        },
        hamburger: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            lineHeight: 46,
            paddingLeft: 5,
            paddingRight: 5
        }
    },
    android: {
        main: {
            flex: 1,
            flexWrap: 'wrap',
            flexDirection:'row'
        },
        backgroundImage: {
            flex: 1,
            resizeMode: 'cover', // or 'stretch'
        },
        header: {
            backgroundColor: '#FF6514',
            borderBottomWidth: 4,
            borderBottomColor:'#D0450F',
            flexDirection: 'row',
            height: 46
        },
        title: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
            lineHeight: 36
        },
        hamburger: {
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
            lineHeight: 38,
            paddingLeft: 5,
            paddingRight: 5
        }
    }
};

module.exports = styles[NavigationStore.platform];