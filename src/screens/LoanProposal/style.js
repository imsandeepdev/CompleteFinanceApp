import {StyleSheet} from 'react-native';
import R from '../../res/R';

const style = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  topView: {
    flex: 1,
    paddingVertical: R.fontSize.Size20,
  },
  rowWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  monthlyTitleView: {
    width: '100%',
    height: 2,
    backgroundColor: R.colors.lightWhite,
  },
  monthlyTitleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.textPriColor,
  },
  onlyRow: {
    flexDirection: 'row',
  },
});

export default style;
