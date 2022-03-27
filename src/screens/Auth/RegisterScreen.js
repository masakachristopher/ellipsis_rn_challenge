/* eslint-disable prettier/prettier */
import {
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import React, { useState} from 'react';
import {Input, Button, Text, Icon} from 'react-native-elements';
import Constants from '../../utils/constants/index';
const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;


const RegisterScreen = ({navigation}) => {
  const {routes} = Constants;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  const signUp = () => {

    try {
      if (!username && !password){
        // eslint-disable-next-line no-alert
        alert('All fields required!');
        return;
      }
      navigation.navigate(routes.SETTINGS);
    } catch (error) {

    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      {/* header container */}
      <View style={styles.header}>
         {/* left */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sign Up</Text>
        </View>

        {/* right */}
        <View style={styles.toLoginTextContainer}>
          <View style={styles.insideContent}>
            <Icon
              type="font-awesome"
              size={12}
              name="arrow-left" />
          </View>
          <TouchableOpacity
            onPress={()=> navigation.navigate(routes.LOGIN)}
            style={styles.insideContent}>
            <Text style={styles.toSignIn}>Back To Login</Text>
          </TouchableOpacity>

        </View>
      </View>
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Username"
        autoFocus
        type="username"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <Input
        inputContainerStyle={styles.inputContainer}
        placeholder="Password"
        secureTextEntry
        type="password"
        value={password}
        onChangeText={text => setPassword(text)}
        onSubmitEditing={signUp}
      />

      <Button
        containerStyle={styles.buttonLogin}
        onPress={signUp}
        title="Register"
      />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  header:{
    width: windowWidth - 30,
    marginBottom: 20,
    flexDirection:'row',
    alignItems:'center',
    alignContent:'center',
    alignSelf:'center',
  },
  headerTextContainer:{
    flex:1,
    fontSize: 24,
    alignSelf:'flex-start',
    textAlign:'left',
    top: -10,
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'flex-start',
    flexDirection:'row',
  },
  toLoginTextContainer:{
    flex:1,
    fontSize: 24,
    alignSelf:'flex-end',
    textAlign:'right',
    top: -10,
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'flex-end',
    flexDirection:'row',
  },
  headerText: {
    fontSize: 24,
  },
  toSignIn: {
    marginLeft: 4,
  },
  insideContainer:{
    backgroundColor:'#000',
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: windowWidth - 30,
    marginTop: 10,
    color: '#000',
  },
  buttonLogin: {
    width: windowWidth - 30,
    marginTop: 10,
    backgroundColor: 'blue',
  },
  inputContainer: {
    width: windowWidth - 30,
    alignSelf:'center',
    borderRadius: 4,
    borderColor: '#000',
    borderWidth: 0.5,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 5,
    borderBottomWidth: 0.5,
  },
  registerTxt: {
    fontSize: 12,
    color: 'blue',
    marginTop: 5,
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default RegisterScreen;
