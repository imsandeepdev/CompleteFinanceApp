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

const MonthlyExpenses = props => {


  const monthlyRentRef = createRef();
  const monthlyMedicalRef = createRef();
  const monthlyEB_LPGRef = createRef();
  const monthlyTransportRef = createRef();
  const monthlyFood_ClothngRef = createRef();
  const monthlyEducationRef = createRef();
  const monthlyOtherExpenseRef = createRef();


  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingVertical: R.fontSize.Size20}}>
        <AppTextInput
          ref={monthlyRentRef}
          placeholder={'Monthly Rent'}
          headTitle={'Monthly Rent'}
          headTitleColor={
            props.monthly_rent != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_rent}
          onChangeText={props.onChange_monthlyRent}
          returnKeyType={'next'}
          onSubmitEditing={() => monthlyMedicalRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyMedicalRef}
          placeholder={'Monthly Medical'}
          headTitle={'Monthly Medical'}
          headTitleColor={
            props.monthly_medical != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_medical}
          onChangeText={props.onChange_monthlyMedical}
          returnKeyType={'next'}
          onSubmitEditing={() => monthlyEB_LPGRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyEB_LPGRef}
          placeholder={'Monthly EB & LPG'}
          headTitle={'Monthly EB & LPG'}
          headTitleColor={
            props.monthly_EB_LPG != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_EB_LPG}
          onChangeText={props.onChange_monthlyEB_LPG}
          returnKeyType={'next'}
          onSubmitEditing={() => monthlyTransportRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyTransportRef}
          placeholder={'Monthly Transport'}
          headTitle={'Monthly Transport'}
          headTitleColor={
            props.monthly_transport != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_transport}
          onChangeText={props.onChange_monthlyTransport}
          returnKeyType={'next'}
          onSubmitEditing={() => monthlyFood_ClothngRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyFood_ClothngRef}
          placeholder={'Monthly Food & Clothing'}
          headTitle={'Monthly Food & Clothing'}
          headTitleColor={
            props.monthly_food_clothing != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_food_clothing}
          onChangeText={props.onChange_monthlyfood_clothing}
          returnKeyType={'next'}
          onSubmitEditing={() => monthlyEducationRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyEducationRef}
          placeholder={'Monthly Education'}
          headTitle={'Monthly Education'}
          headTitleColor={
            props.monthly_education != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_education}
          onChangeText={props.onChange_monthlyeducation}
          returnKeyType={'next'}
          onSubmitEditing={() => monthlyOtherExpenseRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyOtherExpenseRef}
          placeholder={'Monthly Other Incidental Expense'}
          headTitle={'Monthly Other Incidental Expense'}
          headTitleColor={
            props.monthly_other_expense != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_other_expense}
          onChangeText={props.onChange_monthlyother_expense}
          returnKeyType={'done'}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
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

export default MonthlyExpenses;