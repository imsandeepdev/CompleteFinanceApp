import * as React from 'react';
import {StyleSheet} from 'react-native';
import R from '../../res/R';

const Styles = StyleSheet.create({
  mainSafeView: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    // paddingHorizontal: R.fontSize.Size20,
  },
  cardView: {
    flexDirection: 'row',
    height: R.fontSize.Size40,
    alignItems: 'center',
    backgroundColor: R.colors.darkGreenColor,
    paddingHorizontal: R.fontSize.Size20,
  },
  customerView: {
    flex: 1,
    borderRightWidth: 1,
    paddingHorizontal: 5,
    borderColor: R.colors.placeholderTextColor,
    alignItems: 'center',
  },
  titleText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.lightWhite,
  },
  cardLineView: {
    paddingVertical: R.fontSize.Size6,
    flexDirection: 'row',
    borderBottomWidth: 1,
    marginVertical: R.fontSize.Size2,
    borderColor: R.colors.placeholderTextColor,
    height:R.fontSize.Size35,
    paddingHorizontal: R.fontSize.Size20,
  },
  customerLineView: {
    flex: 1,
    borderRightWidth: 1,
    paddingHorizontal: R.fontSize.Size8,
    borderColor: R.colors.placeholderTextColor,
  },
  titleLineText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size14,
    fontWeight: '700',
    color: R.colors.textPriColor,
  },
});

export default Styles;
