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


const LoginScreen = (props) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('');


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
                onPress={() => props.navigation.navigate('RoleSelectionScreen')}
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