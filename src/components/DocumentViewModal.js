import * as React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Pressable,
  TouchableWithoutFeedback,
} from 'react-native';
import R from '../res/R';

const screenHeight = Dimensions.get('screen').height;

const DocumentViewModal = props => {
  return (
    <Modal
      transparent={true}
      visible={props.visible}
      onRequestClose={props.onRequestClose}>
      <View style={style.mainModalView}>
        <TouchableWithoutFeedback onPress={props.feedBackOnPress}>
          <View style={style.flexView} />
        </TouchableWithoutFeedback>
        <View style={style.modalView}>
          <View style={style.topHeaderView}>
            <View style={style.topHeaderLine} />
          </View>
          <View style={style.cancelIconView}>
            <Pressable
              onPress={props.onPressClose}
              style={style.cancelPressable}>
              <Image
                source={R.images.cancelIcon}
                style={style.cancelIcon}
                resizeMode={'contain'}
              />
            </Pressable>
          </View>
          <View style={style.modelBodyView}>
            <Image
              source={{uri: props.sourceURL}}
              resizeMode={'contain'}
              style={style.bodyIcon}
            />
          </View>

          <View style={style.bottomButton}>
            <Pressable
              onPress={props.onPressClose}
              style={style.bottomButtonView}>
              <Text style={style.closeText}>{'Close'}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DocumentViewModal;

const style = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  mainModalView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: R.colors.white,
    height: screenHeight / 2.2,
    borderTopRightRadius: R.fontSize.Size10,
    borderTopLeftRadius: R.fontSize.Size10,
  },
  modelBodyView: {
    marginHorizontal: R.fontSize.Size20,
    marginVertical: R.fontSize.Size10,
    flex: 1,
    borderWidth: 1,
    borderRadius: R.fontSize.Size8,
    borderColor: R.colors.placeholderTextColor,
  },
  topHeaderView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: R.fontSize.Size10,
    flexDirection: 'row',
  },
  topHeaderLine: {
    width: R.fontSize.Size70,
    height: R.fontSize.Size8,
    backgroundColor: R.colors.placeholderTextColor,
    borderRadius: R.fontSize.Size20,
  },
  topBodyView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: R.fontSize.Size10,
    borderColor: R.colors.lightWhite,
  },
  titleText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.black,
    fontWeight: '600',
  },
  modalContentView: {
    paddingVertical: R.fontSize.Size10,
    borderBottomWidth: 1,
    borderColor: R.colors.lightWhite,
    flex: 1,
    justifyContent: 'space-between',
  },
  modelButtonView: {
    flex: 1,
  },
  hourImage: {
    height: R.fontSize.Size14,
    width: R.fontSize.Size14,
  },
  hourText: {
    fontWeight: '600',
    fontSize: R.fontSize.Size12,
    color: R.colors.placeHolderColor,
    marginHorizontal: R.fontSize.Size6,
  },
  dayView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: R.fontSize.Size4,
  },
  dayTitleText: {
    fontSize: R.fontSize.Size14,
    fontWeight: '500',
    color: R.colors.black,
  },
  topDirectionMainView: {
    flexDirection: 'row',
    marginVertical: R.fontSize.Size5,
    flex: 1,
    alignItems: 'center',
  },
  topDirectionView: {
    padding: R.fontSize.Size5,
    paddingHorizontal: R.fontSize.Size14,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size20,
  },
  directionText: {
    fontSize: R.fontSize.Size12,
    fontWeight: '500',
    color: R.colors.black,
  },
  directionIconView: {
    padding: R.fontSize.Size5,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size20,
    marginHorizontal: R.fontSize.Size12,
  },
  directionIcon: {
    height: R.fontSize.Size15,
    width: R.fontSize.Size15,
    transform: [{rotate: '120deg'}],
  },
  directionProfileView: {
    height: R.fontSize.Size60,
    width: R.fontSize.Size60,
    borderWidth: 1,
    borderRadius: R.fontSize.Size30,
    borderColor: R.colors.lightWhite,
  },
  bottomButtonView: {
    height: R.fontSize.Size40,
    borderRadius: R.fontSize.Size10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
  },
  bottomButton: {
    marginVertical: R.fontSize.Size10,
    marginHorizontal: R.fontSize.Size150,
    marginBottom: R.fontSize.Size20,
  },
  cancelIconView: {
    position: 'absolute',
    top: R.fontSize.Size10,
    right: R.fontSize.Size10,
  },
  cancelPressable: {
    padding: 2,
    borderWidth: 1,
    borderColor: R.colors.placeHolderColor,
  },
  cancelIcon: {
    height: R.fontSize.Size12,
    width: R.fontSize.Size12,
  },
  bodyIcon: {
    height: '100%',
    width: '100%',
  },
  closeText: {
    fontSize: R.fontSize.Size14,
    fontWeight: '600',
    color: R.colors.textPriColor,
  },
});
