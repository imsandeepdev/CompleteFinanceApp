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
  SafeAreaView,
} from 'react-native';
import R from '../res/R';
import AppContent from '../utils/AppContent';
import Header from './Header';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

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
      <View
        style={{
          width: R.fontSize.Size70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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

const CustomerListModal = props => {
  return (
    <Modal
      visible={props.visible}
      transparent={true}
      onRequestClose={props.onRequestClose}>
      <View style={Styles.modalMainView}>
        <SafeAreaView style={{flex:1}}>
          <View style={Styles.modalView}>
            <View>
              <CardLayout
                customer={'Center Name'}
                center={'Customer Name'}
                proceed={'Proceed'}
              />
            </View>

            <View style={{flex: 1}}>
              <FlatList
                style={{flex: 1}}
                data={props.data}
                renderItem={({item, index}) => {
                  return (
                    <CardLineLayout
                      key={index}
                      customer={item.CenterName}
                      center={item.ApplicantName}
                      onPress={() => props.onPress(item)}
                    />
                  );
                }}
                ListEmptyComponent={
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: R.fontSize.Size100,
                    }}>
                    <Text
                      style={{
                        fontFamily: R.fonts.regular,
                        fontWeight: '600',
                        fontSize: R.fontSize.Size14,
                        color: R.colors.placeHolderColor,
                      }}>
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
  modalMainView: {
    flex: 1,
    backgroundColor: R.colors.modelBackground,
    justifyContent: 'flex-end',
  },
  modalView: {
    flex:1,
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
  }
});
