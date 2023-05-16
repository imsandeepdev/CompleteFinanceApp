import * as React from 'react';
import {useState, useEffect} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import { AppButton, CustomTextInput, StoryScreen } from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height
import {useDispatch} from 'react-redux';
import { AddCartSuccess } from '../../actions/addcart.action';
import { SignInRequest } from '../../actions/Auth.action';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';


const LoginScreen = (props) => {

    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);



    const product = {
      name: 'IPhone',
      category: '12',
      price:'12222',
      color:'white'
    }

    const onHandleValidation = () => {
      return (
        CommonFunctions.isBlank(userName.trim(), 'Please enter username') &&
        CommonFunctions.isBlank(password.trim(), 'Please enter password') &&
        CommonFunctions.isCheckValidLength(password.trim(),8,'Password atleast 8 char required')
      );
    }

    const onCheckValid = () => {
      if(onHandleValidation())
      {
        onHandleLogin()
      }
    }

    const onHandleLogin = () => {
      let data={
        user_name: userName,
        user_pass: password
      }
      dispatch(
        SignInRequest(data,response => {
          console.log('SignIn response==>', response);
          if (response.message == 'Success') {
            props.navigation.navigate('RoleSelectionScreen', {
              user_id: response.entity[0].LoginId,
            });
          }
          else
          {
            Toast.show('Please enter valid username and password', Toast.SHORT)
          }
        }),
      );
    };

    return (
      <StoryScreen>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: screenHeight / 3,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={R.images.appLogo}
                resizeMode={'contain'}
                style={{
                  height: R.fontSize.Size280,
                  width: R.fontSize.Size280,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: R.fontSize.Size50,
                }}>
                <Text
                  style={{
                    fontSize: R.fontSize.Size18,
                    color: R.colors.secAppColor,
                    fontWeight: '700',
                    //   textTransform: 'uppercase',
                  }}>
                  {'Complete Finance Solution'}
                </Text>
              </View>
            </View>

            <View style={{flex: 1, paddingHorizontal: R.fontSize.Size24}}>
              <CustomTextInput
                placeholder={'Username'}
                value={userName}
                onChangeText={text => setUserName(text)}
                marginBottom={R.fontSize.Size10}
                leftIcon={R.images.userIcon}
                maxLength={20}
              />
              <CustomTextInput
                placeholder={'Password'}
                value={password}
                onChangeText={text => setPassword(text)}
                marginBottom={R.fontSize.Size10}
                secureTextEntry={showPassword ? false : true}
                leftIcon={R.images.greenLockIcon}
                rightIcon={
                  showPassword ? R.images.eyeIcon : R.images.closeEyeIcon
                }
                rightOnPress={() => setShowPassword(!showPassword)}
                maxLength={25}
              />
            </View>
            <View
              style={{
                marginVertical: R.fontSize.Size10,
              }}>
              <AppButton
                // onPress={() => props.navigation.navigate('RoleSelectionScreen')}
                onPress={() => onCheckValid()}
                marginHorizontal={R.fontSize.Size30}
                title={'Login'}
              />
              <View
                style={{
                  marginTop: R.fontSize.Size10,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: R.fontSize.Size14,
                    color: R.colors.placeHolderColor,
                  }}>
                  {`Don't have an account? `}
                </Text>
                <Text
                  onPress={() => {
                    props.navigation.replace('SignupScreen');
                  }}
                  style={{
                    fontSize: R.fontSize.Size14,
                    color: R.colors.appColor,
                    fontWeight: '700',
                  }}>
                  {'Register Now'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </StoryScreen>
    );
}

export default LoginScreen