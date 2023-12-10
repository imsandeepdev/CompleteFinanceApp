import * as React from 'react';
import {View, Text, Modal, StyleSheet, Pressable, Image} from 'react-native';
import R from '../res/R';

import {Calendar} from 'react-native-calendars';

const AppCalender = props => {
  return (
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      transparent={true}>
      <View style={styles.mainView}>
        <View style={styles.modalView}>
          <View
            style={{
              alignItems: 'flex-end',
            }}>
            <Pressable
              onPress={props.cancelOnPress}
              style={({pressed}) => [
                {
                  borderWidth: 1,
                  padding: R.fontSize.Size4,
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              <Image
                source={R.images.cancelIcon}
                resizeMode={'contain'}
                style={{
                  height: R.fontSize.Size14,
                  width: R.fontSize.Size14,
                }}
              />
            </Pressable>
          </View>
          <View>
            <Calendar
              onDayPress={props.onDayPress}
              onDayLongPress={day => console.log('onDayLongPress', day)}
              onMonthChange={date => console.log('onMonthChange', date)}
              onPressArrowLeft={goToPreviousMonth => {
                console.log('onPressArrowLeft');
                goToPreviousMonth();
              }}
              onPressArrowRight={goToNextMonth => {
                console.log('onPressArrowRight');
                goToNextMonth();
              }}
              minDate={props.minDate}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AppCalender;

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
    // height: R.fontSize.Size500,
    backgroundColor: R.colors.white,
    marginHorizontal: R.fontSize.Size20,
    borderRadius: R.fontSize.Size8,
    padding: R.fontSize.Size8,
    borderWidth: 2,
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
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size15,
    color: R.colors.secAppColor,
    fontWeight: '500',
    textAlign: 'center',
  },
});
