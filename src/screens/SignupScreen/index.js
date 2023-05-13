import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {AppButton, CustomTextInput, OtpModal, StoryScreen} from '../../components';
import R from '../../res/R';
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
                  height: R.fontSize.Size200,
                  width: R.fontSize.Size200,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  bottom: R.fontSize.Size30,
                }}>
                <Text
                  style={{
                    fontSize: R.fontSize.Size16,
                    color: R.colors.secAppColor,
                    fontWeight: '700',
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
                secureTextEntry={true}
                leftIcon={R.images.greenLockIcon}
              />
            </View>
            <View
              style={{
                marginVertical: R.fontSize.Size10,
              }}>
              <AppButton
                onPress={() => setOtpModal(true)}
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
