/* eslint-disable prettier/prettier */
import {Dimensions, StatusBar, StyleSheet,TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input,Text, Button, Icon, SocialIcon} from 'react-native-elements';
import Constants from '../../utils/constants/index';
import CustomText from '../../components/CustomText';
const windowWidth = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
    const {routes} = Constants;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


   const signIn = ()=>{
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
        <View style={styles.container}>
        <StatusBar style="light"/>
        <View style={styles.header}>
         {/* left */}
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Sign In</Text>
        </View>

        {/* right */}
        <View style={styles.toLoginTextContainer}>
          <View style={styles.insideContent}>
            <TouchableOpacity
                onPress={()=> navigation.navigate(routes.REGISTER)}
                style={styles.insideContent}>
                <Text style={styles.toSignUp}>Sign Up</Text>
            </TouchableOpacity>
          </View>

            <Icon
                type="font-awesome"
                size={12}
                name="arrow-right" />

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
        onSubmitEditing={signIn}
      />

        <Button buttonStyle={styles.buttonLogin}  onPress={signIn} title="Sign In" />
        <CustomText>or</CustomText>
        <SocialIcon
          style={styles.socialIconButton}
          title="Sign In With Facebook"
          button
          type="facebook"
        />

        <SocialIcon
          style={styles.socialIconButton}
          title="Sign In With Google"
          button
          type="google"
        />
        <SocialIcon
          style={styles.socialIconButton}
          title="Sign In With Twitter"
          button
          type="twitter"
        />
    </View>
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
      toSignUp: {
        marginRight: 4,
      },
      insideContainer:{
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonLogin: {
        height: 50,
        width: windowWidth - 30,
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
      socialIconButton:{
        width: windowWidth - 30,
        borderRadius: 4,
      },
});
export default LoginScreen;
