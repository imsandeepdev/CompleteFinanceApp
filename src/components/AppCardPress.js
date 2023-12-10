/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {View, Pressable, Text, Image, StyleSheet} from 'react-native';
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
        disabled={props.disabled}
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
        <View style={styles.titleView}>
          <Text
            style={{
              fontSize: props.fontSize ?? R.fontSize.Size14,
              color: props.TextColor ?? R.colors.secAppColor,
              fontWeight: props.fontWeight ?? '500',
            }}>
            {props.title}
          </Text>
        </View>
        {props.rightIcon && (
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
        )}
      </Pressable>
      <View
        style={[
          {paddingHorizontal: props.headTitle ? R.fontSize.Size5 : 0},
          styles.viewHeadTitle,
        ]}>
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
        <View style={styles.wrapView}>
          {props.selectedDoc.map((item, index) => {
            return (
              <View key={index} style={styles.mapView}>
                <Image
                  source={{uri: item}}
                  style={styles.cancelIcon}
                  resizeMode={'cover'}
                />
                <View style={styles.viewCancel}>
                  <Pressable
                    onPress={() => props.handleRemove(index)}
                    style={styles.pressCancel}>
                    <Image
                      source={R.images.cancelIcon}
                      style={styles.cancelIcon}
                      resizeMode={'contain'}
                    />
                  </Pressable>
                </View>
              </View>
            );
          })}
        </View>
      )}
      {props.messageText && (
        <Text style={styles.messageText}>{props.messageText}</Text>
      )}
    </View>
  );
};

export default AppCardPress;

const styles = StyleSheet.create({
  viewHeadTitle: {
    position: 'absolute',
    top: -R.fontSize.Size10,
    left: R.fontSize.Size10,
    backgroundColor: R.colors.white,
  },
  titleView: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mapView: {
    height: R.fontSize.Size70,
    width: R.fontSize.Size90,
    marginTop: R.fontSize.Size2,
    borderRadius: R.fontSize.Size4,
    overflow: 'hidden',
    marginHorizontal: R.fontSize.Size5,
    borderWidth: 1,
  },
  viewCancel: {
    position: 'absolute',
    top: R.fontSize.Size2,
    right: R.fontSize.Size2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pressCancel: {
    height: R.fontSize.Size18,
    width: R.fontSize.Size18,
    borderWidth: 1,
    backgroundColor: R.colors.lightWhite,
    padding: R.fontSize.Size2,
  },
  cancelIcon: {
    height: '100%',
    width: '100%',
  },
  messageText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.lightBlack,
    marginVertical: R.fontSize.Size2,
  },
});
