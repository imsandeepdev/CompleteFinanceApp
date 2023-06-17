import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import R from '../../res/R';
import style from './style';
import {useDispatch} from 'react-redux';
import { AppButton } from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserProfileRequest } from '../../actions/profile.action';
import { GetMenuListRequest } from '../../actions/role.action';


const CustomDrawerButton = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: R.fontSize.Size14,
      }}>
      {props.image && (
        <Image
          source={props.image}
          resizeMode={'cover'}
          style={{
            height: R.fontSize.Size20,
            width: R.fontSize.Size20,
          }}
        />
      )}
      <Pressable onPress={props.onPress} style={style.pressableStyle}>
        <Text style={style.tabNameStyle}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const Menu = props => {

    const dispatch = useDispatch()
    const [userDetail, setUserDetail] = useState({})
    const [menuList ,setMenuList] = useState([])

    useEffect(()=>{
        const unsubscribe = props.navigation.addListener('focus', () => {
          screenFocus();
        });
        return unsubscribe;
    },[props.navigation])

    const screenFocus = async() => {
      let user_id = await AsyncStorage.getItem('userid')
      handleProfile(user_id)
   
    }



    const handleProfile = (userid) => {
      dispatch(UserProfileRequest(userid, response =>{
        console.log("user Profile res==>",response)
        setUserDetail(response.entity[0]);
      }))
    }

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
        props.navigation.replace('LoginScreen')
     }

  return (
    <View style={style.safeAreaStyle}>
      <View style={style.mainView}>
        <Pressable>
          <View style={style.userDataView}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg',
              }}
              style={style.imageStyle}
              resizeMode={'cover'}
            />
            <View>
              <Text style={style.textStyle}>{`${userDetail.StaffName}`}</Text>
              <Text
                style={style.subtextStyle}>{`${userDetail.ContactNo}`}</Text>
            </View>
          </View>
        </Pressable>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <CustomDrawerButton
            title={'Dashboard'}
            image={R.images.dashboardIcon}
            onPress={() => props.navigation.navigate('HomeScreen')}
          />
          <CustomDrawerButton
            title={'Profile'}
            image={R.images.aboutIcon}
            onPress={() => props.navigation.navigate('LoanProposal')}
          />
          <CustomDrawerButton
            title={'About us'}
            image={R.images.aboutIcon}
            onPress={() => console.log('onpress')}
          />
          <CustomDrawerButton
            title={'Setting'}
            image={R.images.settingIcon}
            onPress={() => console.log('onpress')}
          />
        </ScrollView>
        <View
          style={{
            paddingVertical: R.fontSize.Size10,
            borderTopWidth: 1,
            borderColor: R.colors.lightWhite,
          }}>
          <CustomDrawerButton onPress={() => onLogout()} title="Sign Out" />
        </View>
      </View>
    </View>
  );
};

export default Menu;
