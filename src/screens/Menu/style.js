import {StyleSheet} from 'react-native';
import R from '../../res/R';
const style = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
    backgroundColor: R.colors.lightWhite,
  },
  mainView: {
    flex: 1,
  },
  pressableStyle: {
    marginHorizontal: R.fontSize.Size10,
    flex: 1,
  },
  tabNameStyle: {
    fontFamily: R.fonts.regular,
    color: R.colors.black,
    fontSize: R.fontSize.Size16,
    fontWeight: '700',
  },
  userDataView: {
    flexDirection: 'row',
    height: R.fontSize.Size100,
    alignItems: 'center',
  },
  imageStyle: {
    height: R.fontSize.Size60,
    width: R.fontSize.Size60,
    borderRadius: R.fontSize.Size10,
    marginRight: R.fontSize.Size10,
  },
  textStyle: {
    color: R.colors.white,
    fontSize: R.fontSize.Size20,
    textAlign: 'justify',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  subtextStyle: {
    color: R.colors.lightWhite,
    fontSize: R.fontSize.Size14,
    textAlign: 'justify',
    fontWeight: '500',
  },
  logoutView: {
    paddingVertical: R.fontSize.Size10,
    borderTopWidth: 1,
    borderColor: R.colors.appColor,
    paddingHorizontal: R.fontSize.Size20,
  },
  topLinearView: {
    paddingHorizontal: R.fontSize.Size20,
    paddingTop: R.fontSize.Size40,
    paddingBottom: R.fontSize.Size10,
  },
  bodyView: {
    borderBottomWidth: 1,
    borderColor: R.colors.placeholderTextColor,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: R.fontSize.Size20,
  },
  customDrawerView: {
    flexDirection: 'row',
    paddingVertical: R.fontSize.Size14,
  },
  appVersionText: {
    fontSize: R.fontSize.Size12,
    marginBottom: R.fontSize.Size5,
    fontFamily: R.fonts.regular,
    color: R.colors.lightBlack,
    textAlign: 'center',
    fontWeight: '700',
  },
});

export default style;
