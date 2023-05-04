import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions,SafeAreaView} from 'react-native';
import {
  AppButton,
  CustomCardPress,
  CustomTextInput,
  Header,
  ListViewModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
import Toast from 'react-native-simple-toast';

const HomeScreen = props => {
 

  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={()=> props.navigation.navigate('LoginScreen')}
          leftSource={R.images.menuIcon}
          title={'Complete Finance Solution'}
        />

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Work on progress</Text>
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default HomeScreen;
