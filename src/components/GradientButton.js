/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import R from '../res/R';
import LinearGradient from 'react-native-linear-gradient';

const GradientButton = props => {
  return (
    <View
      style={{
        flex: props.flex,
        borderRadius: props.buttonBorderRadius
          ? props.buttonBorderRadius
          : R.fontSize.Size8,
        marginHorizontal: props.marginHorizontal ?? R.fontSize.Size20,
        paddingHorizontal: props.paddingHorizontal,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        marginTop: props.marginTop,
        marginVertical: props.marginVertical,
        overflow: 'hidden',
      }}>
      <Pressable
        disabled={props.disabled}
        onPress={props.onPress}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <LinearGradient
          colors={[R.colors.darkAppColor, R.colors.appColor]}
          style={{
            height: props.buttonHeight ?? R.fontSize.Size50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={[
              {
                fontSize: props.titleFontSize
                  ? props.titleFontSize
                  : R.fontSize.Size18,
                color: props.textColor ?? R.colors.lightWhite,
              },
              styles.titleText,
            ]}>
            {props.title}
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};
export default GradientButton;

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '700',
  },
});
