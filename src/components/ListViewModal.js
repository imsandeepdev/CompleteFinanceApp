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
  FlatList
} from 'react-native';
import R from '../res/R';
import AppContent from '../utils/AppContent';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const ListViewModal = props => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={Styles.modalMainView}>
        <View style={Styles.modalView}>
          <View style={Styles.modalViewReverse}>
            <Pressable
              onPress={props.cancelOnPress}
              style={({pressed}) => [
                {
                 borderWidth:2,
                 borderRadius:R.fontSize.Size4,
                 borderColor:R.colors.appColor,
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

            <View
              style={{
                flex: 1,
                marginHorizontal: R.fontSize.Size20,
              }}>
            <FlatList
                data={props.dataList}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={({item,index})=>{
                    return (
                      <Pressable
                        key={index}
                        onPress={()=>props.onPress(item)}
                        style={({pressed}) => [
                          {
                            height: R.fontSize.Size45,
                            borderBottomWidth: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginHorizontal: R.fontSize.Size10,
                            borderColor: R.colors.lightWhite,
                            opacity: pressed ? 0.5 : 1
                          },
                        ]}>
                        <Text
                          style={{
                            fontSize: R.fontSize.Size16,
                            color: R.colors.secAppColor,
                            fontWeight: '500',
                          }}>
                          {item}
                        </Text>
                      </Pressable>
                    );
                }}
            />
              
            </View>
        </View>
      </View>
    </Modal>
  );
};

export default ListViewModal;

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
    flexDirection: 'row-reverse',
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
});
