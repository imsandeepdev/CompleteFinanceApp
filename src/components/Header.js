import * as React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import R from '../res/R';

const Header = props => {
  return (
    <View style={Styles.mainView}>
      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          {
            height: R.fontSize.Size40,
            width: R.fontSize.Size40,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: pressed ? 0.5 : 1,
            marginHorizontal: R.fontSize.Size10,
          },
        ]}>
        <Image
          source={props.leftSource}
          style={{height: R.fontSize.Size40, width: R.fontSize.Size40}}
          resizeMode={'contain'}
        />
      </Pressable>
      <View
        style={[
          Styles.headView,
          {
            justifyContent: props.title_justifyContent,
            marginRight: props.title_marginRight,
          },
        ]}>
        {props.headIcon}
        <Text style={Styles.titleText}>{props.title}</Text>
      </View>
    </View>
  );
};

export default Header;

const Styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    height: R.fontSize.Size50,
    alignItems: 'center',
    paddingHorizontal: R.fontSize.Size2,
    borderBottomWidth: 1,
    borderColor: R.colors.darkAppColor,
  },
  headView: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleText: {
    color: R.colors.secAppColor,
    fontSize: R.fontSize.Size18,
    fontWeight: '700',
  },
});
