import {StyleSheet} from 'react-native';
import R from '../../res/R';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  scrollFlexGrow: {
    flexGrow: 1,
  },
  topBodyView: {
    flex: 1,
    alignItems: 'center',
    marginTop: R.fontSize.Size10,
    flexDirection: 'row',
    paddingHorizontal: R.fontSize.Size20,
  },
  leftView: {
    height: R.fontSize.Size80,
    width: R.fontSize.Size80,
    borderRadius: R.fontSize.Size40,
    borderWidth: 2,
    backgroundColor: R.colors.lightWhite,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size50,
    fontWeight: '700',
    color: R.colors.appColor,
  },
  rightView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size10,
    justifyContent: 'center',
  },
  rightTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size20,
    fontWeight: '700',
    color: R.colors.lightWhite,
  },
  rightSubTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '400',
    color: R.colors.lightWhite,
  },
  scrollViewStyle: {
    flexGrow: 1,
  },
  scrollBodyView: {
    flex: 1,
    marginHorizontal: R.fontSize.Size20,
    marginVertical: R.fontSize.Size10,
  },
  bottomButtonView: {
    marginHorizontal: R.fontSize.Size80,
  },
  customRowBody: {
    flexDirection: 'row',
    paddingVertical: R.fontSize.Size15,
    borderBottomWidth: 1,
    borderColor: R.colors.placeholderTextColor,
    alignItems: 'center',
  },
  customRowImage: {
    height: '100%',
    width: '100%',
  },
  customRowLeftView: {
    height: R.fontSize.Size25,
    width: R.fontSize.Size25,
    marginHorizontal: R.fontSize.Size10,
  },
  customRowTitleKeyText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size12,
    fontWeight: '500',
    color: R.colors.placeHolderColor,
  },
  customRowTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size16,
    fontWeight: '600',
    color: R.colors.black,
  },
});

export default style;
