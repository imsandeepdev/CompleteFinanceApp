import {StyleSheet, Dimensions} from 'react-native';
import R from '../../res/R';
const screenWidth = Dimensions.get('screen').width;

const Styles = StyleSheet.create({
  mainSafeView: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size10,
    paddingVertical: R.fontSize.Size20,
  },
  scrollFlexGrow: {
    flexGrow: 1,
  },
  headView: {
    paddingVertical: R.fontSize.Size5,
    alignItems: 'center',
    width: (screenWidth - R.fontSize.Size22) / 8,
    borderWidth: 0.4,
    padding: R.fontSize.Size4,
  },
  headTitle: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  valueHeadView: {
    paddingVertical: R.fontSize.Size5,
    alignItems: 'center',
    width: (screenWidth - R.fontSize.Size22) / 8,
    borderWidth: 0.4,
  },
  valueTextInputHeadView: {
    width: (screenWidth - R.fontSize.Size22) / 8,
  },
  valueHeadTitle: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.black,
    fontWeight: '500',
    textAlign: 'center',
  },
  topCenterView: {
    flex: 1,
    justifyContent: 'center',
  },
  centerText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.black,
  },
  wrapView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: R.colors.appColor,
    borderWidth: 1.5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  selectedView: {
    // borderBottomWidth: 1,
    marginTop: R.fontSize.Size4,
  },
  wrapViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  overAllView: {
    paddingVertical: R.fontSize.Size8,
    borderRadius: R.fontSize.Size4,
    borderBottomWidth: 1,
    borderColor: R.colors.black,
    marginVertical: R.fontSize.Size10,
    marginBottom: R.fontSize.Size20,
    paddingHorizontal: R.fontSize.Size5,
    marginHorizontal: R.fontSize.Size30,
    backgroundColor: R.colors.white,
    alignItems: 'center',
  },
  overAllText: {
    fontFamily: R.fonts.regular,
    fontWeight: '700',
    color: R.colors.appColor,
    fontSize: R.fontSize.Size14,
  },
  cardMainView: {
    borderWidth: 2,
    borderColor: R.colors.appColor,
    marginHorizontal: R.fontSize.Size6,
    marginVertical: R.fontSize.Size4,
  },
  cardRowTopView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: R.colors.placeholderTextColor,
    paddingVertical: 4,
    backgroundColor: R.colors.appColor,
    alignItems: 'center',
  },
  cardTopTitleView: {
    flex: 1,
    marginHorizontal: R.fontSize.Size6,
  },
  cardTitleText: {
    color: R.colors.white,
    fontSize: R.fontSize.Size14,
    fontWeight: '600',
    fontFamily: R.fonts.regular,
  },
  cardSubTitleText: {
    fontFamily: R.fonts.regular,
    color: R.colors.white,
    fontSize: R.fontSize.Size12,
    fontWeight: '400',
  },
  noRecordText: {
    fontFamily: R.fonts.regular,
    color: R.colors.lightBlack,
    fontSize: R.fontSize.Size12,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 15,
  },
  cardBodyRowView: {
    flexDirection: 'row',
    paddingVertical: R.fontSize.Size4,
    borderBottomWidth: 1,
    borderColor: R.colors.placeholderTextColor,
  },
  cardBodyLeftView: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: R.fontSize.Size5,
    borderRightWidth: 1,
    alignItems: 'center',
    borderColor: R.colors.placeholderTextColor,
  },
  cardBodyRightView: {
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cardFlex: {
    flex: 1,
    paddingLeft: R.fontSize.Size4,
    justifyContent: 'center',
  },
  cardTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: R.colors.placeholderTextColor,
    fontSize: R.fontSize.Size12,
    color: R.colors.black,
    textAlign: 'center',
    paddingVertical: 8,
  },
  cardBodyTitleText: {
    fontFamily: R.fonts.regular,
    color: R.colors.black,
    fontSize: R.fontSize.Size12,
    fontWeight: '500',
  },
  cardBodyAmountText: {
    fontFamily: R.fonts.regular,
    color: R.colors.black,
    fontSize: R.fontSize.Size12,
    fontWeight: '600',
  },
  checkIcon: {
    height: R.fontSize.Size25,
    width: R.fontSize.Size25,
    borderRadius: R.fontSize.Size20,
    borderWidth: 1.5,
    borderColor: R.colors.white,
  },
  unCheckView: {
    height: R.fontSize.Size25,
    width: R.fontSize.Size25,
    borderRadius: R.fontSize.Size20,
    borderWidth: 1.5,
    borderColor: R.colors.lightBlack,
    backgroundColor: R.colors.lightWhite,
  },
  bottomMainView: {
    borderWidth: 2,
    borderBottomWidth: 0,
    borderColor: R.colors.appColor,
    borderTopLeftRadius: R.fontSize.Size10,
    borderTopRightRadius: R.fontSize.Size10,
  },
});

export default Styles;
