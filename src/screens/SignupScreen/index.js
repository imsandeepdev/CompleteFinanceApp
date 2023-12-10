import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {
  AppButton,
  CustomAlert,
  CustomTextInput,
  OtpModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import CommonFunctions from '../../utils/CommonFunctions';
import DeviceInfo from 'react-native-device-info';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {UserRegistrationRequest} from '../../actions/registration.action';
import moment from 'moment';
import style from './style';

const SignupScreen = props => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [empId, setEmpId] = useState('');
  const [userMobNo, setUserMobNo] = useState('');
  const [password, setPassword] = useState('');
  const [otpModal, setOtpModal] = useState(false);
  const [otpArray, setOtpArray] = useState([]);
  const firstTextInputRef = useRef(null);
  const secondTextInputRef = useRef(null);
  const thirdTextInputRef = useRef(null);
  const fourthTextInputRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [otpIndex, setOtpIndex] = useState(0);
  const todayDate = moment(new Date());
  const [toastMassage, setToastMassage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [regStatus, setRegStatus] = useState(false);

  useEffect(() => {
    handleDeviceInfo();
  }, [props.navigation]);

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
    setDeviceId(tempDeviceId);
  };

  // const onOtpChange = index => {
  //   return value => {
  //     if (isNaN(Number(value))) {
  //       return;
  //     }
  //     const otpArrayCopy = otpArray.concat();
  //     otpArrayCopy[index] = value;
  //     setOtpArray(otpArrayCopy);

  //     if (value !== '') {
  //       index === 0 && secondTextInputRef.current.focus(),
  //         index === 1 && thirdTextInputRef.current.focus(),
  //         index === 2 && fourthTextInputRef.current.focus();
  //     }
  //   };
  // };

  // const handleKeyPress = ({nativeEvent: {key: keyValue}}, index) => {
  //   console.log(keyValue);
  //   console.log('Index', index);
  //   setOtpIndex(index);
  //   if (keyValue === 'Backspace') {
  //     index === 3 && thirdTextInputRef.current.focus(),
  //       index === 2 && secondTextInputRef.current.focus(),
  //       index === 1 && firstTextInputRef.current.focus();
  //   } else {
  //     index === 0 && secondTextInputRef.current.focus(),
  //       index === 1 && thirdTextInputRef.current.focus(),
  //       index === 2 && fourthTextInputRef.current.focus();
  //   }
  // };

  const handleVerify = item => {
    console.log('OTP ITEM=>', item.join(''));
    console.log('NUMBER SLICE=>', userMobNo.slice(6));
    let otpValue = item.join('');
    let varifyOtp = userMobNo.slice(6);
    if (otpValue === varifyOtp) {
      handleRegisterAPI();
    } else {
      Toast.show('Please enter valid OTP', Toast.SHORT);
    }
  };

  const handleRegisterAPI = () => {
    let data = {
      mode: 'insert',
      empId: empId,
      logincode: userName,
      password: password,
      deviceNo: deviceId,
      mobileNo: userMobNo,
      approvalLogin: 1,
      is_Active: true,
      createdby: 1,
      createdDate: moment().format(),
      approvedBy: 1,
      approveddate: moment().format(),
    };

    console.log('REGISTER FORM DATA==>', data);
    dispatch(
      UserRegistrationRequest(data, response => {
        console.log('Register Response==>', response);
        if (response.entity.statusCode === 200 && response.statusCode === 200) {
          let tempMsg = response.entity.entity[0].Msg;
          if (response.entity.entity[0].status === 'Success') {
            setOtpModal(false);
            props.navigation.replace('LoginScreen');
            Toast.show(tempMsg, Toast.SHORT);
            setRegStatus(true);
          }
        } else {
          setRegStatus(false);
          setOtpModal(false);
          setToastMassage(response.entity.message);
          setModalVisible(true);
        }
      }),
    );
  };

  const handleVerification = () => {
    return (
      CommonFunctions.isBlank(empId.trim(), 'Please enter employee id') &&
      CommonFunctions.isBlank(userEmail.trim(), 'Please enter email id') &&
      CommonFunctions.isEmailValid(userEmail, 'Please enter valid email id') &&
      CommonFunctions.isBlank(userMobNo.trim(), 'Please enter mobile number') &&
      CommonFunctions.isCheckValidLength(
        userMobNo.trim(),
        10,
        'mobile number 10 digit required',
      ) &&
      CommonFunctions.isBlank(password.trim(), 'Please enter password')
    );
  };

  const handleProceedVerify = () => {
    if (handleVerification()) {
      handleOtpProcess();
    }
  };

  const handleOtpProcess = () => {
    setOtpModal(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <StoryScreen>
      <SafeAreaView style={style.flexView}>
        <ScrollView contentContainerStyle={style.scrollFlow}>
          <View style={style.flexView}>
            <View style={style.topView}>
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
                    fontFamily: R.fonts.extraBold,
                    fontSize: R.fontSize.Size16,
                    color: R.colors.secAppColor,
                  }}>
                  {'Welcome To Complete Finance Solution'}
                </Text>
              </View>
            </View>

            <View style={style.bodyView}>
              <CustomTextInput
                placeholder={'Enter user name'}
                value={userName}
                onChangeText={text => setUserName(text)}
                marginBottom={R.fontSize.Size10}
                leftIcon={R.images.userIcon}
              />
              <CustomTextInput
                placeholder={'Enter employee id'}
                value={empId}
                onChangeText={text => setEmpId(text)}
                marginBottom={R.fontSize.Size10}
                leftIcon={R.images.userIcon}
                keyboardType={'number-pad'}
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
                maxLength={10}
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
              <View style={style.bottomBody}>
                <Text style={style.alreadyText}>
                  {'Already have an account? '}
                </Text>
                <Text
                  onPress={() => {
                    props.navigation.replace('LoginScreen');
                  }}
                  style={style.loginText}>
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
        otpTitle={`We will send OTP for verification \non ${userMobNo}`}
        onPress={handleVerify}
      />
      <CustomAlert
        visible={modalVisible}
        topIcon={regStatus ? R.images.successIcon : R.images.cancelRedIcon}
        modalColor={regStatus ? R.colors.appColor : R.colors.redColor}
        title={regStatus ? 'Registration Success' : 'Registration faild'}
        subTitle={toastMassage}
        onPress={() => handleModalClose()}
      />
    </StoryScreen>
  );
};

export default SignupScreen;
