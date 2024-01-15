import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {
  AlertModal,
  CustomAlert,
  CustomTextInput,
  GradientButton,
  RoleSelectionModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import {connect, useDispatch} from 'react-redux';
import {SignInRequest} from '../../actions/Auth.action';
import CommonFunctions from '../../utils/CommonFunctions';
import style from './style';
import DeviceInfo from 'react-native-device-info';
import {GetAppVersionRequest} from '../../actions/appVersion.action';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetRoleRequest} from '../../actions/role.action';
import {UserProfileRequest} from '../../actions/profile.action';
import Toast from 'react-native-simple-toast';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [toastMassage, setToastMassage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [appVersionModal, setAppVersionModal] = useState(false);
  const [updatedBuild, setUpdatedBuild] = useState('');
  const [appBuildNo, setAppBuildNo] = useState('');
  const [roleList, setRoleList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [roleModal, setRoleModal] = useState(false);

  useEffect(() => {
    console.log('BUILD VERSION==>', DeviceInfo.getVersion());
    console.log('BUILD ==>', DeviceInfo.getBuildNumber());
    handleBuildVersion();
  }, []);

  const handleBuildVersion = async () => {
    let appBuildVersion = await DeviceInfo.getVersion();
    console.log('APP BUILD VERSION==>', DeviceInfo.getVersion());
    setAppBuildNo(appBuildVersion);
    handleAppVersionAPI(appBuildVersion);
  };

  const handleAppVersionAPI = buildVersion => {
    dispatch(
      GetAppVersionRequest(response => {
        console.log('APP VERSION API RESPONSE==>', response);
        if (response.statusCode === 200) {
          let tempBuild = response.entity[0].ComponentName;
          setUpdatedBuild(tempBuild);
          if (parseFloat(tempBuild) <= parseFloat(buildVersion)) {
            setAppVersionModal(false);
          } else {
            setAppVersionModal(true);
          }
        }
      }),
    );
  };

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
    let data = {
      Logincode: userName,
      password: password,
      deviceNo: tempDeviceId,
    };

    // let data = {
    //   Logincode: userName,
    //   password: password,
    //   deviceNo: 'samsung-SM-A207F-1472d92a302b13bb',
    // };

    console.log('Data=>', data);
    dispatch(
      SignInRequest(data, response => {
        console.log('SignIn response==>', response);
        if (response.entity.statusCode === 200) {
          let tempUserId = response.entity.entity[0].EmpID;
          setSelectedUserId(tempUserId);
          AsyncStorage.setItem('userID', `${tempUserId}`);
          handleUserRoleList(tempUserId);
          // props.navigation.navigate('RoleSelectionScreen', {
          //   user_id: response.entity.entity[0].EmpID,
          // });
        } else {
          setToastMassage(response.entity.message);
          setModalVisible(true);
        }
      }),
    );
  };

  const handleUserRoleList = user_id => {
    dispatch(
      GetRoleRequest(user_id, response => {
        console.log('Role List Response==>', response);
        let tempList = response.entity;
        let tempMap = tempList.map((item, index) => {
          item.selected = false;
          return {...item};
        });
        console.log('TEMP MAP', tempMap);
        setRoleList(tempMap);
        setRoleModal(true);
      }),
    );
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setUserName('');
    setPassword('');
  };

  const handleUserName = text => {
    let tempText = text.replace(/^\s+|\s+$/gm, '');
    setUserName(tempText);
  };

  const handlePassword = text => {
    let tempText = text.replace(/^\s+|\s+$/gm, '');
    setPassword(tempText);
  };

  const handleSelectedRole = selectItem => {
    console.log('SELETEC ITEM', selectItem);
    let tempList = roleList;
    let tempRoleList = tempList.map(item => {
      return {
        ...item,
        selected: selectItem.RoleId === item.RoleId ? true : false,
      };
    });
    setRoleList(tempRoleList);
  };

  const handleConfirmRole = selectedRole => {
    console.log('SELECTED ROLEE=>', selectedRole);
    let data = {
      userId: Number(selectedUserId),
      roleId: selectedRole.RoleId,
    };
    dispatch(
      UserProfileRequest(data, response => {
        console.log('user Profile reson About==>', response);
        if (response.statusCode === 200) {
          setRoleModal(false);
          props.navigation.replace('HomeMenu');
        } else {
          Toast.show('please select valid role', Toast.SHORT);
        }
      }),
    );
  };

  return (
    <StoryScreen loading={props.loading}>
      <View style={style.bgImageView}>
        <ImageBackground
          source={{
            uri: 'https://avatars.mds.yandex.net/i?id=0b21976f255f87a139741d662df41ee1b4c4ee3d-10705627-images-thumbs&n=13',
          }}
          resizeMode={'cover'}
          style={style.bgImage}
        />
      </View>
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
              onChangeText={text => handleUserName(text)}
              marginBottom={R.fontSize.Size10}
              leftIcon={R.images.userIcon}
              maxLength={20}
            />
            <CustomTextInput
              placeholder={'Password'}
              value={password}
              onChangeText={text => handlePassword(text)}
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
            <GradientButton
              onPress={() => onCheckValid()}
              marginHorizontal={R.fontSize.Size30}
              title={'Login'}
            />
            <View style={style.bottomView}>
              <Text style={style.accountText}>{"Don't have an account? "}</Text>
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
      <AlertModal
        visible={appVersionModal}
        heading={'Alert ! Mobile App Version'}
        topTitle={`Updated Version: ${updatedBuild}`}
        title={`Hello,\nYour mobile app version (${appBuildNo}) is not updated \nKindly download latest Version of mobile app otherwise contact to support team/admin.`}
        headingViewStyle={style.alertHeadView}
        titleStyle={style.alertTitleStyle}
        // onPress={() => {
        //   console.log('Pressed');
        // }}
        // buttonBackGroundColor={R.colors.redColor}
      />
      <RoleSelectionModal
        visible={roleModal}
        cancelOnPress={() => setRoleModal(false)}
        onPress={item => handleSelectedRole(item)}
        confirmOnPress={item => handleConfirmRole(item)}
        dataList={roleList}
        heading={'Select Your Role'}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading:
    state.auth.loading ||
    state.getAppVersionRoot.loading ||
    state.profileRoot.loading,
});

export default connect(mapStateToProps)(LoginScreen);
