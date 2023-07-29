import * as React from 'react';
import {StyleSheet} from 'react-native';
import R from '../../res/R';

const Styles = StyleSheet.create({
  mainSafeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
  },
  cardView: {
    flexDirection: 'row',
    height: R.fontSize.Size40,
    backgroundColor: R.colors.darkGreenColor,
    paddingHorizontal: R.fontSize.Size10,
  },
  customerView: {
    flex: 1,
    paddingHorizontal: R.fontSize.Size5,
    borderColor: R.colors.placeholderTextColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.lightWhite,
    textAlign: 'center',
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
