import * as React from 'react';
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
            height: R.fontSize.Size22,
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
              <Text style={style.textStyle}>{'Shyam Yadav'}</Text>
              <Text style={style.subtextStyle}>{'Admin'}</Text>
            </View>
          </View>
        </Pressable>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <CustomDrawerButton
            title={'Dashboard'}
            image={R.images.userIcon}
            onPress={() => props.navigation.navigate('HomeScreen')}
          />
          <CustomDrawerButton
            title={'Profile'}
            image={R.images.userIcon}
            onPress={() => props.navigation.navigate('HomeScreen')}
          />
          <CustomDrawerButton
            title={'About us'}
            image={R.images.userIcon}
            onPress={() => props.navigation.navigate('HomeScreen')}
          />
          <CustomDrawerButton
            title={'Setting'}
            image={R.images.userIcon}
            onPress={() => props.navigation.navigate('HomeScreen')}
          />
        </ScrollView>
        <View
          style={{
            paddingVertical: R.fontSize.Size10,
            borderTopWidth: 1,
            borderColor: R.colors.lightWhite,
          }}>
          {/* <AppButton
            onPress={() => onLogout()}
            title={'Sign Out'}
            backgroundColor={R.colors.black}
            borderWidth={R.fontSize.Size2}
            borderColor={R.colors.appColor}
            textColor={R.colors.appColor}
            marginTop={R.fontSize.Size8}
            buttonHeight={R.fontSize.Size40}
            marginHorizontal={R.fontSize.Size40}
          /> */}
          <CustomDrawerButton onPress={() => onLogout()} title="Sign Out" />
        </View>
      </View>
    </View>
  );
};

export default Menu;
