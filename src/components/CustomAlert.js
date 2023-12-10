import * as React from 'react';
import {View, Text, Modal, StyleSheet, Image} from 'react-native';
import R from '../res/R';
import AppButton from './AppButton';

const CustomAlert = props => {
  let modalColor = props.modalColor ? props.modalColor : R.colors.appColor;
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          <View style={styles.alartView}>
            {props.topIcon && (
              <Image
                source={props.topIcon}
                style={{height: R.fontSize.Size60, width: R.fontSize.Size60}}
                resizeMode={'contain'}
              />
            )}
            <Text style={[styles.titleText, {color: modalColor}]}>
              {props.title}
            </Text>
            <Text style={[styles.subTitleText]}>{props.subTitle}</Text>
          </View>

          <View
            style={{
              backgroundColor: modalColor,
              paddingVertical: R.fontSize.Size20,
            }}>
            <AppButton
              onPress={props.onPress}
              marginHorizontal={R.fontSize.Size100}
              backgroundColor={modalColor}
              title={'OK'}
              buttonHeight={R.fontSize.Size40}
              titleFontSize={R.fontSize.Size16}
              //   backgroundColor={R.colors.darkBlueColor}
              borderWidth={1}
              borderColor={R.colors.lightWhite}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'center',
  },
  alartView: {
    minHeight: R.fontSize.Size90,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: R.fontSize.Size20,
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
  titleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size18,
    color: R.colors.appColor,
    fontWeight: '700',
    textAlign: 'center',
  },
  subTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    color: R.colors.secAppColor,
    fontWeight: '500',
    textAlign: 'center',
  },
});
