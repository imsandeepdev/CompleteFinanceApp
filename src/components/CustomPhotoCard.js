import * as React from 'react';
import {View, Pressable, Image, Text} from 'react-native';
import R from '../res/R';

const CustomPhotoCard = props => {
  return (
    <View
      style={{
        paddingBottom: props.paddingBottom
          ? props.paddingBottom
          : R.fontSize.Size18,
        flex: props.flex,
        marginRight: props.marginRight,
        marginLeft: props.marginLeft,
      }}>
      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          {
            opacity: pressed ? 0.5 : 1,
            height: props.cardHeight ? props.cardHeight : R.fontSize.Size55,
            width: props.cardWidth ? props.cardWidth : R.fontSize.Size55,
            borderRadius: R.fontSize.Size8,
            backgroundColor: R.colors.storyBgColor,
            borderWidth: 0.7,
            borderColor: R.colors.placeHolderColor,
            marginHorizontal: props.marginHorizontal,
            marginTop: props.marginTop,
            paddingHorizontal: R.fontSize.Size12,
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          },
        ]}>
        {props.selectedPhoto != null ? (
          <View>
            <Image
              source={{uri: props.selectedPhoto}}
              resizeMode={'cover'}
              style={{
                height: props.cardHeight ? props.cardHeight : R.fontSize.Size55,
                width: props.cardWidth ? props.cardWidth : R.fontSize.Size55,
              }}
            />
          </View>
        ) : (
          <View>
            <View
              style={{
                alignItems: 'center',
              }}>
              <Image
                source={props.icon}
                resizeMode={'contain'}
                style={{height: R.fontSize.Size35, width: R.fontSize.Size35}}
              />
            </View>
            <Text
              style={{
                marginTop: props.TextmarginTop
                  ? props.TextmarginTop
                  : R.fontSize.Size10,
                fontFamily: R.fonts.regular,
                fontWeight: '400',
                color: R.colors.placeHolderColor,
                textAlign: 'center',
                fontSize: R.fontSize.Size14,
              }}>
              {props.title}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
};

export default CustomPhotoCard;
