/* eslint-disable prettier/prettier */
import { FlatList, StyleSheet, View } from 'react-native';
import React,{useEffect, useLayoutEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../../redux/slices/cartSlice';
import CartItem from './components/CartItem';
import { Avatar,Icon, Badge, Button, withBadge } from 'react-native-elements';
import CustomText from '../../components/CustomText';
import Constants from '../../utils/constants/index';
import Number from '../../components/NumberFormat';
const {colors, routes} = Constants;
const CartListScreen = ({navigation, route}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const BadgedIcon = withBadge(cart?.cartTotalQuantity)(Icon);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Cart',
      headerShown: true,
      headerTitleAlign: 'center',
      headerRight: ()=>(
        <View style={{marginRight: 20}}>
          <BadgedIcon name="shopping-cart" type="font-awesome" size={35} />
        </View>
      ),
    });


  }, [navigation, cart]);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  // const handleClearCart = () => {
  //   dispatch(clearCart());
  // };

  if (cart.cartItems?.length === 0 || !cart) {

    return (
      <View style={styles.empty}>
        <CustomText>No Items!</CustomText>
      </View>
    );
  }
  const renderCartItems = ({item}) => {
    const toDetails = () => {
      try {
        navigation.navigate('ProductDetailsScreen',
          {productId: item.id, fromScreen: 'HomeScreen'},
        );
      } catch (error) {}
    };

    const handleAddItemToCart = () => {
      try {
        handleAddToCart(item);
      } catch (error) {}
    };
    const handleDecreaseItemFromCart = () => {
      try {
        handleDecreaseCart(item);
      } catch (error) {}
    };

    const handleRemoveItemFromCart = () => {
      try {
        handleRemoveFromCart(item);
      } catch (error) {}
    };


    return (
      <CartItem
        toDetails={toDetails}
        handleAddToCart={handleAddItemToCart}
        handleDecreaseCart={handleDecreaseItemFromCart}
        handleRemoveFromCart={handleRemoveItemFromCart}
        quantity={item?.cartQuantity}
        id={item?.id}
      />
    );
  };
  return (
    <>
      <FlatList
        data={cart.cartItems}
        showsVerticalScrollIndicator
        renderItem={renderCartItems}
        keyExtractor={item => item.id}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{paddingHorizontal: 16}}
      />
       {cart.cartItems && cart.cartItems?.length > 0 ?
        <View style={styles.footer}>
          <View style={styles.footerLeft}>
              <Number style={{color: colors.BLACK}} price={cart.cartTotalAmount}/>
            </View>
          <View style={styles.footerRight}>
            <Button
            title={'Checkout'}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{alignSelf: 'center',paddingHorizontal: 16, backgroundColor: colors.PRIMARY, borderColor: colors.PRIMARY}} />

          </View>

        </View>
        :
        null
      }
  </>
  );
};

export default CartListScreen;

const styles = StyleSheet.create({
  empty:{
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
  },
  footer:{
    bottom: 0,
    flexDirection: 'row',
    justifyContent:'space-between',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    elevation:5,
    paddingHorizontal:8,
    height: 56,
  },
  footerLeft:{
    alignItems: 'center',
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'flex-start',
  },
  footerRight:{
    alignSelf: 'center',
    alignContent:'center',
    marginRight: 8,
  },
});
