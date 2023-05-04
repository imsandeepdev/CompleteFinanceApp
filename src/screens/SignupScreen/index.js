import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView} from 'react-native';
import {AppButton, CustomTextInput, StoryScreen} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;

const SignupScreen = props => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMobNo, setUserMobNo] = useState('');
  const [password, setPassword] = useState('');

  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView
        contentContainerStyle={{
            flexGrow:1
        }}
        >
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
                onPress={() => props.navigation.navigate('LoginScreen')}
                marginHorizontal={R.fontSize.Size30}
                title={'Register'}
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
    </StoryScreen>
  );
};

export default SignupScreen;
