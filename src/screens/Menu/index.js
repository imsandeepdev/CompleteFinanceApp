import * as React from 'react';
import {useState, useEffect} from 'react';
import {Pressable, View, Text, Image, ScrollView, Alert} from 'react-native';
import R from '../../res/R';
import style from './style';
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import AppContent from '../../utils/AppContent';
import DeviceInfo from 'react-native-device-info';

const CustomDrawerButton = props => {
  return (
    <View style={style.customDrawerView}>
      {props.image && (
        <Image
          source={{uri: props.image}}
          resizeMode={'cover'}
          style={{
            height: R.fontSize.Size22,
            width: R.fontSize.Size22,
          }}
        />
      )}
      <Pressable onPress={props.onPress} style={style.pressableStyle}>
        <Text style={[style.tabNameStyle, props.titleStye]}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const Menu = props => {
  const [userDetail, setUserDetail] = useState({});
  const [menuList, setMenuList] = useState([]);
  const [appVersion, setAppVersion] = useState('');

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      screenFocus();
    });
    return unsubscribe;
  }, [props.navigation]);

  const screenFocus = async () => {
    handleProfileData();
    checkAppVersion();
  };

  const handleProfileData = () => {
    setUserDetail(props.profile.entity[0]);
    let tempList =
      props.profile.entity[0].isMobile === '2'
        ? AppContent.ManagerLoanCardList
        : props.profile.entity[0].isMobile === '1'
        ? AppContent.BROLoanCardList
        : AppContent.LoanCardList;
    setMenuList(tempList);
  };

  const checkAppVersion = async () => {
    let appBuildVersion = await DeviceInfo.getVersion();
    console.log('APP BUILD VERSION==>', DeviceInfo.getVersion());
    setAppVersion(appBuildVersion);
  };

  const onLogout = () => {
    Alert.alert(
      'Logout!',
      'Are you sure you want to logout?',
      [
        {
          text: 'LOGOUT',
          onPress: () => onCalllogOutAPI(),
        },
        {text: 'CANCEL'},
      ],
      {cancelable: true},
    );
  };

  const onCalllogOutAPI = () => {
    props.navigation.replace('LoginScreen');
  };

  return (
    <View style={style.safeAreaStyle}>
      <View style={style.mainView}>
        <LinearGradient
          colors={['#329691', '#266C87', '#266C87']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          style={style.topLinearView}>
          <View style={style.userDataView}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2202/2202112.png',
              }}
              style={style.imageStyle}
              resizeMode={'cover'}
            />
            <View>
              <Text
                style={style.textStyle}
                numberOfLines={1}>{`${userDetail?.StaffName}`}</Text>

              <Text
                style={
                  style.subtextStyle
                }>{`Role: ${userDetail?.RoleName}`}</Text>
              <Text
                style={
                  style.subtextStyle
                }>{`MobNo: ${userDetail?.ContactNo}`}</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          <View>
            {menuList.map((item, index) => {
              return (
                <View key={index} style={style.bodyView}>
                  <CustomDrawerButton
                    title={`${item.Title} ${item.subTitle}`}
                    image={item.icon}
                    onPress={() => props.navigation.navigate(item.Url)}
                  />
                </View>
              );
            })}
            <View style={style.bodyView}>
              <CustomDrawerButton
                title={`About Us`}
                image={
                  'https://cdn-icons-png.flaticon.com/128/5065/5065208.png'
                }
                onPress={() => props.navigation.navigate('AboutUs')}
              />
            </View>
            {/* <View style={style.bodyView}>
              <CustomDrawerButton
                title={`Setting`}
                image={'https://cdn-icons-png.flaticon.com/128/694/694900.png'}
                onPress={() => console.log('aboutus')}
              />
            </View> */}
          </View>
        </ScrollView>
        <View>
          <Text
            style={style.appVersionText}>{`App Version: ${appVersion}`}</Text>
          <View style={style.logoutView}>
            <CustomDrawerButton
              image={'https://cdn-icons-png.flaticon.com/128/4436/4436954.png'}
              onPress={() => onLogout()}
              title="SIGN OUT"
              titleStye={{
                color: R.colors.redColor,
                fontWeight: '800',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(Menu);
