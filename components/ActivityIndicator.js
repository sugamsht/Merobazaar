import React from 'react';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ visible = false }) {
    if (!visible) return null;
    return <LottieView
        autoPlay
        loop
        source={require('../assets/animation/loading-animation.json')}
    />
}


export default ActivityIndicator;