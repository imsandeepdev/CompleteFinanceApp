import * as React from 'react';
import {useState, useRef} from 'react';
import {
  View,
  Pressable,
  Text,
  Modal,
  StyleSheet,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import R from '../res/R';
import AppButton from './AppButton';

const OtpModal = props => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [resendButtonDisabledTime, setResendButtonDisabledTime] = useState(45);
  let resendOtpTimerInterval = 1000;
  const [visibleButton, setVisibleButton] = useState(false);

  const handleOtpChange = (val, indexVal) => {
    const newOtp = [...otp];
    newOtp[indexVal] = val;
    setOtp(newOtp);
    console.log('NEW OTP=>', newOtp.join('').length);
    if (val !== '' && indexVal < 3) {
      otpInputRefs[indexVal + 1].current.focus();
    }
    let tempNewOtp = newOtp.join('');
    tempNewOtp.length === 4 ? setVisibleButton(true) : setVisibleButton(false);
  };

  const handleKeyPress = ({nativeEvent: {key: keyValue}}, index) => {
    console.log(keyValue);
    console.log('Index', index);

    if (index !== undefined && index !== 3) {
      if (keyValue === 'Backspace') {
        otpInputRefs[index - 1].current.focus();
      } else {
        otpInputRefs[index + 1].current.focus();
      }
    } else if (index === 3 && keyValue === 'Backspace') {
      otpInputRefs[index - 1].current.focus();
    }
  };

  const handleOnFocus = ({nativeEvent: {key: keyValue}}, index) => {
    if (index !== undefined && otp[index] !== '') {
      const newOtp = [...otp];
      for (let i = index; i <= otp.length - 1; i++) {
        newOtp[i] = '';
      }
      console.log('N==>', newOtp);
      setOtp(newOtp);
      newOtp.join('').length === 4
        ? setVisibleButton(true)
        : setVisibleButton(false);
    }
  };

  const handleOnSubmitOtp = () => {
    props.onPress(otp);
  };

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
              {'Enter OTP code below'}
            </Text>
          </View>
          <View style={styles.viewRow}>
            {otp?.length !== undefined &&
              otp.map((digit, index) => (
                <View key={`otp_${index}`} style={styles.optContainer}>
                  <TextInput
                    value={digit}
                    style={[
                      styles.otpTextInput,
                      // eslint-disable-next-line react-native/no-inline-styles
                      {
                        marginTop:
                          Platform.OS === 'android' ? R.fontSize.Size5 : 0,
                      },
                    ]}
                    maxLength={1}
                    onChangeText={value => {
                      handleOtpChange(value, index);
                    }}
                    ref={otpInputRefs[index]}
                    keyboardType={'numeric'}
                    onKeyPress={e => handleKeyPress(e, index)}
                    onFocus={e => handleOnFocus(e, index)}
                  />
                </View>
              ))}
          </View>

          <View style={{marginTop: R.fontSize.Size20}}>
            <AppButton
              disabled={!visibleButton}
              onPress={() => handleOnSubmitOtp()}
              marginHorizontal={R.fontSize.Size100}
              title={'Register'}
              buttonHeight={R.fontSize.Size45}
              titleFontSize={R.fontSize.Size16}
              backgroundColor={
                visibleButton
                  ? R.colors.appColor
                  : R.colors.placeholderTextColor
              }
              textColor={
                visibleButton ? R.colors.lightWhite : R.colors.placeHolderColor
              }
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
  flexWithCenter: {
    paddingVertical: 20,
    justifyContent: 'center',
  },
  optContainer: {
    marginHorizontal: R.fontSize.Size10,
    width: R.fontSize.Size60,
    borderWidth: 1,
    borderColor: R.colors.lightBlack,
    height: R.fontSize.Size50,
    borderRadius: R.fontSize.Size6,
    backgroundColor: R.colors.lightWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpTextInput: {
    textAlign: 'center',
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.large,
    height: R.fontSize.Size55,
    width: R.fontSize.Size50,
    color: R.colors.darkAppColor,
    fontWeight: '700',
  },
});
