import * as React from 'react';
import {useState, createRef} from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import R from '../../res/R';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  ListViewModal,
} from '../../components';

const IncomeDetail = props => {


  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingVertical: R.fontSize.Size20}}>
        <View
        style={{
            marginBottom:R.fontSize.Size18
        }}
        >
            <Text
            style={{
                fontFamily:R.fonts.regular,
                fontSize:R.fontSize.Size14,
                fontWeight:'700',
                color:R.colors.textPriColor
            }}
            >{'Customer Detail'}</Text>
        </View>
        <AppCardPress
          onPress={props.onPress_Occupation}
          headTitle={'Occupation'}
          title={
            props.title_Occupation != null
              ? props.title_Occupation
              : 'Occupation'
          }
          TextColor={
            props.title_Occupation != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_Occupation != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_Sector}
          headTitle={'Sector'}
          title={
            props.title_Sector != null
              ? props.title_Sector
              : 'Sector'
          }
          TextColor={
            props.title_Sector != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_Sector != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_SectorPurpose}
          headTitle={'Sector Purpose'}
          title={
            props.title_SectorPurpose != null
              ? props.title_SectorPurpose
              : 'Sector Purpose'
          }
          TextColor={
            props.title_SectorPurpose != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_SectorPurpose != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppTextInput
          placeholder={'Monthly Income'}
          headTitle={'Monthly Income'}
          headTitleColor={
            props.monthly_income != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_income}
          onChangeText={props.onChange_monthlyIncome}
          returnKeyType={'done'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        
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

export default IncomeDetail;
