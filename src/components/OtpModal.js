import * as React from 'react';
import {
  View,
  Pressable,
  Text,
  Modal,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import R from '../res/R';
import AppButton from './AppButton';

const OtpModal = props => {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          <View style={styles.pressView}>
            <Pressable
              onPress={props.closeModal}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.5 : 1,
                  borderWidth: 1,
                  padding: R.fontSize.Size5,
                  borderRadius: R.fontSize.Size2,
                  borderColor: R.colors.lightBlack,
                },
              ]}>
              <Image
                source={R.images.cancelIcon}
                style={{
                  height: R.fontSize.Size10,
                  width: R.fontSize.Size10,
                }}
                resizeMode={'contain'}
              />
            </Pressable>
          </View>
          <View
            style={{
              marginVertical: R.fontSize.Size10,
            }}>
            <Text style={styles.otpTitle}>{props.otpTitle}</Text>
            <Text style={[styles.otpTitle, {marginTop: R.fontSize.Size5}]}>
              {`Enter OTP code below`}
            </Text>
          </View>
          <View style={styles.viewRow}>
            {props.mapTextInput.map((textInputRef, index) => (
              <View key={index} style={styles.texInputView}>
                <TextInput
                  value={props.value[index]}
                  style={styles.textInputStyle}
                  maxLength={1}
                  autoFocus={index === 0 ? true : undefined}
                  onChangeText={props.onChangeText[index]}
                  ref={textInputRef}
                  keyboardType={'numeric'}
                  onKeyPress={e => props.onKeyPress(e, index)}
                />
              </View>
            ))}
          </View>

          <View style={{marginVertical: R.fontSize.Size14}}>
            <AppButton
              onPress={props.onPress}
              marginHorizontal={R.fontSize.Size100}
              title={'Register'}
              buttonHeight={R.fontSize.Size45}
              titleFontSize={R.fontSize.Size16}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default OtpModal;

const styles = StyleSheet.create({
  pressView: {
    alignItems: 'flex-end',
    marginHorizontal: R.fontSize.Size10,
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainView: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'center',
  },
  modalView: {
    // height: 200,
    backgroundColor: R.colors.lightWhite,
    marginHorizontal: R.fontSize.Size20,
    borderRadius: R.fontSize.Size8,
    padding: R.fontSize.Size8,
    borderWidth: 1,
    paddingVertical: R.fontSize.Size14,
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
    fontSize: R.fontSize.Size12,
    color: R.colors.secAppColor,
    fontWeight: '500',
    textAlign: 'center',
  },
});
