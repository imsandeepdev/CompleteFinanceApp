import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, SafeAreaView, Text, Image, StatusBar} from 'react-native';
import R from '../../res/R';
import style from './style';
import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {FullViewStoryScreen} from '../../components';

const SplashScreen = props => {
  useEffect(() => {
    hideNavigationBar();
    setTimeout(() => {
      props.navigation.replace('LoginScreen');
    }, 4000);
    StatusBar.setBarStyle('dark-content', true);
  }, []);

  return (
    <FullViewStoryScreen>
      <View style={style.mainView}>
        <View style={style.iconStyle}>
          <Image
            source={R.images.appLogo}
            resizeMode={'contain'}
            style={style.appLogoIcon}
          />
          <View>
            <Text style={style.titleText}>{'Complete Finance Solution'}</Text>
          </View>
        </View>
      </View>
    </FullViewStoryScreen>
  );
};

export default SplashScreen;
