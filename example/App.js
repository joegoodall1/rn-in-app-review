/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  SafeAreaView
} from 'react-native';
import RNInAppReview from 'rn-in-app-review'

const App: () => React$Node = () => {
  RNInAppReview.launchReviewFlow((isSuccessful)=>console.log('RNInAppReview ' , isSuccessful))
  return (
    <SafeAreaView>
      <View>
        <Text >Engine: Hermes</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
