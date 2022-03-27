/* eslint-disable prettier/prettier */
import {StyleSheet,TouchableOpacity,Image, Text, View} from 'react-native';
import React from 'react';

const SocialLoginButton = ({icon, title, backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        backgroundColor === 'google'
          ? styles.googleButton
          : backgroundColor === 'facebook'
          ? styles.facebookButton
          : styles.twitter,
      ]}>
      <View style={styles.socialButtonContent}>
        <Image style={styles.icon} source={{uri: icon}} />
        <Text style={styles.loginText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  googleButton: {
    backgroundColor: '#ff0000',
  },
  twitterButton: {
    backgroundColor: '#3b5998',
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer: {
    width: 250,
    marginBottom: 15,
    alignItems: 'flex-end',
  },
  socialButtonContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    color: '#FFFFFF',
    marginRight: 5,
  },
});
