import {StyleSheet, Dimensions} from 'react-native';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;

const style = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  scrollFlow: {
    flexGrow: 1,
  },
  topView: {
    height: screenHeight / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogoIcon: {
    height: R.fontSize.Size200,
    width: R.fontSize.Size200,
  },
  titleText: {
    fontSize: R.fontSize.Size16,
    fontWeight: '600',
    color: R.colors.appColor,
  },
  bodyView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size24,
  },
  bottomBody: {
    marginTop: R.fontSize.Size10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  alreadyText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    color: R.colors.placeHolderColor,
  },
  loginText: {
    fontSize: R.fontSize.Size14,
    color: R.colors.appColor,
    fontWeight: '700',
  },
});

export default style;
