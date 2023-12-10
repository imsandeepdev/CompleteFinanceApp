/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  Pressable,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native';
import R from '../res/R';
const screenWidth = Dimensions.get('screen').width;

interface SwiperButtonType {
  buttonStatus: boolean;
  onPressButton?: () => void;
  buttonWidth?: number;
  buttonHeight?: number;
  activeBackgroundColor?: string;
  disableBackgroundColor?: string;
  activeTitleText: string;
  disableTitleText: string;
}

const SwiperButtonComp = ({
  buttonStatus,
  onPressButton,
  buttonWidth = screenWidth,
  buttonHeight = 45,
  activeBackgroundColor = R.colors.darkGreenColor,
  disableBackgroundColor = R.colors.placeholderTextColor,
  activeTitleText,
  disableTitleText,
}: SwiperButtonType) => {
  const animatedValue = new Animated.Value(buttonStatus ? 1 : 0);

  const toggleSwitch = () => {
    const toValue = buttonStatus ? 0 : 1;
    Animated.timing(animatedValue, {
      toValue,
      duration: 500,
      useNativeDriver: true,
    }).start(onPressButton);
  };

  const modalTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [buttonWidth / 2, 0],
  });

  const modalTranslateTextX = animatedValue.interpolate({
    inputRange: [-buttonWidth / 2, 0],
    outputRange: [0, 1],
  });

  return (
    <View>
      <View
        style={{
          width: buttonWidth,
          height: buttonHeight,
          justifyContent: 'center',
          backgroundColor: disableBackgroundColor,
        }}>
        <Animated.View
          style={{
            width: buttonWidth / 2,
            height: buttonHeight,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: activeBackgroundColor,
            transform: [{translateX: modalTranslateX}],
          }}>
          <Text style={Style.activeText}>{activeTitleText}</Text>
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            left: !buttonStatus ? 0 : buttonWidth / 2,
            right: !buttonStatus ? buttonWidth / 2 : 0,
            bottom: 0,
            transform: [{translateX: modalTranslateTextX}],
          }}>
          <Pressable
            onPress={toggleSwitch}
            style={({pressed}) => [
              {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: pressed ? 0.5 : 1,
              },
            ]}>
            <Text style={Style.disAbleText}>{disableTitleText}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

export {SwiperButtonComp};

const Style = StyleSheet.create({
  mainView: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleTextView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  titleText: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  activeText: {
    color: R.colors.lightWhite,
    fontWeight: '700',
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size16,
  },
  disAbleText: {
    color: R.colors.lightBlack,
    fontWeight: '700',
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size16,
  },
});
