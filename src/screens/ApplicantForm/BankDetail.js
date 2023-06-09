import * as React from 'react';
import {useState,createRef} from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput, ListViewModal} from '../../components';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import AppContent from '../../utils/AppContent';

const BankDetail = props => {
  let bankNameRef = createRef();
  let accountNoRef = createRef()
  let accountHolderRef = createRef();
  let accountTypeRef = createRef();
  let branchNameRef = createRef();
  let ifscCodeRef = createRef();


  const [bankName, setBankName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountType, setAccountType] = useState('');
  const [branchName, setBranchName] = useState('');
  const [ifscCode, setIfscCode] = useState('');



  const [permanentAdd, setPermanentAdd] = useState('');

 

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingVertical: R.fontSize.Size20}}>
        <AppTextInput
          ref={bankNameRef}
          placeholder={'Bank Name'}
          headTitle={'Bank Name'}
          headTitleColor={
            props.value_bankName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_bankName}
          onChangeText={props.onChange_bankName}
          returnKeyType={'next'}
          onSubmitEditing={() => accountHolderRef.current?.focus()}
        />
        <AppTextInput
          ref={accountHolderRef}
          placeholder={'Account holder name'}
          headTitle={'Account holder name'}
          headTitleColor={
            props.value_accountHolder != ''
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
          headTitle={'Account number'}
          headTitleColor={
            props.value_accountNo != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_accountNo}
          onChangeText={props.onChange_accountNo}
          returnKeyType={'next'}
          onSubmitEditing={() => ifscCodeRef.current?.focus()}
        />
        <AppTextInput
          ref={ifscCodeRef}
          placeholder={'IFSC Code'}
          headTitle={'IFSC Code'}
          headTitleColor={
            props.value_ifscCode != ''
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
            props.value_branchName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_branchName}
          onChangeText={props.onChange_branchNAme}
          returnKeyType={'done'}
          onSubmitEditing={props.onPress_AccountType}
        />
        <AppCardPress
          onPress={props.onPress_AccountType}
          headTitle={'Account type'}
          title={
            props.title_accountType != ''
              ? props.title_accountType
              : 'Account type'
          }
          TextColor={
            props.title_accountType != ''
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_accountType != ''
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

export default BankDetail;
