/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet,  View} from 'react-native';
import Constants from '../../../utils/constants/index';
import NumberFormat from '../../../components/NumberFormat';
import CustomText from '../../../components/CustomText';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
const {colors} = Constants;
const ProductItem = ({
  toDetails,
  image,
  name,
  price,
  handleAddToCart,
  id,
}) => {
  return (
    <View key={id} style={{...styles.container}}>
      <TouchableOpacity onPress={toDetails}>
        {image ? (
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{uri: image}}
          />
        ) : (
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={{
              uri: 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=',
            }}
          />
        )}
        <View style={styles.nameContainer}>
          <CustomText numberOfLines={2} ellipsizeMode="tail" style={styles.name}>
            {name}
          </CustomText>
        </View>
        <View style={styles.priceInfo}>
          {price && (
            // eslint-disable-next-line react-native/no-inline-styles
            <NumberFormat style={{textAlign: 'left'}} price={Number(price)} />
          )}
          <TouchableOpacity
            onPress={handleAddToCart}
          >
          <Icon
          color="blue"
          name="shopping-cart"
          size={24}
          type="font-awesome"
          />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 4,
    width: '100%',
    height: 220,
    alignContent: 'center',
    justifyContent: 'center',
    elevation: 0.1,
    bottom: 1,
    flex: 1 / 2,
    margin: 5,
  },
  image: {
    height: 150,
    width: '70%',
    alignSelf: 'center',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    width: 152,
    paddingHorizontal: 5,
    height: 35,
    textAlign: 'left',
    fontSize: 14,
    color: colors.BLACK,
  },
  name: {
    marginTop: 3,
    width: '100%',
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: colors.BLACK,
    textAlign: 'left',
    textTransform: 'capitalize',
  },
  priceInfo: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'left',
    marginBottom: 5,
    paddingHorizontal: 5,
    justifyContent: 'space-between',
  },
});
