import * as React from 'react';
import {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {AppButton, CustomTextInput, StoryScreen} from '../../components';
import R from '../../res/R';
import {connect, useDispatch} from 'react-redux';
import {SignInRequest} from '../../actions/Auth.action';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onHandleValidation = () => {
    return (
      CommonFunctions.isBlank(userName.trim(), 'Please enter username') &&
      CommonFunctions.isBlank(password.trim(), 'Please enter password') &&
      CommonFunctions.isCheckValidLength(
        password.trim(),
        8,
        'Password atleast 8 char required',
      )
    );
  };

  const onCheckValid = () => {
    if (onHandleValidation()) {
      onHandleLogin();
    }
  };

  const onHandleLogin = () => {
    setLoading(true);
    let data = {
      Logincode: userName,
      password: password,
    };
    dispatch(
      SignInRequest(data, response => {
        console.log('SignIn response==>', response);
        if (response.entity.entity[0].Result === 1) {
          setLoading(false);

          props.navigation.navigate('RoleSelectionScreen', {
            user_id: response.entity.entity[0].EmpID,
          });
          AsyncStorage.setItem('userid', `${response.entity.entity[0].EmpID}`);
        } else {
          setLoading(false);

          Toast.show('Please enter valid username and password', Toast.SHORT);
        }
      }),
    );
  };

  return (
    <StoryScreen loading={loading}>
      <ScrollView contentContainerStyle={style.scrollView}>
        <View style={style.flexView}>
          <View style={style.topView}>
            <Image
              source={R.images.appLogo}
              resizeMode={'contain'}
              style={style.appLogoIcon}
            />
            <View>
              <Text style={style.titleText}>{'Complete Finance Solution'}</Text>
            </View>
          </View>

          <View style={style.bodyView}>
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
              onPress={() => onCheckValid()}
              marginHorizontal={R.fontSize.Size30}
              title={'Login'}
            />
            <View style={style.bottomView}>
              <Text style={style.accountText}>{`Don't have an account? `}</Text>
              <Text
                onPress={() => {
                  props.navigation.replace('SignupScreen');
                }}
                style={style.registerText}>
                {'Register Now'}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(LoginScreen);
