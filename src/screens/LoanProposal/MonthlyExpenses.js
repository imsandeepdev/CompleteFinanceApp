import * as React from 'react';
import {createRef} from 'react';
import {View, Text} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput} from '../../components';
import style from './style';

const CustomTitle = props => {
  return (
    <View
      style={{
        marginVertical: R.fontSize.Size15,
      }}>
      <Text style={style.monthlyTitleText}>{props.title}</Text>
    </View>
  );
};

const MonthlyExpenses = props => {
  const monthlyRentRef = createRef();
  const monthlyMedicalRef = createRef();
  const monthlyEB_LPGRef = createRef();
  const monthlyTransportRef = createRef();
  const monthlyFood_ClothngRef = createRef();
  const monthlyEducationRef = createRef();
  const monthlyOtherExpenseRef = createRef();

  return (
    <View style={style.mainView}>
      <View style={style.topView}>
        <AppTextInput
          ref={monthlyRentRef}
          placeholder={'Monthly Rent'}
          headTitle={'Monthly Rent *'}
          headTitleColor={
            props.monthly_rent !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_rent}
          onChangeText={props.onChange_monthlyRent}
          returnKeyType={'next'}
          keyboardType={'numeric'}
          maxLength={4}
          onSubmitEditing={() => monthlyMedicalRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyMedicalRef}
          placeholder={'Monthly Medical'}
          headTitle={'Monthly Medical'}
          headTitleColor={
            props.monthly_medical !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_medical}
          onChangeText={props.onChange_monthlyMedical}
          keyboardType={'numeric'}
          returnKeyType={'next'}
          maxLength={4}
          onSubmitEditing={() => monthlyEB_LPGRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyEB_LPGRef}
          placeholder={'Monthly EB & LPG'}
          headTitle={'Monthly EB & LPG'}
          headTitleColor={
            props.monthly_EB_LPG !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_EB_LPG}
          onChangeText={props.onChange_monthlyEB_LPG}
          keyboardType={'numeric'}
          returnKeyType={'next'}
          maxLength={4}
          onSubmitEditing={() => monthlyTransportRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyTransportRef}
          placeholder={'Monthly Transport'}
          headTitle={'Monthly Transport'}
          headTitleColor={
            props.monthly_transport !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_transport}
          onChangeText={props.onChange_monthlyTransport}
          keyboardType={'numeric'}
          returnKeyType={'next'}
          maxLength={4}
          onSubmitEditing={() => monthlyFood_ClothngRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyFood_ClothngRef}
          placeholder={'Monthly Food & Clothing'}
          headTitle={'Monthly Food & Clothing'}
          headTitleColor={
            props.monthly_food_clothing !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_food_clothing}
          onChangeText={props.onChange_monthlyfood_clothing}
          keyboardType={'numeric'}
          returnKeyType={'next'}
          maxLength={4}
          onSubmitEditing={() => monthlyEducationRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyEducationRef}
          placeholder={'Monthly Education'}
          headTitle={'Monthly Education'}
          headTitleColor={
            props.monthly_education !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_education}
          onChangeText={props.onChange_monthlyeducation}
          keyboardType={'numeric'}
          returnKeyType={'next'}
          maxLength={4}
          onSubmitEditing={() => monthlyOtherExpenseRef.current?.focus()}
        />
        <AppTextInput
          ref={monthlyOtherExpenseRef}
          placeholder={'Monthly Other Incidental Expense'}
          headTitle={'Monthly Other Incidental Expense'}
          headTitleColor={
            props.monthly_other_expense !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_other_expense}
          onChangeText={props.onChange_monthlyother_expense}
          keyboardType={'numeric'}
          maxLength={4}
          returnKeyType={'done'}
        />

        <View style={style.monthlyTitleView} />
        <CustomTitle title={'Monthly Total Expenses'} />

        <AppCardPress
          title={
            props.overAllExpenses != null
              ? props.overAllExpenses
              : 'Monthly Total Expenses'
          }
          TextColor={
            props.overAllExpenses != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.overAllExpenses != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
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

export default MonthlyExpenses;
