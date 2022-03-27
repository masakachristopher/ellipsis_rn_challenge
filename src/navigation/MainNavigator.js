/* eslint-disable prettier/prettier */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeNavigator';
import NewsScreen from '../screens/News/NewsScreen';
import CartScreen from '../screens/Cart/CartListScreen';
// import SettingsScreen from '../screens/Settings/SettingsScreen';
import UserNavigator from './UserNavigator';
import {Icon, withBadge} from 'react-native-elements';
import {  useSelector } from 'react-redux';

import Constants from '../utils/constants/index';

const {colors} = Constants;
const BottomTab = createBottomTabNavigator();

const globalOptions = {
  headerShown: false,
  tabBarOptions: {
    style: {height: 300},
  },
  tabBarActiveTintColor: `${colors.PRIMARY}`,
  tabBarShowLabel: true,
  tabBarHideOnKeyboard: true,
};


const MainNavigator = () => {
  const cart = useSelector((state) => state.cart);

  const BadgedIcon = withBadge(cart?.cartTotalQuantity)(Icon);

  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={globalOptions}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home" type="material" size={24} />,
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: () => (
            cart.cartItems && cart.cartItems.length > 0 ?
            <BadgedIcon name="shopping-cart" type="font-awesome" size={24} /> :
             <Icon name="shopping-cart" type="font-awesome" size={24} />
          ),
        }}
      />
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: () => (
            <Icon name="notes" type="material" size={24} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={UserNavigator}
        options={{
          tabBarIcon: () => (
            <Icon name="settings" type="material" size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainNavigator;
