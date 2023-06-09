import * as React from 'react';
import {Modal, View, StyleSheet, Text} from 'react-native';
import R from '../res/R';
import AppButton from './AppButton';

const GalleryModal = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View style={style.mainModalView}>
        <View style={style.modalView}>
          <View style={style.modelBodyView}>
            <Text style={style.titleText}>{props.modelTitle}</Text>
            <View style={style.modalContentView}>
              <View style={style.modelButtonView}>
                <AppButton
                  onPress={props.galleryButton}
                  buttonHeight={R.fontSize.Size45}
                  title={props.galleryText}
                  marginVertical={R.fontSize.Size2}
                  titleFontSize={R.fontSize.Size16}
                />
              </View>
              <View style={style.modelButtonView}>
                <AppButton
                  onPress={props.cameraButton}
                  buttonHeight={R.fontSize.Size45}
                  title={props.cameraText}
                  marginVertical={R.fontSize.Size2}
                  titleFontSize={R.fontSize.Size16}
                />
              </View>
            </View>
            <View>
              <AppButton
                onPress={props.cancelButton}
                buttonHeight={R.fontSize.Size45}
                title={props.cancelText}
                borderWidth={1}
                borderColor={R.colors.appColor}
                backgroundColor={R.colors.white}
                color={R.colors.appColor}
                marginVertical={R.fontSize.Size2}
                titleFontSize={R.fontSize.Size16}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GalleryModal;

const style = StyleSheet.create({
  mainModalView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: R.colors.white,
    height: R.fontSize.Size200,
  },
  modelBodyView: {
    marginHorizontal: R.fontSize.Size20,
    marginVertical: R.fontSize.Size16,
  },
  titleText: {
    color: R.colors.secAppColor,
    fontWeight: '500',
    textAlign: 'center',
  },
  modalContentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: R.fontSize.Size14,
  },
  modelButtonView: {
    flex: 1,
  },
});
