import {StyleSheet,Dimensions} from 'react-native';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  topHeaderView: {
    marginHorizontal: R.fontSize.Size10,
    paddingVertical: R.fontSize.Size2,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  topHeaderText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.secAppColor,
    textAlign:'center'
  },
  flatUpperView: {
    marginHorizontal: R.fontSize.Size10,
    marginTop: R.fontSize.Size10,
    borderRadius: R.fontSize.Size5,
    backgroundColor: R.colors.lightWhite,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  flatMainView: {
    width: screenWidth / 2.4,
    height: screenWidth / 3,
    marginHorizontal: R.fontSize.Size12,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size8,
    overflow: 'hidden',
    borderWidth: 1,
    marginVertical: R.fontSize.Size6,
    marginTop: R.fontSize.Size8,
  },
  flatTitleMainView: {
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  flatTitleView: {
    backgroundColor: R.colors.lightWhite,
    padding: R.fontSize.Size4,
    paddingHorizontal: R.fontSize.Size8,
    opacity: 0.8,
    borderRadius: R.fontSize.Size4,
  },
  dropDownMainView: {
    alignItems: 'center',
    justifyContent: 'center',
    top:15,
    left:0,
    right:0
  },
  dropDownPress: {
    padding: R.fontSize.Size10,
    paddingHorizontal: R.fontSize.Size80,
    borderBottomWidth: 2,
    borderColor: R.colors.placeholderTextColor,
  },
  dropDownIcon: {
    height: R.fontSize.Size12,
    width: R.fontSize.Size14,
  },
  customCardMainView: {
    marginTop: R.fontSize.Size14,
  },
  customCardView: {
    marginVertical: R.fontSize.Size10,
    marginHorizontal: R.fontSize.Size20,
  },
  customCardHead: {
    fontFamily: R.fonts.extraBold,
    fontSize: R.fontSize.Size16,
    color: R.colors.secAppColor,
  },
  customCardFlatView: {
    marginHorizontal: R.fontSize.Size6,
    borderWidth: 1,
    
    padding: R.fontSize.Size5,
    width: R.fontSize.Size120,
    height: R.fontSize.Size90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: R.fontSize.Size4,
    borderColor: R.colors.placeHolderColor,
    backgroundColor: R.colors.white,
    shadowColor: R.colors.lightBlack,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  customCardTitleText: {
    fontFamily:R.fonts.medium,
    fontSize: R.fontSize.Size12,
    color: R.colors.secAppColor,
    textAlign: 'center',
    marginTop: R.fontSize.Size6,
    fontWeight:'600'
  },
});

export default style