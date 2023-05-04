import * as React from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import R from '../res/R';

const CustomCardPress = props => {
  return (
    <View
      style={{
        overflow: 'hidden',
        paddingBottom: R.fontSize.Size4,
        paddingRight: R.fontSize.Size4,
        paddingLeft: R.fontSize.Size2,
        borderRadius: R.fontSize.Size5,
      }}>
      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          {
            marginHorizontal: props.marginHorizontal ?? 0,
            height: props.cardHeight ?? R.fontSize.Size50,
            flexDirection: 'row',
            alignItems: 'center',
            borderRadius: R.fontSize.Size5,
            shadowColor: '#000',
            backgroundColor: props.backgroundColor ?? R.colors.white,
            borderRadius: R.fontSize.Size5,
            alignItems: 'center',
            shadowOffset: {
              width: 2,
              height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 2.84,
            elevation: 5,
            paddingHorizontal: R.fontSize.Size15,
            opacity: pressed ? 0.5 : 1,
            marginBottom: props.marginBottom ?? R.fontSize.Size20,
          },
        ]}>
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
        <View style={{flex: 1, justifyContent: 'center',marginHorizontal:R.fontSize.Size8}}>
          <Text
            style={{
              fontSize: props.fontSize ?? R.fontSize.Size15,
              color: props.TextColor ?? R.colors.secAppColor,
              fontWeight: props.fontWeight ?? '700',
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
    </View>
  );
};

export default CustomCardPress;
