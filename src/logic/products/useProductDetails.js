/* eslint-disable prettier/prettier */
import React, {useEffect, useContext, useState} from 'react';
// import axios from 'axios';
// import baseUrl from '../../assets/common/baseUrl';
import _ from 'lodash';
// import {useDispatch} from 'react-redux';
// import {addToCart, fetchItems} from '../../redux/actions/shoppingBag';
// import AuthGlobal from '../../Context/store/AuthGlobal';
// import Toast from 'react-native-root-toast';
// import authHeader from '../../api/auth/authentication.header';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
} from '../../redux/slices/cartSlice';

import data from '../../data/products.json';

export const useProductDetails = ({productId}) => {
//   const context = useContext(AuthGlobal);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const response = await data.find(
          (product) => product.id === productId,
        );
        setProductData(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const addProductToCart = async () => {
    if (productData) {
      // addToCart(
      //   {
      //     productId: productData.sku,
      //     sku: selectedVariant.sku,
      //     quantity: 1,
      //   },
      // );
      // console.log("add to cart")
      // alert("Hello")
      try {
          dispatch(addToCart({id: productData.id}));
        // dispatch(addToCart(productData._id, selectedVariant.sku, 1))
        //   .then(() => {
        //     Toast.show('item added to cart');
        //   })
        //   .then(() => {
        //     dispatch(
        //       fetchItems(context.stateUser.userProfile._id.toString()),
        //     ).catch(error => {
        //       setAddProductLoading(false);
        //     //   Toast.show('something went wrong.Failed to update cart');
        //     });
        //   })
        //   .catch(error => {
        //     // Toast.show('something went wrong. Try again later');
        //     setAddProductLoading(false);
        //   });
      } catch (error) {
        console.log('add to cart method', error);
      }

    }
  };
  return {
    loading,
    productData,
    addToCart: addProductToCart,
  };
};
