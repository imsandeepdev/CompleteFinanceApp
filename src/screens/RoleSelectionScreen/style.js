import {StyleSheet, Dimensions} from 'react-native';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;

const style = StyleSheet.create({
  mainView: {
    paddingHorizontal: R.fontSize.Size20,
    flex: 1,
  },
  topImageView: {
    height: screenHeight / 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appLogoIcon: {
    height: R.fontSize.Size160,
    width: R.fontSize.Size160,
  },
  titleText: {
    fontFamily: R.fonts.extraBold,
    fontSize: R.fontSize.Size16,
    color: R.colors.secAppColor,
    textAlign: 'center',
  },
  subTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size16,
    color: R.colors.placeHolderColor,
    fontWeight: '500',
    textAlign: 'center',
  },
  bodyView: {
    flex: 1,
    paddingTop: R.fontSize.Size50,
  },
});

export default style;
