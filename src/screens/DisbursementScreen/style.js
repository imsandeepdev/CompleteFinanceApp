import {Dimensions, StyleSheet} from 'react-native';
import R from '../../res/R';

const {height, width} = Dimensions.get('screen');

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    paddingHorizontal: R.fontSize.Size20,
    paddingVertical: R.fontSize.Size20,
  },
});

export default style;
