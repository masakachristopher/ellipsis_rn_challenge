/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
const CustomText = ({style, ...props}) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipsizeMode}
      selectable={props.selectable}
      style={{...styles.text, ...style}}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default CustomText;
