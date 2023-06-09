import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {AppButton, CustomTextInput, OtpModal, StoryScreen} from '../../components';
import R from '../../res/R';
import CommonFunctions from '../../utils/CommonFunctions';
const screenHeight = Dimensions.get('screen').height;

const SignupScreen = props => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobNo, setUserMobNo] = useState('');
  const [password, setPassword] = useState('');
  const [otpModal, setOtpModal] = useState(false)
  const [otpArray, setOtpArray] = useState([]);
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);


    const onOtpChange = index => {
      return value => {
        if (isNaN(Number(value))) {
          return;
        }
        const otpArrayCopy = otpArray.concat();
        otpArrayCopy[index] = value;
        setOtpArray(otpArrayCopy);

        if (value !== '') {
            index === 0 && secondTextInputRef.current.focus(),
            index === 1 && thirdTextInputRef.current.focus(),
            index === 2 && fourthTextInputRef.current.focus();
        }
      };
    };

    const handleKeyPress = ({nativeEvent: {key: keyValue}}, index) => {
      console.log(keyValue);
      console.log('Index', index);

      if (keyValue == 'Backspace') {
          index === 3 && thirdTextInputRef.current.focus(),
          index === 2 && secondTextInputRef.current.focus(),
          index === 1 && firstTextInputRef.current.focus();
      } else {
          index === 0 && secondTextInputRef.current.focus(),
          index === 1 && thirdTextInputRef.current.focus(),
          index === 2 && fourthTextInputRef.current.focus();
      }
    };

    const handleVerify = () => {
      setOtpModal(false)
    }

    const handleVerification = () => {
      return CommonFunctions.isBlank(userName.trim(), 'Please enter user name')&&
      CommonFunctions.isBlank(userEmail.trim(), 'Please enter email id')&&
      CommonFunctions.isEmailValid(userEmail, 'Please enter valid email id')&&
      CommonFunctions.isBlank(userMobNo.trim(), 'Please enter mobile number')&&
      CommonFunctions.isBlank(password.trim(), 'Please enter password')
    }

    const handleProceedVerify = () => {
      if(handleVerification()){
        handleOtpProcess()
      }
    }

    const handleOtpProcess = () => {
      setOtpModal(true)
    }

  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                height: screenHeight / 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={R.images.appLogo}
                resizeMode={'contain'}
                style={{
                  height: R.fontSize.Size160,
                  width: R.fontSize.Size160,
                }}
              />
              <View>
                <Text
                  style={{
                    fontFamily:R.fonts.extraBold,
                    fontSize: R.fontSize.Size16,
                    color: R.colors.secAppColor,
                  }}>
                  {'Welcome To Complete Finance Solution'}
                </Text>
              </View>
            </View>

            <View style={{flex: 1, paddingHorizontal: R.fontSize.Size24}}>
              <CustomTextInput
                placeholder={'Create user name'}
                value={userName}
                onChangeText={text => setUserName(text)}
                marginBottom={R.fontSize.Size10}
                leftIcon={R.images.userIcon}
              />
              <CustomTextInput
                placeholder={'Enter email id'}
                value={userEmail}
                onChangeText={text => setUserEmail(text)}
                marginBottom={R.fontSize.Size10}
                leftIcon={R.images.mailIcon}
              />
              <CustomTextInput
                placeholder={'Enter mobile number'}
                value={userMobNo}
                onChangeText={no => setUserMobNo(no)}
                marginBottom={R.fontSize.Size10}
                leftIcon={R.images.phoneIcon}
                keyboardType={'number-pad'}
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
                onPress={() => handleProceedVerify()}
                marginHorizontal={R.fontSize.Size30}
                title={'Proceed'}
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
                  {`Already have an account? `}
                </Text>
                <Text
                  onPress={() => {
                    props.navigation.replace('LoginScreen');
                  }}
                  style={{
                    fontSize: R.fontSize.Size14,
                    color: R.colors.appColor,
                    fontWeight: '700',
                  }}>
                  {'Login'}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <OtpModal
        visible={otpModal}
        onRequestClose={() => setOtpModal(false)}
        closeModal={() => setOtpModal(false)}
        mapTextInput={[
          firstTextInputRef,
          secondTextInputRef,
          thirdTextInputRef,
          fourthTextInputRef,
        ]}
        value={otpArray}
        onChangeText={onOtpChange}
        onKeyPress={handleKeyPress}
        onPress={() => handleVerify()}
      />
    </StoryScreen>
  );
};

export default SignupScreen;
