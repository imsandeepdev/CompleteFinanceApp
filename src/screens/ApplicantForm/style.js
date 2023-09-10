import * as React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import R from '../../res/R';
const screenWidth = Dimensions.get('screen').width;

const style = StyleSheet.create({
  topHeaderPress: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: R.fontSize.Size4,
    borderColor: R.colors.lightWhite,
    width: screenWidth / 5,
    height: R.fontSize.Size40,
  },
  scrollFlexGrow: {
    flexGrow: 1,
    paddingHorizontal: R.fontSize.Size20,
  },
  mainView: {
    flex: 1,
  },
  screenMainView: {
    flex: 1,
    paddingVertical: R.fontSize.Size20,
  },
  addTopView: {
    paddingVertical: R.fontSize.Size10,
    borderBottomWidth: 2,
    borderColor: R.colors.placeholderTextColor,
    marginBottom: R.fontSize.Size20,
  },
  residentialText: {
    fontFamily: R.fonts.regular,
    fontSize: R.fontSize.Size15,
    fontWeight: '600',
    color: R.colors.textPriColor,
  },
  addRowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressCheck: {
    height: '100%',
    width: '100%',
  },
  addPressCheck: {
    height: R.fontSize.Size25,
    width: R.fontSize.Size25,
    borderRadius: R.fontSize.Size4,
    borderWidth: 1,
    padding: R.fontSize.Size2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addSameAsResText: {
    marginHorizontal: R.fontSize.Size10,
    fontFamily: R.fonts.regular,
    fontWeight: '600',
    fontSize: R.fontSize.Size14,
  },
  rowFlexEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  gernalTopView: {
    alignItems: 'center',
    marginTop: R.fontSize.Size30,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default style;
