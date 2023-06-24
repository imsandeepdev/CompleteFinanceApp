import * as React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import R from '../res/R';

const AppCardPress = props => {
  return (
    <View
      style={{
        flex: props.flex,
        paddingBottom: R.fontSize.Size4,
        paddingRight: R.fontSize.Size4,
        paddingLeft: R.fontSize.Size2,
        borderRadius: R.fontSize.Size5,
        marginBottom: props.marginBottom
          ? props.marginBottom
          : R.fontSize.Size14,
      }}>
      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          {
            marginHorizontal: props.marginHorizontal ?? 0,
            flexDirection: 'row',
            paddingHorizontal: R.fontSize.Size15,
            opacity: pressed ? 0.5 : 1,
            height: R.fontSize.Size45,
            backgroundColor: R.colors.white,
            borderRadius: R.fontSize.Size5,
            alignItems: 'center',
            borderWidth: 1.3,
            borderColor: R.colors.darkGreenColor,
            borderStyle: props.borderStyle,
          },
        ]}>
        {props.leftIcon && (
          <View>
            <Image
              source={props.leftIcon}
              style={{
                height: props.LeftIconheight ?? R.fontSize.Size20,
                width: props.LeftIconwidth ?? R.fontSize.Size20,
              }}
              resizeMode={'contain'}
            />
          </View>
        )}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: props.fontSize ?? R.fontSize.Size14,
              color: props.TextColor ?? R.colors.secAppColor,
              fontWeight: props.fontWeight ?? '500',
            }}>
            {props.title}
          </Text>
        </View>
        <View>
          <Image
            source={props.rightIcon}
            style={{
              height: props.Iconheight ?? R.fontSize.Size12,
              width: props.Iconwidth ?? R.fontSize.Size12,
            }}
            resizeMode={'contain'}
          />
        </View>
      </Pressable>
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
      {props.selectedDoc && (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}>
          {props.selectedDoc.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: R.fontSize.Size70,
                  width: R.fontSize.Size90,
                  marginTop: R.fontSize.Size2,
                  borderRadius: R.fontSize.Size4,
                  overflow: 'hidden',
                  marginHorizontal: R.fontSize.Size5,
                  borderWidth: 1,
                }}>
                <Image
                  source={{uri: item}}
                  style={{
                    height: '100%',
                    width: '100%',
                  }}
                  resizeMode={'cover'}
                />
                <View
                  style={{
                    position: 'absolute',
                    top: R.fontSize.Size2,
                    right: R.fontSize.Size2,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Pressable
                    onPress={()=>props.handleRemove(index)}
                    style={{
                      height: R.fontSize.Size18,
                      width: R.fontSize.Size18,
                      borderWidth: 1,
                      backgroundColor: R.colors.lightWhite,
                      padding: R.fontSize.Size2,
                    }}>
                    <Image
                      source={R.images.cancelIcon}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                      resizeMode={'contain'}
                    />
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default AppCardPress;
