import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Image, Text, SafeAreaView} from 'react-native';
import {
  AppButton,
  Header,
  RoleSelectionModal,
  StoryScreen,
} from '../../components/index';
import R from '../../res/R';
import style from './style';
import LinearGradient from 'react-native-linear-gradient';
import {connect, useDispatch} from 'react-redux';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetRoleRequest} from '../../actions/role.action';
import {UserProfileRequest} from '../../actions/profile.action';
import Toast from 'react-native-simple-toast';
import {ScrollView} from 'react-native';

const CustomRow = props => {
  return (
    <View style={style.customRowBody}>
      <View style={style.customRowLeftView}>
        <Image
          source={{
            uri: props.icon,
          }}
          resizeMode={'cover'}
          style={style.customRowImage}
        />
      </View>
      <View style={style.mainView}>
        {props.titleKey && (
          <Text style={style.customRowTitleKeyText}>{props.titleKey}</Text>
        )}
        <Text style={style.customRowTitleText}>{props.title}</Text>
      </View>
    </View>
  );
};

const AboutUs = props => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});
  const [roleList, setRoleList] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState('');
  const [roleModal, setRoleModal] = useState(false);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      screenFocus();
    });
    return unsubscribe;
  }, [props.navigation]);

  const screenFocus = async () => {
    console.log('USER PROFILE==>', props.profile.entity[0]);
    setUserDetail(props.profile.entity[0]);
    handleUserId();
  };

  const handleUserId = async () => {
    let tempUserId = await AsyncStorage.getItem('userID');
    setSelectedUserId(tempUserId);
    handleUserRoleList(tempUserId);
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
      }),
    );
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
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'About Us'}
        />
        <View style={style.mainView}>
          <View>
            <LinearGradient
              colors={[R.colors.appColor, R.colors.darkAppColor]}
              style={{height: R.fontSize.Size160}}>
              <View style={style.topBodyView}>
                <View style={style.leftView}>
                  <Text style={style.leftText}>
                    {userDetail.StaffName !== undefined ||
                    userDetail.StaffName !== null
                      ? 'S'
                      : ''}
                  </Text>
                </View>

                <View style={style.rightView}>
                  <Text style={style.rightTitleText}>
                    {userDetail.StaffName}
                  </Text>
                  <Text style={style.rightSubTitleText}>
                    {userDetail.RoleName}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={style.mainView}>
            <ScrollView contentContainerStyle={style.scrollViewStyle}>
              <View style={style.scrollBodyView}>
                <CustomRow
                  // icon={'https://cdn-icons-png.flaticon.com/128/3135/3135768.png'}
                  icon={
                    'https://cdn-icons-png.flaticon.com/128/3135/3135707.png'
                  }
                  titleKey={'Name'}
                  title={userDetail.StaffName}
                />
                <CustomRow
                  icon={
                    'https://cdn-icons-png.flaticon.com/128/9478/9478078.png'
                  }
                  titleKey={'Mobile No'}
                  title={`+91 ${userDetail.ContactNo}`}
                />
                <CustomRow
                  icon={
                    'https://cdn-icons-png.flaticon.com/128/3178/3178165.png'
                  }
                  titleKey={'Mail Id'}
                  title={userDetail.Email}
                />
                <CustomRow
                  icon={
                    'https://cdn-icons-png.flaticon.com/128/3293/3293303.png'
                  }
                  titleKey={'Location'}
                  title={userDetail.businessofficeName}
                />
                <CustomRow
                  icon={
                    'https://cdn-icons-png.flaticon.com/128/10692/10692577.png'
                  }
                  titleKey={'Joining Date'}
                  title={moment(userDetail.businessofficeJoinDate).format(
                    'Do MMM, YYYY',
                  )}
                />
                <CustomRow
                  icon={
                    'https://cdn-icons-png.flaticon.com/128/4654/4654577.png'
                  }
                  titleKey={'Role'}
                  title={userDetail.RoleName}
                />
              </View>
              <View style={style.bottomButtonView}>
                <AppButton
                  onPress={() => setRoleModal(true)}
                  title={'Manage Role'}
                  // backgroundColor={R.colors.white}
                  borderWidth={R.fontSize.Size2}
                  borderColor={R.colors.appColor}
                  marginTop={R.fontSize.Size8}
                  textColor={R.colors.lightWhite}
                  buttonBorderRadius={R.fontSize.Size30}
                  buttonHeight={R.fontSize.Size40}
                  titleFontSize={R.fontSize.Size16}
                />
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
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
  loading: state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(AboutUs);
