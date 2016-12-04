import { observable } from 'mobx';

class NavigationStore {
    @observable navigator;
    @observable platform;
    @observable navigationState;

    constructor() {
        this.navigator = null;
        this.platform = 'android';
        this.navigationState = 'main';
    }

}

const navigationStore = new NavigationStore();

export default navigationStore;
export { NavigationStore };