/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import constants from '../utils/constants';
const {routes} = constants;

const Stack = createNativeStackNavigator();
const AuthenticationNavigator = () => {
  const isLoggedIn = false;

  return (
    <Stack.Navigator initialRouteName={routes.LOGIN} screenOptions={{headerShown: false}}>
    {
      isLoggedIn ?
      <Stack.Screen component={SettingsScreen} name={routes.SETTINGS} />
      :
      <>
      <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
      <Stack.Screen component={RegisterScreen} name={routes.REGISTER} />
      <Stack.Screen component={SettingsScreen} name={routes.SETTINGS} />

      </>
    }

    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
