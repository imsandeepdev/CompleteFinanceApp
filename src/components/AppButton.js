import * as React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import R from '../res/R';

const AppButton = props => {
  return (
    <View
      style={{
        flex: props.flex,
        borderRadius: props.buttonBorderRadius
          ? props.buttonBorderRadius
          : R.fontSize.Size8,
        backgroundColor: props.backgroundColor ?? R.colors.appColor,
        marginHorizontal: props.marginHorizontal ?? R.fontSize.Size20,
        paddingHorizontal: props.paddingHorizontal,
        borderWidth: props.borderWidth,
        borderColor: props.borderColor,
        marginTop: props.marginTop,
        marginVertical: props.marginVertical,
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
      </Pressable>
    </View>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  titleText: {
    fontWeight: '700',
  },
});
