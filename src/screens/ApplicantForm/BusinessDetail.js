import * as React from 'react';
import {createRef} from 'react';
import {View} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput} from '../../components';
import style from './style';

const BusinessDetail = props => {
  const businessNameRef = createRef();
  const businessAddressRef = createRef();
  const landAreaRef = createRef();
  const assetDetailRef = createRef();
  const assetValueRef = createRef();

  return (
    <View style={style.mainView}>
      <View style={style.screenMainView}>
        <AppTextInput
          ref={businessNameRef}
          placeholder={'Business Name'}
          headTitle={'Business Name *'}
          headTitleColor={
            props.value_businessName !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_businessName}
          onChangeText={props.onChange_businessName}
          returnKeyType={'next'}
          onSubmitEditing={() => businessAddressRef.current?.focus()}
        />
        <AppTextInput
          ref={businessAddressRef}
          placeholder={'Business Address'}
          headTitle={'Business Address *'}
          headTitleColor={
            props.value_businessAddress !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_businessAddress}
          onChangeText={props.onChange_businessAddress}
          returnKeyType={'next'}
          onSubmitEditing={() => landAreaRef.current?.focus()}
        />
        <AppTextInput
          ref={landAreaRef}
          placeholder={'Land Area'}
          headTitle={'Land Area *'}
          headTitleColor={
            props.value_landArea !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_landArea}
          onChangeText={props.onChange_landArea}
          returnKeyType={'next'}
          onSubmitEditing={() => assetDetailRef.current?.focus()}
        />
        <AppTextInput
          ref={assetDetailRef}
          placeholder={'Asset Detail'}
          headTitle={'Asset Detail *'}
          headTitleColor={
            props.value_assetDetail !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_assetDetail}
          onChangeText={props.onChange_assetDetail}
          returnKeyType={'next'}
          onSubmitEditing={() => assetValueRef.current?.focus()}
        />
        <AppTextInput
          ref={assetValueRef}
          placeholder={'Asset Value'}
          headTitle={'Asset Value *'}
          headTitleColor={
            props.value_assetValue !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_assetValue}
          onChangeText={props.onChange_assetValue}
          returnKeyType={'done'}
        />
        <AppCardPress
          onPress={props.onPress_houseStatus}
          headTitle={'house Status *'}
          title={
            props.title_houseStatus != null
              ? props.title_houseStatus
              : 'house Status'
          }
          TextColor={
            props.title_houseStatus != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_houseStatus != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_natureBusiness}
          headTitle={'Nature of business *'}
          title={
            props.title_natureBusiness != null
              ? props.title_natureBusiness
              : 'Nature of business'
          }
          TextColor={
            props.title_natureBusiness != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_natureBusiness != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
      </View>
      <View style={style.rowFlexEnd}>
        <AppButton
          onPress={props.backOnPress}
          title={'Back'}
          buttonHeight={R.fontSize.Size45}
          paddingHorizontal={R.fontSize.Size25}
          backgroundColor={R.colors.white}
          borderWidth={2}
          borderColor={R.colors.appColor}
          marginHorizontal={R.fontSize.Size5}
        />
        <AppButton
          onPress={props.nextOnPress}
          title={'Next'}
          buttonHeight={R.fontSize.Size45}
          paddingHorizontal={R.fontSize.Size25}
          marginHorizontal={R.fontSize.Size5}
        />
      </View>
    </View>
  );
};

export default BusinessDetail;
