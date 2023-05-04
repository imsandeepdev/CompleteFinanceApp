import * as React from 'react';
import {View, Pressable, Image, Text} from 'react-native';
import R from '../res/R';

const AppButton = props => {
  return (
    <View
      style={{
        borderRadius: R.fontSize.Size8,
        backgroundColor: props.backgroundColor ?? R.colors.appColor,
        marginHorizontal: props.marginHorizontal ?? R.fontSize.Size20,
        paddingHorizontal: props.paddingHorizontal,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        marginTop: props.marginTop
      }}>
      <Pressable
        disabled={props.disabled}
        onPress={props.onPress}
        style={({pressed}) => [
          {
            height: props.buttonHeight ?? R.fontSize.Size50,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <Text
          style={{
            
            fontSize: R.fontSize.Size18,
            color: props.textColor ?? R.colors.secAppColor,
            fontWeight: '700',
          }}>
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
};
export default AppButton;
