import * as React from 'react';
import {StyleSheet} from 'react-native';
import R from '../../res/R';

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size24,
    paddingTop: R.fontSize.Size50,
  },
  modelHeadText: {
    fontSize: R.fontSize.Size12,
    color: R.colors.secAppColor,
    fontWeight: '700',
  },
  headMainView: {
    height: R.fontSize.Size40,
    borderWidth: 2,
    borderColor: R.colors.darkGreenColor,
    borderRadius: R.fontSize.Size4,
    flexDirection: 'row',
    marginVertical: R.fontSize.Size2,
    backgroundColor: R.colors.lightWhite,
    marginHorizontal: R.fontSize.Size2,
  },
  headCheckBox: {
    marginVertical: R.fontSize.Size8,
    height: R.fontSize.Size24,
    width: R.fontSize.Size24,
  },
  headView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderRightWidth: 2,
    borderColor: R.colors.darkGreenColor,
  },

  cardLineView: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: R.colors.darkGreenColor,
    height: R.fontSize.Size35,
    paddingHorizontal: R.fontSize.Size10,
  },
  customerLineView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size8,
    borderColor: R.colors.darkGreenColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLineText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.textPriColor,
  },
  customerLineNew: {
    height: '100%',
    width: 2,
    backgroundColor: R.colors.darkGreenColor,
  },
  customerLineWhite: {
    height: '100%',
    width: 2,
    backgroundColor: R.colors.lightWhite,
  },
  customerLinePress: {
    width: R.fontSize.Size60,
    alignItems: 'center',
    backgroundColor: R.colors.darkGreenColor,
    borderRadius: R.fontSize.Size2,
    justifyContent: 'center',
    marginLeft: R.fontSize.Size10,
    marginVertical: R.fontSize.Size2,
  },
  loanText: {
    color: R.colors.lightWhite,
    fontSize: R.fontSize.Size12,
    fontWeight: '600',
  },
});

export default Styles;
