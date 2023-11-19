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
    width: (screenWidth - R.fontSize.Size22) / 6,
    borderWidth: 1,
  },
  headTitle: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    color: R.colors.lightWhite,
    fontWeight: '500',
    textAlign: 'center',
  },
  valueHeadView: {
    paddingVertical: R.fontSize.Size5,
    alignItems: 'center',
    width: (screenWidth - R.fontSize.Size22) / 6,
    borderWidth: 1,
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
    backgroundColor: R.colors.appColor,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  selectedView: {
    borderBottomWidth: 1,
    marginTop: R.fontSize.Size2,
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
});

export default Styles;
