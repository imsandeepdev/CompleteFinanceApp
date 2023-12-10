import {StyleSheet} from 'react-native';
import R from '../../res/R';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  scrollFlexGrow: {
    flexGrow: 1,
  },
  topMainView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size24,
    paddingTop: R.fontSize.Size50,
  },
});

export default style;
