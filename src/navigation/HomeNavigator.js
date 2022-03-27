/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductListScreen from '../screens/Products/ProductsListScreen';
import ProductDetailsScreen from '../screens/Products/ProductDetailsScreen';
import CartListScreen from '../screens/Cart/CartListScreen';


const Stack = createNativeStackNavigator();

const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductListScreen"
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {elevation: 0},
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <Stack.Screen name="ProductListScreen" component={ProductListScreen} />

      <Stack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
      />
       <Stack.Screen
        name="CartListScreen"
        component={CartListScreen}
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigator;
