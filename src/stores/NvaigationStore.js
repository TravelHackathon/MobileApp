import { observable } from 'mobx';

class NavigationStore {
    @observable navigator;
    @observable navigationState;

    constructor() {
        this.navigator = null;
        this.navigationState = 'main';
    }

}

const navigationStore = new NavigationStore();

export default navigationStore;
export { NavigationStore };