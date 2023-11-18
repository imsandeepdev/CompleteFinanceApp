import * as React from 'react';
import {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  AppButton,
  CustomAlert,
  CustomTextInput,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import {connect, useDispatch} from 'react-redux';
import {SignInRequest} from '../../actions/Auth.action';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';
import DeviceInfo from 'react-native-device-info';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toastMassage, setToastMassage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
      handleDeviceInfo();
    }
  };

  const handleDeviceInfo = async () => {
    let deviceId = await DeviceInfo.getDeviceId();
    let deviceManufacturer = await DeviceInfo.getManufacturer();
    let deviceModal = await DeviceInfo.getModel();
    let deviceUniqueId = await DeviceInfo.getUniqueId();

    console.log('DeviceId==>', deviceId);
    console.log('DeviceId==>', deviceManufacturer);
    console.log('DeviceId==>', deviceModal);
    console.log('DeviceId==>', deviceUniqueId);
    let tempDeviceId = `${deviceManufacturer}-${deviceModal}-${deviceUniqueId}`;
    onHandleLogin(tempDeviceId);
  };

  const onHandleLogin = tempDeviceId => {
    setLoading(true);
    let data = {
      Logincode: userName,
      password: password,
      deviceNo: tempDeviceId,
    };

    // let data = {
    //   Logincode: userName,
    //   password: password,
    //   deviceNo: 'samsung-SM-A207F-54db0b386597847e',
    // };

    console.log('Data=>', data);
    dispatch(
      SignInRequest(data, response => {
        console.log('SignIn response==>', response);
        if (response.entity.statusCode === 200) {
          setLoading(false);

          props.navigation.navigate('RoleSelectionScreen', {
            user_id: response.entity.entity[0].EmpID,
          });
          console.log('LOGINDETAIL=>', response.entity.entity[0]);
          AsyncStorage.setItem(
            'userData',
            JSON.stringify(response.entity.entity[0]),
          );
        } else {
          setLoading(false);
          setToastMassage(response.entity.message);
          setModalVisible(true);
          // Toast.show('Please enter valid username and password', Toast.SHORT);
        }
      }),
    );
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setUserName('');
    setPassword('');
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
      <CustomAlert
        visible={modalVisible}
        topIcon={R.images.cancelRedIcon}
        modalColor={R.colors.redColor}
        title={'Login faild'}
        subTitle={toastMassage}
        onPress={() => handleModalClose()}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(LoginScreen);
