/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React,{useLayoutEffect} from 'react';

const NewsScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'News',
      headerShown: true,
    });

  }, [navigation]);
  return (
    <View>
      <Text>NewsScreen</Text>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
