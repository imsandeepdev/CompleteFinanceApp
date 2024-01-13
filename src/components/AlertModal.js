import * as React from 'react';
import {View, Text, Modal, StyleSheet, ActivityIndicator} from 'react-native';
import R from '../res/R';
import AppButton from './AppButton';

const AlertModal = props => {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          {props.heading && (
            <View style={[styles.headingView, props.headingViewStyle]}>
              <Text style={styles.headingText}>{props.heading}</Text>
            </View>
          )}
          <View style={styles.bodyMainView}>
            {props.topTitle && (
              <Text style={[styles.topTitleStyle, props.topTitleStyle]}>
                {props.topTitle}
              </Text>
            )}
            <View style={styles.alartView}>
              {props.title && (
                <Text style={[styles.otpTitle, props.titleStyle]}>
                  {props.title}
                </Text>
              )}
              {props.activityIndicator && (
                <View>
                  <ActivityIndicator
                    size="large"
                    color={props.loaderColor ?? R.colors.appColor}
                  />
                </View>
              )}
            </View>

            {props.onPress && (
              <View style={{marginVertical: R.fontSize.Size6}}>
                <AppButton
                  onPress={props.onPress}
                  marginHorizontal={R.fontSize.Size100}
                  title={props.buttonTitle ? props.buttonTitle : 'OK'}
                  buttonHeight={R.fontSize.Size40}
                  titleFontSize={R.fontSize.Size16}
                  backgroundColor={props.buttonBackGroundColor}
                  borderWidth={1}
                  //   borderColor={R.colors.appColor}
                />
              </View>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AlertModal;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'center',
  },
  alartView: {
    marginVertical: R.fontSize.Size5,
    minHeight: R.fontSize.Size90,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: R.fontSize.Size15,
  },
  modalView: {
    // height: 200,
    backgroundColor: R.colors.lightWhite,
    marginHorizontal: R.fontSize.Size20,
    borderRadius: R.fontSize.Size8,
    borderWidth: 2,
    borderColor: R.colors.placeHolderColor,
  },
  texInputView: {
    marginHorizontal: R.fontSize.Size8,
    height: R.fontSize.Size50,
    width: R.fontSize.Size50,
    borderRadius: R.fontSize.Size8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: R.colors.appColor,
  },
  textInputStyle: {
    textAlign: 'center',
    fontSize: R.fontSize.Size14,
    height: R.fontSize.Size50,
    width: R.fontSize.Size50,
    borderRadius: R.fontSize.Size8,
    color: R.colors.darkTextColor,
    paddingVertical: R.fontSize.Size2,
    fontWeight: '500',
  },
  otpTitle: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size15,
    color: R.colors.secAppColor,
    fontWeight: '500',
    textAlign: 'center',
  },
  topTitleStyle: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.lightBlack,
    fontWeight: '700',
    textAlign: 'center',
  },
  headingView: {
    backgroundColor: R.colors.appColor,
    padding: R.fontSize.Size8,
    paddingVertical: R.fontSize.Size12,
    borderTopLeftRadius: R.fontSize.Size6,
    borderTopRightRadius: R.fontSize.Size6,
  },
  headingText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.white,
  },
  bodyMainView: {
    padding: R.fontSize.Size8,
    paddingVertical: R.fontSize.Size10,
  },
});
