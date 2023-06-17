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

const LoanProposalForm = props => {
  const proposalDateRef = createRef();
  const proposalCodeRef = createRef();
  const customerNameRef = createRef();
  const customerCodeRef = createRef();
  const insuranceAmountRef = createRef();
  const maxAmountRef = createRef();
  const paymentFreRef = createRef();
  const termsRef = createRef();
  const installmentAmountRef = createRef();
  const remarksRef = createRef();



  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingVertical: R.fontSize.Size20}}>
        <AppTextInput
          ref={proposalDateRef}
          placeholder={'Proposal Date'}
          headTitle={'Proposal Date'}
          headTitleColor={
            props.proposal_date != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.proposal_date}
          onChangeText={props.onChange_proposalDate}
          returnKeyType={'next'}
          onSubmitEditing={() => proposalCodeRef.current?.focus()}
        />
        <AppTextInput
          ref={proposalCodeRef}
          placeholder={'Proposal Code'}
          headTitle={'Proposal Code'}
          headTitleColor={
            props.monthly_medical != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_medical}
          onChangeText={props.onChange_monthlyMedical}
          returnKeyType={'next'}
          onSubmitEditing={() => customerNameRef.current?.focus()}
        />
        <AppTextInput
          ref={customerNameRef}
          placeholder={'Customer Name'}
          headTitle={'Customer Name'}
          headTitleColor={
            props.customer_name != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.customer_name}
          onChangeText={props.onChange_customerName}
          returnKeyType={'next'}
          onSubmitEditing={() => customerCodeRef.current?.focus()}
        />
        <AppTextInput
          ref={customerCodeRef}
          placeholder={'Customer Code'}
          headTitle={'Customer Code'}
          headTitleColor={
            props.customer_code != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.customer_code}
          onChangeText={props.onChange_customerCode}
          returnKeyType={'done'}
        />

        <AppTextInput
          ref={insuranceAmountRef}
          placeholder={'Insurance Amount'}
          headTitle={'Insurance Amount'}
          headTitleColor={
            props.monthly_food_clothing != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.monthly_food_clothing}
          onChangeText={props.onChange_monthlyfood_clothing}
          returnKeyType={'next'}
          onSubmitEditing={() => maxAmountRef.current?.focus()}
        />
        <AppTextInput
          ref={maxAmountRef}
          placeholder={'Max Amount To Be Disbursed'}
          headTitle={'Max Amount To Be Disbursed'}
          headTitleColor={
            props.maxAmount != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.maxAmount}
          onChangeText={props.onChange_maxAmount}
          returnKeyType={'next'}
          onSubmitEditing={() => paymentFreRef.current?.focus()}
        />
        <AppTextInput
          ref={paymentFreRef}
          placeholder={'Payment Frequency'}
          headTitle={'Payment Frequency'}
          headTitleColor={
            props.payment_Fre != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.payment_Fre}
          onChangeText={props.onChange_paymentFre}
          returnKeyType={'next'}
          onSubmitEditing={() => termsRef.current?.focus()}
        />
        <AppTextInput
          ref={termsRef}
          placeholder={'Terms'}
          headTitle={'Terms'}
          headTitleColor={
            props.terms != '' ? R.colors.darkGreenColor : R.colors.textPriColor
          }
          value={props.terms}
          onChangeText={props.onChange_terms}
          returnKeyType={'next'}
          onSubmitEditing={() => installmentAmountRef.current?.focus()}
        />
        <AppTextInput
          ref={installmentAmountRef}
          placeholder={'Installment Amount'}
          headTitle={'Installment Amount'}
          headTitleColor={
            props.installment_amount != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.installment_amount}
          onChangeText={props.onChange_installmentAmount}
          returnKeyType={'next'}
          onSubmitEditing={() => remarksRef.current?.focus()}
        />
        <AppTextInput
          ref={remarksRef}
          placeholder={'Remarks'}
          headTitle={'Remarks'}
          headTitleColor={
            props.remarks != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.remarks}
          onChangeText={props.onChange_remarks}
          returnKeyType={'done'}
        />
        <AppCardPress
          onPress={props.onPress_productCategory}
          headTitle={'Product Category'}
          title={
            props.title_productCategory != null
              ? props.title_productCategory
              : 'Product Category'
          }
          TextColor={
            props.title_productCategory != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_productCategory != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_productFrequency}
          headTitle={'Product Frequency'}
          title={
            props.title_productFrequency != null
              ? props.title_productFrequency
              : 'Product Frequency'
          }
          TextColor={
            props.title_productFrequency != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_productFrequency != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_loanProduct}
          headTitle={'Loan Product'}
          title={
            props.title_loanProduct != null
              ? props.title_loanProduct
              : 'Loan Product'
          }
          TextColor={
            props.title_loanProduct != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_loanProduct != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_proposedAmount}
          headTitle={'Proposed Amount'}
          title={
            props.title_proposedAmount != null
              ? props.title_proposedAmount
              : 'Proposed Amount'
          }
          TextColor={
            props.title_proposedAmount != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_proposedAmount != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_loanPurposeGroup}
          headTitle={'Loan Purpose Group'}
          title={
            props.title_loanPurposeGroup != null
              ? props.title_loanPurposeGroup
              : 'Loan Purpose Group'
          }
          TextColor={
            props.title_loanPurposeGroup != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_loanPurposeGroup != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_loanPurpose}
          headTitle={'Loan Purpose'}
          title={
            props.title_loanPurpose != null
              ? props.title_loanPurpose
              : 'Loan Purpose'
          }
          TextColor={
            props.title_loanPurpose != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_loanPurpose != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
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
          onPress={props.submitOnPress}
          title={'Submit'}
          buttonHeight={R.fontSize.Size45}
          paddingHorizontal={R.fontSize.Size25}
          marginHorizontal={R.fontSize.Size5}
        />
      </View>
    </View>
  );
};

export default LoanProposalForm;
