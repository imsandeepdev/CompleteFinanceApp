import * as React from 'react';
import {createRef} from 'react';
import {View} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput} from '../../components';
import style from './style';

const BankDetail = props => {
  let accountNoRef = createRef();
  let accountHolderRef = createRef();
  let branchNameRef = createRef();
  let ifscCodeRef = createRef();

  return (
    <View style={style.mainView}>
      <View style={style.screenMainView}>
        <AppCardPress
          onPress={props.onPress_BankName}
          headTitle={'Bank Name *'}
          title={
            props.title_bankName != null ? props.title_bankName : 'Bank Name'
          }
          TextColor={
            props.title_bankName != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_bankName != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppTextInput
          ref={accountHolderRef}
          placeholder={'Account holder name'}
          headTitle={'Account holder name *'}
          headTitleColor={
            props.value_accountHolder !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_accountHolder}
          onChangeText={props.onChange_accountHolder}
          returnKeyType={'next'}
          onSubmitEditing={() => accountNoRef.current?.focus()}
        />
        <AppTextInput
          ref={accountNoRef}
          placeholder={'Account number'}
          headTitle={'Account number *'}
          headTitleColor={
            props.value_accountNo !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_accountNo}
          onChangeText={props.onChange_accountNo}
          returnKeyType={'next'}
          keyboardType={'numeric'}
          onSubmitEditing={() => ifscCodeRef.current?.focus()}
        />
        <AppTextInput
          ref={ifscCodeRef}
          placeholder={'IFSC Code'}
          headTitle={'IFSC Code *'}
          headTitleColor={
            props.value_ifscCode !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_ifscCode}
          onChangeText={props.onChange_ifscCode}
          returnKeyType={'next'}
          onSubmitEditing={() => branchNameRef.current?.focus()}
        />
        <AppTextInput
          ref={branchNameRef}
          placeholder={'Branch name'}
          headTitle={'Branch name'}
          headTitleColor={
            props.value_branchName !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_branchName}
          onChangeText={props.onChange_branchName}
          returnKeyType={'done'}
          onSubmitEditing={props.onPress_AccountType}
        />
        <AppCardPress
          onPress={props.onPress_AccountType}
          headTitle={'Account type *'}
          title={
            props.title_accountType != null
              ? props.title_accountType
              : 'Account type'
          }
          TextColor={
            props.title_accountType != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_accountType != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />

        <AppCardPress
          onPress={props.onPress_applicantKycType}
          headTitle={'Bank Document Type *'}
          title={
            props.title_applicantKycType != null
              ? props.title_applicantKycType
              : 'Bank Document Type'
          }
          TextColor={
            props.title_applicantKycType != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_applicantKycType != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />

        <AppTextInput
          placeholder={'Bank Document No'}
          headTitle={'Bank Document No *'}
          headTitleColor={
            props.value_applicantKYCNo !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_applicantKYCNo}
          onChangeText={props.onChange_applicantKYCNo}
        />
        <AppCardPress
          onPress={props.onPress_applicantKYCDoc}
          headTitle={'Bank Document *'}
          title={
            props.applicantKYCList >= 1
              ? 'Selected documents'
              : 'Select bank document'
          }
          TextColor={
            props.applicantKYCList >= 1
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={R.colors.darkGreenColor}
          rightIcon={R.images.cameraIcon1}
          borderStyle={'dashed'}
          Iconheight={R.fontSize.Size22}
          Iconwidth={R.fontSize.Size22}
          selectedDoc={props.selectedApplicantKYCDoc1}
          handleRemove={props.handleRemoveApplicantKYCDoc1}
        />

        <AppCardPress
          onPress={props.onPress_applicantKycType2}
          headTitle={'Bank Document Type2 *'}
          title={
            props.title_applicantKycType2 != null
              ? props.title_applicantKycType2
              : 'Bank Document Type'
          }
          TextColor={
            props.title_applicantKycType2 != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_applicantKycType2 != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />

        <AppTextInput
          placeholder={'Bank Document No 2'}
          headTitle={'Bank Document No 2 *'}
          headTitleColor={
            props.value_applicantKYCNo2 !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_applicantKYCNo2}
          onChangeText={props.onChange_applicantKYCNo2}
        />
        <AppCardPress
          onPress={props.onPress_applicantKYCDoc2}
          headTitle={'Bank Document 2 *'}
          title={
            props.applicantKYCList2 >= 1
              ? 'Selected documents'
              : 'Select bank document 2'
          }
          TextColor={
            props.applicantKYCList2 >= 1
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={R.colors.darkGreenColor}
          rightIcon={R.images.cameraIcon1}
          borderStyle={'dashed'}
          Iconheight={R.fontSize.Size22}
          Iconwidth={R.fontSize.Size22}
          selectedDoc={props.selectedApplicantKYCDoc2}
          handleRemove={props.handleRemoveApplicantKYCDoc2}
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
          textColor={R.colors.secAppColor}
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

export default BankDetail;
