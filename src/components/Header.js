import * as React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import R from '../res/R';

const Header = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: R.fontSize.Size50,
        alignItems: 'center',
        paddingHorizontal: R.fontSize.Size2,
        borderBottomWidth: 2,
        borderColor: R.colors.appColor,
      }}>
      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          {
            height: R.fontSize.Size40,
            width: R.fontSize.Size40,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
            marginHorizontal:R.fontSize.Size10
          },
        ]}>
        <Image
          source={props.leftSource}
          style={{height: R.fontSize.Size40, width: R.fontSize.Size40}}
          resizeMode={'contain'}
        />
      </Pressable>
      <View
        style={{
          flex: 1,
          marginHorizontal: R.fontSize.Size5,
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: props.title_justifyContent,
          marginRight: props.title_marginRight,
        }}>
        {props.headIcon}
        <Text
          style={{
            color: R.colors.secAppColor,
            fontSize: R.fontSize.Size18,
            fontWeight: '700',
          }}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
