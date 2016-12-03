import React, { Navigator, } from 'react-native';
import buildStyleInterpolator from 'react-native/Libraries/Utilities/buildStyleInterpolator';

const NoTransition = {
    opacity: {
        value: 1.0,
        type: 'constant',
    }
};

const NONE = Object.assign({}, Navigator.SceneConfigs.FadeAndroid, {
    gestures: null,
    defaultTransitionVelocity: 1000,
    animationInterpolators: {
        into: buildStyleInterpolator(NoTransition),
        out: buildStyleInterpolator(NoTransition),
    },
});

const Transitions = {
    NONE,
};


export default Transitions;
