/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { Image, SafeAreaView,Text, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import Constants from '../../../utils/constants/index';
import CustomText from '../../../components/CustomText';
import NumberFormat from '../../../components/NumberFormat';
import { useProductDetails } from '../../../logic/products/useProductDetails';
import Number from '../../../components/NumberFormat';
const {colors} = Constants;
// import Toast from 'react-native-root-toast';
// import ProductDetails from '../../Product/ProductDetailsScreen';
const CartItem = ({name,quantity,cartQuantity,toDetails,handleAddToCart,handleDecreaseCart,handleRemoveFromCart, item,id}) => {

  // use get details hook

  const {
     productData,
  } = useProductDetails({
    productId: id,
  });

  // console.log(productData);

    return (
        <View
        activeOpcacity={1}
        key={item?.id}
        // style={styles.container, {...style},{backgroundColor: backgroundColor}}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        style={styles.container}

        >
          <View style={styles.topContainer}>

          <TouchableOpacity onPress={()=> toDetails()} style={{flex: 1}}>
            {productData && productData?.name && <CustomText
              numberOfLines={1}
              ellipsizeMode="tail"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{fontSize:16,textTransform:'capitalize', alignSelf: 'flex-start'}}>
                  {productData?.name}
            </CustomText>
            }
          </TouchableOpacity>
          <TouchableOpacity
                  onPress={()=>{
                    try {
                      handleRemoveFromCart();
                    } catch (err){

                    }
                  }}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{fontSize:16,alignSelf: 'flex-end'}}>
                   <Icon type="material" name="close" size={26} />
              </TouchableOpacity>

        </View>
        <View style={{flexDirection: 'row'}}>
        <View style={styles.boxLeft}>
           <View
           style={styles.imageContainer}
           >
            {productData && <Image
              resizeMode="center"
              style={styles.image}
              source={{ uri: productData.image}}
            />}
          </View>
          <View style={styles.leftContents}>
              {productData && productData?.name && <View>
                  <CustomText>{productData?.name}</CustomText>
              </View>
              }
               {productData &&  productData?.price && <View>
                  <Number price={productData?.price}/>
              </View>
              }
               {productData && productData?.detail && <View>
                  <CustomText ellipsizeMode="tail" numberOfLines={1}>{productData?.detail}</CustomText>
              </View>
              }
               {productData && productData?.offer && <View>
                  <CustomText ellipsizeMode="tail" numberOfLines={1}>{productData?.offer}</CustomText>
              </View>
              }
          </View>
          </View>
          <View style={styles.boxRight}>
              <TouchableOpacity activeOpacity={0}
              onPress={()=>{
                try {
                  handleAddToCart();
                } catch (err){

                }
              }
              }  style={styles.boxMin}>
                  <Icon type="material" name="add" size={26} />
              </TouchableOpacity>
              {quantity && <View>
                  <CustomText style={styles.boxText}>{quantity}</CustomText>
              </View>
              }
              <TouchableOpacity
                  onPress={()=>{
                    try {
                      handleDecreaseCart();
                    } catch (err){

                    }
                  }}
                   style={styles.boxMin}>
                  <Icon type="material" name="remove" size={26} />
              </TouchableOpacity>
          </View>
          </View>

        </View>
     );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        height: 150,
        flex: 1,
        backgroundColor: colors.WHITE,
        elevation: 1,
        marginVertical: 4,
    },
    topContainer:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:16,
        backgroundColor: colors.WHITE,
        justifyContent:'flex-start',
    },
    bottomContainer:{
    shadowColor: colors.BLACK,
    width: '100%',
    flexDirection:'row',
    height:'50%',
    justifyContent: 'center',
    borderBottomColor: '#A9A9A9',
    bottom:1,
    paddingHorizontal:10,
    flex: 0.75,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    },
    image:{
      width:'80%' ,
      height:'80%' ,
      resizeMode: 'center',
      borderRadius: 5,
    },
    imageContainer: {
      width:'80%' ,
      height:'80%' ,
      flex: 1,
      alignSelf:'center',
    },
    leftContents: {
        // marginLeft:10,
        flex:1,
        // resizeMode: "stretch",
    },
    right: {
        flex:0.7,
        // paddingLeft: 15,
        // justifyContent: "space-around",
        // alignItems: "",
        // backgroundColor: '#ff3',
        right:0,
        // height: "100%",

      },
      title: {
        fontSize: 14,
      },
      boxLeft: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.8,
        alignSelf:'flex-end',
        width: '70%',
        borderRadius: 5,
        padding: 16,
        height: '80%',
        flexDirection:'row',
      },
      boxRight: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 0.2,
        alignSelf:'flex-end',
        borderRadius: 5,
        padding: 16,
        height: '80%',
      },
      boxMin: {
        alignItems: 'center',
        borderRadius: 50,
        backgroundColor: colors.SECONDARY_SHADE,
      },
      boxText: {
        fontSize: 16,
      },

});

