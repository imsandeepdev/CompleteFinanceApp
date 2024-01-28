import * as React from 'react';
import {
  Modal,
  View,
  Pressable,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import R from '../res/R';

const CardLayout = props => {
  return (
    <View style={Styles.cardView}>
      <View style={Styles.customerView}>
        <Text style={Styles.titleText}>{props.customer}</Text>
      </View>
      <View style={Styles.customerLineWhite} />
      <View style={Styles.customerView}>
        <Text style={Styles.titleText}>{props.center}</Text>
      </View>
      <View style={Styles.customerLineWhite} />
      <View style={Styles.proceedView}>
        <Text style={Styles.titleText}>{props.proceed}</Text>
      </View>
    </View>
  );
};

const CardLineLayout = props => {
  return (
    <View style={Styles.cardLineView}>
      <View style={Styles.customerLineView}>
        <Text style={Styles.titleLineText}>{props.customer}</Text>
      </View>
      <View style={Styles.customerLineNew} />
      <View style={Styles.customerLineView}>
        <Text style={Styles.titleLineText}>{props.center}</Text>
      </View>
      <View style={Styles.customerLineNew} />

      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          Styles.customerLinePress,
          {opacity: pressed ? 0.5 : 1},
        ]}>
        <Text style={Styles.loanText}>{'Loan'}</Text>
      </Pressable>
    </View>
  );
};

const CardRowLineLayout = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: R.colors.placeholderTextColor,
        paddingVertical: 6,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 20,
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: R.colors.appColor,
        }}>
        <Text
          style={{
            fontFamily: R.fonts.regular,
            fontSize: R.fontSize.Size16,
            color: R.colors.lightWhite,
            fontWeight: '700',
          }}>
          {props.customerFirstLetter}
        </Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 5}}>
        <Text style={Styles.titleLineText}>{props.customer}</Text>
        <Text
          style={{
            fontFamily: R.fonts.regular,
            fontSize: R.fontSize.Size12,
            color: R.colors.lightBlack,
          }}>
          <Text>{'Center : '}</Text>
          {`${props.center}`}
        </Text>
      </View>

      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          {
            borderWidth: 1.5,
            borderColor: R.colors.darkAppColor,
            paddingVertical: 2,
            paddingHorizontal: 5,
            borderRadius: 5,
            backgroundColor: R.colors.appColor,
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        <Text
          style={{
            fontFamily: R.fonts.regular,
            fontSize: R.fontSize.Size14,
            fontWeight: '700',
            color: R.colors.white,
          }}>
          {'Proceed'}
        </Text>
      </Pressable>
    </View>
  );
};

const CustomerListModal = props => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={Styles.modalMainView}>
        <SafeAreaView style={Styles.flexView}>
          <View style={Styles.modalView}>
            {/* <View>
              <CardLayout
                customer={'Center Name'}
                center={'Customer Name'}
                proceed={'Proceed'}
              />
            </View> */}
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: R.colors.appColor,
                alignItems: 'center',
                borderBottomWidth: 1,
              }}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    fontFamily: R.fonts.regular,
                    fontSize: R.fontSize.Size16,
                    fontWeight: '700',
                    color: R.colors.lightWhite,
                  }}>
                  {'Customer List'}
                </Text>
              </View>
              <Pressable
                onPress={props.backOnPress}
                style={({pressed}) => [
                  {
                    borderWidth: 2,
                    borderRadius: R.fontSize.Size4,
                    borderColor: R.colors.lightWhite,
                    backgroundColor: R.colors.white,
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
              {/* <Pressable
                onPress={props.backOnPress}
                style={({pressed}) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flex: 1,
                  },
                ]}>
                <Image
                  source={R.images.cancelIcon}
                  style={Styles.backIcon}
                  resizeMode={'contain'}
                />
              </Pressable> */}
            </View>

            <View style={Styles.flexView}>
              <FlatList
                style={Styles.flexView}
                data={props.data}
                renderItem={({item, index}) => {
                  return (
                    <CardRowLineLayout
                      key={index}
                      customer={item.ApplicantName}
                      customerFirstLetter={item.ApplicantName.charAt(0)}
                      center={item.CenterName}
                      onPress={() => props.onPress(item)}
                    />
                    // <CardLineLayout
                    //   key={index}
                    //   customer={item.CenterName}
                    //   center={item.ApplicantName}
                    //   onPress={() => props.onPress(item)}
                    // />
                  );
                }}
                ListEmptyComponent={
                  <View style={Styles.listEmptyView}>
                    <Image
                      source={{
                        uri: 'https://cdn-icons-png.flaticon.com/128/7486/7486768.png',
                      }}
                      resizeMode={'contain'}
                      style={{
                        height: R.fontSize.Size70,
                        width: R.fontSize.Size70,
                      }}
                    />
                    <Text style={Styles.listEmptyText}>
                      {'No found customer list'}
                    </Text>
                  </View>
                }
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default CustomerListModal;

const Styles = StyleSheet.create({
  backIconView: {
    height: R.fontSize.Size40,
    position: 'absolute',
    top: 0,
    width: R.fontSize.Size40,
    left: 0,
  },
  backIcon: {
    height: R.fontSize.Size20,
    width: R.fontSize.Size20,
  },
  flexView: {
    flex: 1,
  },
  modalMainView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    flex: 1,
    backgroundColor: R.colors.white,
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
  cardView: {
    flexDirection: 'row',
    height: R.fontSize.Size40,
    backgroundColor: R.colors.darkGreenColor,
    paddingHorizontal: R.fontSize.Size10,
  },
  customerView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size5,
    borderColor: R.colors.placeholderTextColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.lightWhite,
    textAlign: 'center',
  },
  cardLineView: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: R.colors.darkGreenColor,
    height: R.fontSize.Size35,
    paddingHorizontal: R.fontSize.Size10,
  },
  customerLineView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size8,
    borderColor: R.colors.darkGreenColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLineText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.textPriColor,
  },
  customerLineNew: {
    height: '100%',
    width: 2,
    backgroundColor: R.colors.darkGreenColor,
  },
  customerLineWhite: {
    height: '100%',
    width: 2,
    backgroundColor: R.colors.lightWhite,
  },
  customerLinePress: {
    width: R.fontSize.Size60,
    alignItems: 'center',
    backgroundColor: R.colors.darkGreenColor,
    borderRadius: R.fontSize.Size2,
    justifyContent: 'center',
    marginLeft: R.fontSize.Size10,
    marginVertical: R.fontSize.Size2,
  },
  loanText: {
    color: R.colors.lightWhite,
    fontSize: R.fontSize.Size12,
    fontWeight: '600',
  },
  proceedView: {
    width: R.fontSize.Size70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmptyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: R.fontSize.Size100,
  },
  listEmptyText: {
    fontFamily: R.fonts.regular,
    fontWeight: '600',
    fontSize: R.fontSize.Size14,
    color: R.colors.placeHolderColor,
  },
});
