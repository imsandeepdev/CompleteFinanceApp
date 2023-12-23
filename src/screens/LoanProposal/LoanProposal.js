import * as React from 'react';
import {createRef} from 'react';
import {View} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput} from '../../components';
import moment from 'moment';
import style from './style';

const LoanProposalForm = props => {
  // const proposalDateRef = createRef();
  // const proposalCodeRef = createRef();
  // const customerNameRef = createRef();
  // const customerCodeRef = createRef();
  // const insuranceAmountRef = createRef();
  // const maxAmountRef = createRef();
  // const paymentFreRef = createRef();
  // const termsRef = createRef();
  // const installmentAmountRef = createRef();
  const remarksRef = createRef();

  return (
    <View style={style.mainView}>
      <View style={style.topView}>
        {/* <AppTextInput
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
        /> */}
        <AppCardPress
          disabled={true}
          headTitle={'Proposal Date'}
          title={moment().format('DD-MM-YYYY')}
          TextColor={R.colors.secAppColor}
          headTitleColor={R.colors.darkGreenColor}
        />
        {/* <AppTextInput
          ref={proposalCodeRef}
          placeholder={'Proposal Code'}
          headTitle={'Proposal Code'}
          headTitleColor={
            props.proposal_code != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.proposal_code}
          onChangeText={props.onChange_proposalCode}
          returnKeyType={'next'}
          onSubmitEditing={() => customerNameRef.current?.focus()}
        /> */}
        <AppCardPress
          disabled={true}
          headTitle={'Customer Name'}
          title={props.customer_name}
          TextColor={R.colors.secAppColor}
          headTitleColor={R.colors.darkGreenColor}
        />
        <AppCardPress
          disabled={true}
          headTitle={'Customer Code'}
          title={props.customer_code}
          TextColor={R.colors.secAppColor}
          headTitleColor={R.colors.darkGreenColor}
        />

        <AppCardPress
          onPress={props.onPress_productCategory}
          headTitle={'Product Category *'}
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
          onPress={props.onPress_paymentFrequency}
          headTitle={'Payment Frequency *'}
          title={
            props.title_paymentFrequency != null
              ? props.title_paymentFrequency
              : 'Payment Frequency'
          }
          TextColor={
            props.title_paymentFrequency != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_paymentFrequency != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />

        {props.loanProductList !== '' && (
          <View>
            <AppCardPress
              onPress={props.onPress_loanProduct}
              headTitle={'Loan Product *'}
              title={
                props.title_loanProduct != null
                  ? props.title_loanProduct
                  : 'Payment Frequency'
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
          </View>
        )}
        {props.onSelectLoanProductValue !== '' && (
          <View>
            <View style={style.onlyRow}>
              <AppCardPress
                flex={1}
                disabled={true}
                headTitle={'Installment Amount'}
                title={props.installment_amount}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppCardPress
                flex={1}
                disabled={true}
                headTitle={'Interest Rate'}
                title={props.interestRate}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
            </View>
            <View style={style.onlyRow}>
              <AppCardPress
                flex={1}
                disabled={true}
                headTitle={'Received Amount'}
                title={props.disbursedAmount}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppCardPress
                flex={1}
                disabled={true}
                headTitle={'Process Fee'}
                title={props.processFee}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
            </View>
            <View style={style.onlyRow}>
              <AppCardPress
                flex={1}
                disabled={true}
                headTitle={'ServiceTax'}
                title={props.serviceTax}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppCardPress
                flex={1}
                disabled={true}
                headTitle={'Proposed Amount'}
                title={props.proposedAmount}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
            </View>
          </View>
        )}
        {/* <AppTextInput
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
          ref={insuranceAmountRef}
          placeholder={'Insurance Amount'}
          headTitle={'Insurance Amount'}
          headTitleColor={
            props.insurance_amount != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.insurance_amount}
          onChangeText={props.onChange_insuranceAmount}
          returnKeyType={'next'}
          onSubmitEditing={() => maxAmountRef.current?.focus()}
        /> */}

        {/* {props.title_paymentFrequency != null &&
          props.title_productCategory != null && (
            <AppCardPress
              onPress={props.onPress_proposedAmount}
              headTitle={'Proposed Amount *'}
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
          )} */}

        {/* <AppTextInput
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
        /> */}

        <AppCardPress
          onPress={props.onPress_loanPurpose}
          headTitle={'Loan Purpose *'}
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
        <AppCardPress
          onPress={props.onPress_loanPurposeGroup}
          headTitle={'Loan Purpose Group *'}
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
        <AppTextInput
          ref={remarksRef}
          placeholder={'Remarks'}
          headTitle={'Remarks'}
          headTitleColor={
            props.remarks !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.remarks}
          onChangeText={props.onChange_remarks}
          returnKeyType={'done'}
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
          textColor={R.colors.black}
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
