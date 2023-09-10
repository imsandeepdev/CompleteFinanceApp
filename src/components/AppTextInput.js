/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Pressable, Text, Image, TextInput} from 'react-native';
import R from '../res/R';

const AppTextInput = React.forwardRef((props, ref) => {
  return (
    <View
      style={{
        paddingBottom: R.fontSize.Size4,
        paddingRight: R.fontSize.Size4,
        paddingLeft: R.fontSize.Size2,
        borderRadius: R.fontSize.Size5,
        marginBottom: props.marginBottom
          ? props.marginBottom
          : R.fontSize.Size14,
      }}>
      <View
        style={{
          height: props.height ? props.height : R.fontSize.Size45,
          backgroundColor: R.colors.white,
          borderRadius: R.fontSize.Size5,
          alignItems: 'center',
          borderWidth: 1.3,
          borderColor: R.colors.darkGreenColor,
        }}>
        <View
          style={{
            paddingLeft: R.fontSize.Size10,
            flexDirection: 'row',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <TextInput
              ref={ref}
              style={{
                height: '100%',
                fontSize: R.fontSize.Size14,
                letterSpacing: 1,
                fontWeight: '500',
                color: R.colors.textPriColor,
              }}
              placeholder={props.placeholder}
              placeholderTextColor={R.colors.placeholderTextColor}
              maxLength={props.maxLength}
              keyboardType={props.keyboardType ? props.keyboardType : 'default'}
              value={props.value}
              onChangeText={props.onChangeText}
              onFocus={props.onFocus}
              secureTextEntry={props.secureTextEntry}
              returnKeyType={props.returnKeyType}
              onSubmitEditing={props.onSubmitEditing}
              multiline={props.multiline}
              onPressOut={props.onPressOut}
              onBlur={props.onBlur}
            />
            {props.messageText && (
              <Text
                style={{
                  fontFamily: R.fonts.regular,
                  fontSize: R.fontSize.Size12,
                  color: R.colors.lightBlack,
                  marginVertical: R.fontSize.Size2,
                }}>
                {props.messageText}
              </Text>
            )}
          </View>
          {props.rightIcon && (
            <Pressable
              onPress={props.rightOnPress}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  paddingHorizontal: R.fontSize.Size6,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Image
                source={props.rightIcon}
                style={{height: R.fontSize.Size20, width: R.fontSize.Size20}}
                resizeMode={'contain'}
              />
            </Pressable>
          )}
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          top: -R.fontSize.Size10,
          left: R.fontSize.Size10,
          paddingHorizontal: props.headTitle ? R.fontSize.Size5 : 0,
          backgroundColor: R.colors.white,
        }}>
        <Text
          style={{
            fontFamily: R.fonts.regular,
            fontSize: R.fontSize.Size12,
            fontWeight: '700',
            color: props.headTitleColor
              ? props.headTitleColor
              : R.colors.textPriColor,
          }}>
          {props.headTitle}
        </Text>
      </View>
    </View>
  );
});

export default AppTextInput;
