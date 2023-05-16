import {StyleSheet} from 'react-native';
import R from '../../res/R';
const style = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: R.colors.black,
  },
  mainView: {
    flex: 1,
    marginHorizontal: R.fontSize.Size22,
    marginVertical: R.fontSize.Size26,
  },
  pressableStyle: {
    marginHorizontal: R.fontSize.Size10,
    flex: 1,
  },
  tabNameStyle: {
    color: R.colors.white,
    fontSize: R.fontSize.Size18,
    fontWeight:'700'
  },
  userDataView: {
    marginTop: R.fontSize.Size20,
    flexDirection: 'row',
    height: R.fontSize.Size100,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: R.colors.appColor,
  },
  imageStyle: {
    height: R.fontSize.Size60,
    width: R.fontSize.Size60,
    borderRadius: R.fontSize.Size10,
    marginRight: R.fontSize.Size10,
  },
  textStyle: {
    color: R.colors.appColor,
    fontSize: R.fontSize.Size22,
    textAlign: 'justify',
    fontWeight: '700',
  },
  subtextStyle: {
    color: R.colors.lightWhite,
    fontSize: R.fontSize.Size14,
    textAlign: 'justify',
    fontWeight: '500',
  },
});

export default style;
