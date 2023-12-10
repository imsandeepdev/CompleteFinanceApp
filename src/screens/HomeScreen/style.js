import {StyleSheet, Dimensions} from 'react-native';
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
    textAlign: 'center',
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
    width: screenWidth / 2.5,
    height: screenWidth / 3,
    marginHorizontal: R.fontSize.Size12,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size8,
    overflow: 'hidden',
    borderWidth: 1,
    marginVertical: R.fontSize.Size6,
    marginTop: R.fontSize.Size8,
  },

  linearMainView: {
    width: screenWidth / 3.5,
    height: screenWidth / 3,
    marginHorizontal: R.fontSize.Size8,
    backgroundColor: R.colors.lightWhite,
    borderRadius: R.fontSize.Size4,
    overflow: 'hidden',
    borderWidth: 1,
    marginVertical: R.fontSize.Size6,
    marginTop: R.fontSize.Size8,
  },
  linearTitleMainView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  linearTitleView: {
    backgroundColor: R.colors.white,
    padding: R.fontSize.Size4,
    paddingHorizontal: R.fontSize.Size8,
    opacity: 0.9,
    borderRadius: R.fontSize.Size2,
    alignItems: 'center',
  },
  flatTitleMainView: {
    position: 'absolute',
    bottom: 5,
    right: 0,
  },
  flatTitleView: {
    width: R.fontSize.Size140,
    backgroundColor: R.colors.lightWhite,
    padding: R.fontSize.Size4,
    paddingHorizontal: R.fontSize.Size8,
    opacity: 0.8,
    borderRadius: R.fontSize.Size4,
    alignItems: 'center',
  },
  dropDownMainView: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 15,
    left: 0,
    right: 0,
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
    borderWidth: 1.5,

    padding: R.fontSize.Size5,
    width: R.fontSize.Size120,
    height: R.fontSize.Size150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: R.fontSize.Size8,
    borderColor: R.colors.darkBlueColor,
    backgroundColor: '#b0babc',
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
    fontFamily: R.fonts.medium,
    fontSize: R.fontSize.Size14,
    color: R.colors.darkBlueColor,
    textAlign: 'center',
    marginTop: R.fontSize.Size6,
    fontWeight: '700',
  },
  customCardBottomView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // marginHorizontal: R.fontSize.Size10,
  },
  customCardBottomTitle: {
    fontFamily: R.fonts.regular,
    fontWeight: '700',
    color: R.colors.textPriColor,
    fontSize: R.fontSize.Size12,
  },
  linearImageView: {
    margin: R.fontSize.Size5,
    borderRadius: R.fontSize.Size4,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customCardBottomIcon100: {
    height: '100%',
    width: '100%',
  },
});

export default style;
