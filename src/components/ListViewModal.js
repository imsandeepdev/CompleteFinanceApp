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
const screenHeight = Dimensions.get('screen').height;

const ListViewModal = props => {
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

          <View style={Styles.flatView}>
            <FlatList
              style={{
                paddingHorizontal: R.fontSize.Size20,
              }}
              data={props.dataList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                let title =
                  item.RoleName ||
                  item.BankName ||
                  item.ComponentName ||
                  item.ProductName ||
                  item.centerName;
                return (
                  <Pressable
                    key={index}
                    onPress={() => props.onPress(item)}
                    style={({pressed}) => [
                      {
                        height: R.fontSize.Size45,
                        borderBottomWidth: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: R.fontSize.Size10,
                        borderColor: R.colors.lightWhite,
                        opacity: pressed ? 0.5 : 1,
                      },
                    ]}>
                    <Text style={Styles.titleText}>{title}</Text>
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
                      style={{
                        height: R.fontSize.Size70,
                        width: R.fontSize.Size70,
                      }}
                    />
                    <Text style={Styles.emptyText}>
                      {'Something wrong!\nData not found'}
                    </Text>
                  </View>
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
  titleText: {
    fontSize: R.fontSize.Size16,
    color: R.colors.secAppColor,
    fontWeight: '500',
  },
  flatView: {
    flex: 1,
    // marginHorizontal: R.fontSize.Size20,
  },
  modalMainView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    height: screenHeight / 2.5,
    backgroundColor: R.colors.white,
    borderTopLeftRadius: R.fontSize.Size8,
    borderTopRightRadius: R.fontSize.Size8,
    paddingVertical: R.fontSize.Size10,
  },
  modalViewReverse: {
    flexDirection: 'row',
    marginHorizontal: R.fontSize.Size10,
    justifyContent: 'flex-end',
  },
  modalFilterText: {
    fontSize: R.fontSize.Size18,
    fontWeight: '700',
    color: R.colors.primaryTextColor,
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
  headingView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size10,
    marginHorizontal: R.fontSize.Size5,
    justifyContent: 'center',
    borderBottomWidth: 1,
    backgroundColor: R.colors.appColor,
    borderRadius: R.fontSize.Size4,
  },
  headingText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.white,
    fontWeight: '700',
  },
});
