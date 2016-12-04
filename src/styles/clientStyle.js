import NavigationStore from '../stores/NavigationStore';

const styles = {
    ios: {
        wrap: {
            paddingTop: 20,
            backgroundColor: '#ff8a42',
            flex: 1
        }
    },
    android: {
        wrap: {
            flex: 1
        }
    }
};

module.exports = styles[NavigationStore.platform];