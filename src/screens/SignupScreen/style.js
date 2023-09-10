import {StyleSheet} from 'react-native';
import R from '../../res/R';

const style = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
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
});

export default style;
