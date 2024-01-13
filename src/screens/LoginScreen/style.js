import {StyleSheet, Dimensions} from 'react-native';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;

const style = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  flexView: {
    flex: 1,
  },
  topView: {
    height: screenHeight / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogoIcon: {
    height: R.fontSize.Size200,
    width: R.fontSize.Size200,
  },
  titleText: {
    fontFamily: R.fonts.extraBold,
    fontSize: R.fontSize.Size18,
    color: R.colors.secAppColor,
  },
  bodyView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size24,
  },
  bottomView: {
    marginTop: R.fontSize.Size10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accountText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.placeHolderColor,
  },
  registerText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.appColor,
    fontWeight: '700',
  },
  bgImageView: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    opacity: 0.3,
  },
  alertTitleStyle: {
    fontWeight: '500',
    color: R.colors.black,
  },
  alertHeadView: {
    backgroundColor: R.colors.redColor,
  },
});

export default style;
