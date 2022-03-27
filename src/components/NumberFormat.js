/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
//Color
import Constants from '../utils/constants/index';
//number format
import NumberFormat from 'react-number-format';
//Text
import CustomText from './CustomText';
const {colors} = Constants;
const Number = ({price, color, style}) => {
  return (
    <NumberFormat
      value={price}
      displayType={'text'}
      thousandSeparator={true}
      prefix={'TZS '}
      renderText={formattedValue => (
        <View
          style={
            color
              ? {...styles.priceContainer, backgroundColor: color}
              : styles.container
          }>
          <CustomText
            style={
              ({
                ...style,
                color: color ? '#fff' : colors.SECONDARY,
              },
              {...styles.price})
            }>
            {formattedValue}
          </CustomText>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {},
  priceContainer: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    elevation: 1,
    textAlign: 'left',
  },
  price: {
    fontSize: 14,
    fontFamily: 'Roboto-Medium',
    color: colors.BLACK,
    textAlign: 'left',
  },
  priceWithLineThrough: {
    fontSize: 12,
    textDecorationLine: 'line-through',
    fontFamily: 'Roboto-Regular',
    color: colors.BLACK,
    opacity: 0.5,
  },
});

export default Number;
