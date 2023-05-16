import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import R from '../res/R';

const CustomTextInput = props => {
  return (
    <View
      style={{
        overflow: 'hidden',
        paddingBottom: R.fontSize.Size4,
        paddingRight: R.fontSize.Size4,
        paddingLeft: R.fontSize.Size2,
        borderRadius: R.fontSize.Size5,
      }}>
      <View
        style={{
          height: R.fontSize.Size50,
          flexDirection: 'row',
          shadowColor: '#000',
          backgroundColor: R.colors.white,
          borderRadius: R.fontSize.Size5,
          alignItems: 'center',
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.2,
          shadowRadius: 2.84,
          elevation: 5,
          marginBottom: props.marginBottom ?? 0,
        }}>
        <View
          style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
              marginHorizontal:R.fontSize.Size4
            }}>
          <Image
            source={props.leftIcon}
            style={{
              height: R.fontSize.Size24,
              width: R.fontSize.Size24,
            }}
            resizeMode={'contain'}
          />
          <View
            style={{
            marginLeft:R.fontSize.Size4,
              width: 1,
              height: R.fontSize.Size25,
              backgroundColor: R.colors.appColor,
            }}
          />
        </View>

        <View
          style={{
            paddingLeft: R.fontSize.Size10,
            flexDirection: 'row',
            flex: 1,
          }}>
          <View style={{flex: 1}}>
            <TextInput
              style={{
                height: '100%',
                fontSize: R.fontSize.Size15,
                letterSpacing: 1,
                fontWeight: '700',
                color: R.colors.placeHolderColor,
              }}
              placeholder={props.placeholder}
              placeholderTextColor={R.colors.placeholderTextColor}
              maxLength={props.maxLength}
              keyboardType={props.keyboardType ? props.keyboardType : 'default'}
              value={props.value}
              onChangeText={props.onChangeText}
              onFocus={props.onFocus}
              secureTextEntry={props.secureTextEntry}
            />
          </View>
          {
          props.rightIcon &&
            <Pressable
            onPress={props.rightOnPress}
            style={({pressed})=>[
              {
                opacity: pressed ?0.5:1,
                paddingHorizontal:R.fontSize.Size6,
                alignItems:'center',
                justifyContent:'center',
              }
            ]}
            >
              <Image
                source={props.rightIcon}
                style={{height: R.fontSize.Size20, width: R.fontSize.Size20}}
                resizeMode={'contain'}
              />
            </Pressable>
          }
        </View>
      </View>
    </View>
  );
};

export default CustomTextInput;
