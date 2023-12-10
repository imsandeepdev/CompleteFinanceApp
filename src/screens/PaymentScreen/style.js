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
    paddingVertical: R.fontSize.Size6,
    borderRadius: R.fontSize.Size4,
    borderWidth: 2,
    borderColor: R.colors.appColor,
    marginTop: R.fontSize.Size10,
    paddingHorizontal: R.fontSize.Size5,
  },
  overAllText: {
    fontFamily: R.fonts.regular,
    fontWeight: '700',
    color: R.colors.appColor,
    fontSize: R.fontSize.Size14,
  },
});

export default Styles;
