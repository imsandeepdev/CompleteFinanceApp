import * as React from 'react';
import {
  Modal,
  View,
  Pressable,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import R from '../res/R';
import AppButton from './AppButton';
import {useEffect, useState} from 'react';
const screenHeight = Dimensions.get('screen').height;

const RoleSelectionModal = props => {
  const [disabledConfirmButton, setDisabledConfirmButton] = useState(false);
  const [selectedRole, setSelectedRole] = useState({});
  useEffect(() => {
    handleFilterOnDataList();
  }, [props.dataList]);

  const handleFilterOnDataList = () => {
    let tempFilterList = props.dataList.filter(item => item.selected === true);
    console.log('FILTER LIST UPDared', tempFilterList);
    tempFilterList.length >= 1
      ? (setDisabledConfirmButton(true), setSelectedRole(tempFilterList[0]))
      : setDisabledConfirmButton(false);
  };
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={Styles.modalMainView}>
        <View style={Styles.modalView}>
          <View style={Styles.modalViewReverse}>
            {props.heading && (
              <View style={Styles.headingView}>
                <Text style={Styles.headingText}>{props.heading}</Text>
              </View>
            )}
            <Pressable
              onPress={props.cancelOnPress}
              style={({pressed}) => [
                {
                  borderWidth: 2,
                  borderRadius: R.fontSize.Size4,
                  borderColor: R.colors.appColor,
                  padding: R.fontSize.Size6,
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              <Image
                source={R.images.cancelIcon}
                style={{height: R.fontSize.Size10, width: R.fontSize.Size10}}
                resizeMode={'contain'}
              />
            </Pressable>
          </View>
          <View style={Styles.flexOne}>
            <View style={Styles.flatListFlex}>
              <FlatList
                data={props.dataList}
                numColumns={3}
                keyExtractor={index => index.toString()}
                renderItem={({item, index}) => {
                  let title = item.RoleName;
                  return (
                    <Pressable
                      onPress={() => props.onPress(item)}
                      style={({pressed}) => [
                        {
                          height: R.fontSize.Size110,
                          width: R.fontSize.Size110,
                          borderWidth: 2,
                          borderRadius: R.fontSize.Size5,
                          marginHorizontal: R.fontSize.Size5,
                          borderColor: item.selected
                            ? R.colors.appColor
                            : R.colors.placeholderTextColor,
                          opacity: pressed ? 0.5 : 1,
                          backgroundColor: item.selected
                            ? R.colors.lightAppColor
                            : R.colors.lightWhite,
                        },
                      ]}>
                      <View style={Styles.flatImageView}>
                        <Image
                          source={{
                            uri:
                              index === 0
                                ? 'https://cdn-icons-png.flaticon.com/128/9322/9322127.png'
                                : index === 1
                                ? 'https://cdn-icons-png.flaticon.com/128/2552/2552801.png'
                                : 'https://cdn-icons-png.flaticon.com/128/5736/5736435.png',
                          }}
                          resizeMode={'contain'}
                          style={{
                            height: R.fontSize.Size50,
                            width: R.fontSize.Size50,
                          }}
                        />
                      </View>
                      <View style={Styles.flatTitleView}>
                        <Text style={Styles.flatTitleText}>{title}</Text>
                      </View>
                    </Pressable>
                  );
                }}
                ListEmptyComponent={() => {
                  return (
                    <View style={Styles.emptyView}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/128/12950/12950579.png',
                        }}
                        resizeMode={'contain'}
                        style={Styles.flatImageStyle}
                      />
                      <Text style={Styles.emptyText}>
                        {'Something wrong!\nData not found'}
                      </Text>
                    </View>
                  );
                }}
              />
            </View>
            <View
              style={{
                marginHorizontal: R.fontSize.Size120,
              }}>
              <AppButton
                disabled={!disabledConfirmButton}
                onPress={() => props.confirmOnPress(selectedRole)}
                title={'CONFIRM'}
                backgroundColor={
                  disabledConfirmButton ? R.colors.white : R.colors.lightWhite
                }
                borderWidth={R.fontSize.Size2}
                borderColor={
                  disabledConfirmButton
                    ? R.colors.appColor
                    : R.colors.placeholderTextColor
                }
                textColor={
                  disabledConfirmButton
                    ? R.colors.appColor
                    : R.colors.lightBlack
                }
                buttonBorderRadius={R.fontSize.Size5}
                buttonHeight={R.fontSize.Size30}
                titleFontSize={R.fontSize.Size14}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default RoleSelectionModal;

const Styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  titleText: {
    fontSize: R.fontSize.Size16,
    color: R.colors.secAppColor,
    fontWeight: '500',
  },
  flatView: {
    flex: 1,
    marginHorizontal: R.fontSize.Size20,
  },
  modalMainView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'center',
  },
  modalView: {
    height: screenHeight / 4,
    backgroundColor: R.colors.white,
    borderRadius: R.fontSize.Size8,
    paddingVertical: R.fontSize.Size10,
    marginHorizontal: R.fontSize.Size10,
  },
  modalViewReverse: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: R.fontSize.Size10,
  },
  modalFilterText: {
    fontSize: R.fontSize.Size18,
    fontWeight: '700',
    color: R.colors.primaryTextColor,
  },
  flatListFlex: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: R.fontSize.Size8,
  },
  flatImageView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatImageStyle: {
    height: 70,
    width: 70,
  },
  flatTitleView: {
    paddingVertical: R.fontSize.Size5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    color: R.colors.secAppColor,
    fontWeight: '700',
  },

  headingView: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: R.colors.appColor,
    borderRadius: 4,
  },

  headingText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.white,
    fontWeight: '700',
  },

  emptyView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: R.fontSize.Size20,
  },
  emptyText: {
    fontFamily: R.fonts.regular,
    fontWeight: '500',
    color: R.colors.placeHolderColor,
    fontSize: R.fontSize.Size14,
    textAlign: 'center',
  },
});
