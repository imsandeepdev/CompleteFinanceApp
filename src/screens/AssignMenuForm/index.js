import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import {Header, StoryScreen} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;

const AssignMenuForm = props => {
  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Assign Menu'}
        />

        <ScrollView>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{'Work On Progress'}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default AssignMenuForm;
