import * as React from 'react';
import {useState, useEffect} from 'react';
import {Pressable, View, Text, Image, ScrollView, Alert} from 'react-native';
import R from '../../res/R';
import style from './style';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserProfileRequest} from '../../actions/profile.action';
import LinearGradient from 'react-native-linear-gradient';
import AppContent from '../../utils/AppContent';

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
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      screenFocus();
    });
    return unsubscribe;
  }, [props.navigation]);

  const screenFocus = async () => {
    let user_Data = await AsyncStorage.getItem('userData');
    let tempUser = JSON.parse(user_Data);
    handleProfile(Number(tempUser.EmpID));
  };

  const handleProfile = userid => {
    dispatch(
      UserProfileRequest(userid, response => {
        console.log('user Profile res==>', response);
        setUserDetail(response.entity[0]);
      }),
    );
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
                style={style.subtextStyle}>{`${userDetail?.ContactNo}`}</Text>
            </View>
          </View>
        </LinearGradient>
        <ScrollView contentContainerStyle={style.scrollContainer}>
          {AppContent.LoanCardList.map((item, index) => {
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
        </ScrollView>
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
  );
};

export default Menu;
