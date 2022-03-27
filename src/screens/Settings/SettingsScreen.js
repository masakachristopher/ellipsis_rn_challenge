/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React,{useLayoutEffect} from 'react';
import { Icon } from 'react-native-elements';
import Constants from '../../utils/constants/index';
const {routes} = Constants;
const SettingsScreen = ({navigation}) => {
  useLayoutEffect(()=>{
    navigation.setOptions({
      title: 'Settings',
      headerShown: true,
      headerTitleAlign: 'center',
      headerBackVisible:false,
      headerRight:() =>(
        <View>
          <Icon onPress={()=>{
            try {
              navigation.navigate(routes.LOGIN);
            } catch (error) {

            }
          }} name="login" type="material" iconStyle={{marginRight: 16}}/>
        </View>
      ),
    });
  },[navigation]);
  return (
    <View />
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
