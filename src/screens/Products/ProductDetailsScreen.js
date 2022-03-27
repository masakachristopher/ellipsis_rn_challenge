/* eslint-disable prettier/prettier */
import React, { useEffect, useLayoutEffect, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Dimensions,
  useWindowDimensions,
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';
import CustomText from '../../components/CustomText';
import NumberFormat from '../../components/NumberFormat';
import Constants from '../../utils/constants/index';
const {colors} = Constants;
import {ActivityIndicator} from 'react-native';
import {Icon, Text, withBadge, Avatar} from 'react-native-elements';
import {useProductDetails} from '../../logic/products/useProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from '../../redux/slices/cartSlice';
// const BadgedIcon = withBadge(15)(Icon);
const ProductDetails = ({navigation, route}) => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {width: screenWidth} = useWindowDimensions();
  const {
    loading,
    productData,
    addToCart,
  } = useProductDetails({
    productId: route?.params?.productId,
  });


  const [offset, setOffset] = useState();
  const [iconPos, setLayout] = useState();

  useEffect(() => {
    dispatch(getTotals());
    // console.log(cart);
  }, [cart, dispatch]);


  const BadgedIcon = withBadge(cart?.cartTotalQuantity)(Icon);
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


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      // style:{elevation: 2, shadowOpacity: 2},
      headerShadowVisible: offset + 47 > iconPos ? true : false,
      headerTransparent: true,
      title: '',
      headerStyle: {
        backgroundColor: offset + 47 > iconPos ? colors.WHITE : 'transparent',
        elevation: 10,
        shadowOffset: {width: 2, height: 1},
        shadowOpacity: 10,
        shadowRadius: 10,
        shadowColor: '#52006A',
      },
      headerLeft: () => (
        <Animated.View style={{flexDirection: 'row'}}>
          <Icon
            onPress={() => {
              try {
                navigation.goBack(null);
              } catch (error) {
                console.log(error);
              }
            }}
            name="arrow-back"
          />
        </Animated.View>

            ),
    });
  }, [navigation, route, offset, iconPos]);


  let item = productData;

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />

      <ScrollView
        onScroll={event => {
          setOffset(event.nativeEvent.contentOffset.y);
        }}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
        style={styles.container}>
            <View style={styles.imageContainer}>
              {
                item && item.image ?
                <Image
                resizeMode="contain"
                style={styles.image}
                source={{uri: item?.image}}
                />
                :
                <Image
                resizeMode="contain"
                style={styles.image}
                source={{uri: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='}}
                />
              }

                </View>


        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            borderTopStartRadius: 1,
            borderTopWidth: 0.1,
            borderTopColor: '#171717',
            ...styles.descCont,
          }}>
          <View style={styles.priceInfo}>
            <NumberFormat style={{textAlign:'left'}} price={Number(item?.price)}/>
          </View>
          {/* product name */}
          <View style={[styles.nameInfo]}>
              {/* title */}
              <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.name}>
              Product Name
            </CustomText>
            {/* name */}
            {item &&
              <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.name}
              >
              {item?.name}
            </CustomText>
          }
           </View>

          {/* product details */}
          {item &&
          <View style={[styles.nameInfo]}>
            {/* title */}
            <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.name}>
              Details
            </CustomText>

            {/* details */}
            <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.name}>
              {item && item?.detail}
            </CustomText>
          </View>
          }
          {/* product offer */}
          <View style={[styles.nameInfo]}>
            {/* title */}
          <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.name}>
              Offer
            </CustomText>
            {/* offer value */}
            <CustomText
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.name}>
              {item?.offer}
            </CustomText>
          </View>
        </View>
      </ScrollView>
      <View style={[styles.actionsContainer]}>

        <TouchableOpacity
          onPress={() => {
            try {
              navigation.navigate('CartListScreen',{productId: item.id});
            } catch (error) {}
          }}
          style={styles.leftActions}>
            <BadgedIcon name="shopping-cart" type="font-awesome" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => addToCart()}
        style={styles.rightActions} >
        <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.name}>Add To Cart</CustomText>
        </TouchableOpacity>
      </View>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="small" color={colors.PRIMARY} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    flex: 1,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#F5FCFF88',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  actionsContainer: {
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    elevation: 2,
    borderColor: 'transparent',
  },
  rightActions: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 4,
    borderColor: colors.PRIMARY,
    borderWidth:1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 4,
    borderRadius: 4,
  },
  leftActions: {
    marginLeft: 4,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: colors.WHITE,
    shadowColor: colors.BLACK,
    alignSelf: 'center',
    width: '100%',
   },

  priceInfo: {
    marginTop: 5,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    width: '100%',
    backgroundColor: colors.WHITE,
    paddingLeft: 10,
  },
  nameInfo: {
    elevation: 1,
    marginTop: 5,
    shadowColor: '#52006A',
    backgroundColor: colors.WHITE,
    paddingVertical: 10,
    shadowOffset: {width: -2, height: -1},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  name: {
    marginTop: 0,
    fontSize: 14,
    color: colors.BLACK,
    textAlign: 'left',
    marginHorizontal: 10,
  },
  elevation: {
    elevation: 0.2,
  },
  image: {
    width: '80%',
    height: Dimensions.get('window').height * 0.5,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
