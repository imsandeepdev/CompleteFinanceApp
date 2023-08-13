import * as React from 'react';
import {
  Modal,
  View,
  Pressable,
  Text,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import R from '../res/R';
import AppContent from '../utils/AppContent';
import AppButton from './AppButton';
import style from '../screens/HomeScreen/style';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;
import moment from 'moment';

const ListGroupModal = props => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={Styles.modalMainView}>
        <View style={Styles.modalView}>
          <View style={Styles.modalViewReverse}>
            <View style={Styles.headMainView}>
              <View style={Styles.headCheckBox} />
              <View style={Styles.headView}>
                <Text style={Styles.modelHeadText}>{'Applicant Name'}</Text>
              </View>
              <View style={[Styles.headView, {marginHorizontal: 0}]}>
                <Text style={Styles.modelHeadText}>{'Applicant Id'}</Text>
              </View>
              <View
                style={[
                  Styles.headView,
                  {marginHorizontal: 0, borderRightWidth: 0},
                ]}>
                <Text style={Styles.modelHeadText}>{'DOB'}</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              marginHorizontal: R.fontSize.Size10,
            }}>
            <FlatList
              data={props.dataList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <Pressable
                    key={index}
                    onPress={() => props.onPress(item, index)}
                    style={({pressed}) => [
                      Styles.headMainView,
                      {
                        opacity: pressed ? 0.5 : 1,
                        paddingHorizontal: R.fontSize.Size5,
                        marginVertical: R.fontSize.Size2,
                        backgroundColor: R.colors.white,
                        borderColor: item.selected
                          ? R.colors.darkGreenColor
                          : R.colors.lightBlack,
                      },
                    ]}>
                    <View
                      style={{
                        marginVertical: R.fontSize.Size6,
                        height: R.fontSize.Size24,
                        width: R.fontSize.Size24,
                        borderRadius: R.fontSize.Size2,
                        backgroundColor: item.selected
                          ? R.colors.appColor
                          : R.colors.lightWhite,
                        borderWidth: 1,
                      }}
                    />
                    <View
                      style={[
                        Styles.headView,
                        {
                          borderColor: item.selected
                            ? R.colors.darkGreenColor
                            : R.colors.lightBlack,
                        },
                      ]}>
                      <Text style={Styles.modelHeadText} numberOfLines={1}>
                        {item.ApplicantName}
                      </Text>
                    </View>
                    <View
                      style={[
                        Styles.headView,
                        {
                          marginHorizontal: 0,
                          borderColor: item.selected
                            ? R.colors.darkGreenColor
                            : R.colors.lightBlack,
                        },
                      ]}>
                      <Text style={Styles.modelHeadText} numberOfLines={1}>
                        {item.ApplicantId}
                      </Text>
                    </View>
                    <View
                      style={[
                        Styles.headView,
                        {
                          marginHorizontal: 0,
                          borderRightWidth: 0,
                          borderColor: item.selected
                            ? R.colors.darkGreenColor
                            : R.colors.lightBlack,
                        },
                      ]}>
                      <Text style={Styles.modelHeadText} numberOfLines={1}>
                        {moment(item.ApplicantDateofbirth).format(
                          'Do-MMM-YYYY',
                        )}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                borderTopWidth: 1,
              }}>
              <AppButton
                flex={1}
                onPress={props.onPressClose}
                marginVertical={10}
                buttonHeight={R.fontSize.Size40}
                marginHorizontal={R.fontSize.Size30}
                title={'Close'}
                titleFontSize={R.fontSize.Size14}
                backgroundColor={R.colors.white}
                borderWidth={1}
                borderColor={R.colors.darkGreenColor}
                textColor={R.colors.darkGreenColor}
              />
              <AppButton
                flex={1}
                onPress={props.onPressConfirm}
                marginVertical={10}
                buttonHeight={R.fontSize.Size40}
                marginHorizontal={R.fontSize.Size30}
                title={'Confirm'}
                titleFontSize={R.fontSize.Size14}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ListGroupModal;

const Styles = StyleSheet.create({
  modalMainView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: screenHeight / 2,
    backgroundColor: R.colors.white,
    borderTopLeftRadius: R.fontSize.Size8,
    borderTopRightRadius: R.fontSize.Size8,
    paddingVertical: R.fontSize.Size10,
  },
  modalViewReverse: {
    // flexDirection: 'row-reverse',
    marginHorizontal: R.fontSize.Size10,
  },
  modalFilterText: {
    fontSize: R.fontSize.Size18,
    fontWeight: '700',
    color: R.colors.primaryTextColor,
  },
  videoModalTitleText: {
    fontSize: R.fontSize.Size24,
    fontWeight: '700',
    color: R.colors.primaryTextColor,
    flex: 1,
    marginHorizontal: R.fontSize.Size14,
  },
  videoModalDescText: {
    fontSize: R.fontSize.Size12,
    fontWeight: '400',
    color: R.colors.primaryTextColor,
  },
  videoModalMainView: {
    height: R.fontSize.Size60,
    width: R.fontSize.Size60,
    overflow: 'hidden',
    borderRadius: R.fontSize.Size30,
    borderWidth: 1,
    borderColor: R.colors.placeholderTextColor,
  },
  videoModalMapMainView: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: R.fontSize.Size20,
  },
  videoModalMapView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: R.fontSize.Size14,
  },
  videoModalPersonalDetailView: {
    height: R.fontSize.Size10,
    width: R.fontSize.Size10,
    backgroundColor: R.colors.appColor,
    borderRadius: R.fontSize.Size10,
  },
  videoModalPersonalDetailText: {
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.primaryTextColor,
    marginLeft: R.fontSize.Size8,
  },

  videoModalAvailableText: {
    fontWeight: '700',
    fontSize: R.fontSize.Size18,
    color: R.colors.primaryTextColor,
  },
  videoModalAvailView: {
    alignItems: 'center',
    marginRight: R.fontSize.Size10,
    justifyContent: 'center',
    paddingHorizontal: R.fontSize.Size20,
    paddingVertical: R.fontSize.Size6,
    borderRadius: R.fontSize.Size8,
    marginBottom: R.fontSize.Size6,
  },
  videoModalAvailItemText: {
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.white,
    marginLeft: R.fontSize.Size8,
  },
  modelHeadText: {
    fontSize: R.fontSize.Size12,
    color: R.colors.secAppColor,
    fontWeight: '700',
  },
  headMainView: {
    height: R.fontSize.Size40,
    borderWidth: 1,
    borderColor: R.colors.lightBlack,
    borderRadius: R.fontSize.Size4,
    flexDirection: 'row',
    paddingHorizontal: R.fontSize.Size5,
    marginVertical: R.fontSize.Size2,
    marginHorizontal: R.fontSize.Size10,
    backgroundColor: R.colors.appColor,
  },
  headCheckBox: {
    marginVertical: R.fontSize.Size8,
    height: R.fontSize.Size24,
    width: R.fontSize.Size24,
  },
  headView: {
    marginHorizontal: R.fontSize.Size8,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRightWidth: 1,
  },
});
