import * as React from 'react';
import {StyleSheet} from 'react-native';
import R from '../../res/R';

const Styles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  scrollFlexGrow: {
    flexGrow: 1,
  },
  flexWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
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
    borderWidth: 1,
    borderColor: R.colors.darkGreenColor,
    borderRadius: R.fontSize.Size4,
    flexDirection: 'row',
    paddingHorizontal: R.fontSize.Size5,
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
    borderRightWidth: 1,
    borderColor: R.colors.darkGreenColor,
  },
});

export default Styles;
