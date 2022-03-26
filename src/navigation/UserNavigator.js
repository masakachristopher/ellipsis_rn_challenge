/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import constants from '../utils/constants';
const {routes} = constants;

const Stack = createNativeStackNavigator();
const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={routes.LOGIN} screenOptions={{headerShown: false}}>
      <Stack.Screen component={LoginScreen} name={routes.LOGIN} />
      <Stack.Screen component={RegisterScreen} name={routes.REGISTER} />
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
