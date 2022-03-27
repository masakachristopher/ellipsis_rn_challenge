/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Constants from './utils/constants/index';
import {Provider} from 'react-redux';
import UserNavigator from './navigation/UserNavigator';
import store from './redux/store';
import MainNavigator from './navigation/MainNavigator';

const App = () => {
  const {colors} = Constants;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.darker : colors.lighter,
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        {/* <UserNavigator /> */}
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
