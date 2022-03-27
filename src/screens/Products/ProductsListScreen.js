/* eslint-disable prettier/prettier */
import React, {
  useLayoutEffect,
  useEffect,
  useState,
} from 'react';
import { FlatList} from 'react-native';
import ProductItem from './components/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../../redux/slices/cartSlice';
import data from '../../data/products.json';

const ProductListScreen = ({navigation}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);


  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Products List',
      headerTitleAlign: 'center',
    });
    setProducts(data);
    return () => {
    };
  }, [navigation]);

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
  const handleClearCart = () => {
    dispatch(clearCart());
  };


  const renderProducts = ({item}) => {
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
    return (
      <ProductItem
        toDetails={toDetails}
        handleAddToCart={handleAddItemToCart}
        name={item?.name}
        item={item}
        image={item?.image}
        price={item?.price}
        id={item?.id}
      />
    );
  };


  return (
    <>
      {products && (
        <FlatList
          data={products}
          showsVerticalScrollIndicator
          numColumns={2}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingHorizontal: 16}}
        />
      )}
    </>
  );
};

export default ProductListScreen;

