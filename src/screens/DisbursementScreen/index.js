/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import StoryScreen from '../../components/StoryScreen';
import style from './style';
import {
  AppButton,
  AppCardPress,
  CustomerListModal,
  Header,
  ListViewModal,
} from '../../components';
import R from '../../res/R';
import {useDispatch, connect} from 'react-redux';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';
import {
  GetAllCustomerRequest,
  GetLoanProposalCustomerListRequest,
} from '../../actions/role.action';
import {LoanProposalDetailRequest} from '../../actions/loanApproval.action';
import {UpdateDisbursementRequest} from '../../actions/disbursement.action';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {PaymentModeListRequest} from '../../actions/dropdown.action';
const payment_Date = 'paymentDate';
const disbursement_Date = 'disbursementDate';

const DisbursementScreen = props => {
  const dispatch = useDispatch();
  const [approvalDetail, setApprovalDetail] = useState('');
  const [approvalStatus, setApprovalStatus] = useState(false);
  const [listModalData, setListModalData] = useState([]);
  const [profileDetail, setProfileDetail] = useState('');
  const [customerListModal, setCustomerListModal] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  const [isDisplayDate, setIsDisplayDate] = useState(false);
  const [dateType, setDateType] = useState('');
  const [onSelectCustomer, setOnSelectCustomer] = useState('');
  const [paymentMode, setPaymentMode] = useState('');
  const [disbursementDate, setDisbursementDate] = useState('');
  const [firstPaymentDate, setFirstPaymentDate] = useState('');

  useEffect(() => {
    handleApprovalDetail();
    handleProfile();
    handleGetAllCustomer(
      props.profile.entity[0].StaffID,
      props.profile.entity[0].BoId,
    );
    setProfileDetail(props.profile.entity[0]);
  }, [props.navigation]);

  const handleGetAllCustomer = (staffId, BoId) => {
    console.log('STAFFID', staffId);
    let tempUrl = `?mode=CustomerLoanPurposal&loginId=${staffId}&BranchId=${BoId}`;
    dispatch(
      GetLoanProposalCustomerListRequest(tempUrl, response => {
        console.log(
          'Get Loan Proposal Customer Response=>',
          response.entity.entity,
        );
        let tempList = response.entity.entity;
        setCustomerList(tempList);
      }),
    );
  };

  const handleProfile = () => {
    console.log('PROPS PROFILE', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
  };

  const handleApprovalDetail = () => {
    let proposalId = '13';
    dispatch(
      LoanProposalDetailRequest(proposalId, response => {
        console.log('Loan Proposal Detail', response.entity.entity.length);
        if (
          response.statusCode === 200 &&
          response.entity.entity.length !== 0
        ) {
          setApprovalDetail(response.entity?.entity[0]);
        }
      }),
    );
  };

  const handlePaymentModeDropDown = () => {
    dispatch(
      PaymentModeListRequest(response => {
        console.log('PaymentMode respones=>', response);
        setApprovalStatus(true);
        setListModalData(response.entity.entity);
      }),
    );
  };

  const handleRoleSelect = item => {
    setPaymentMode(item);
    setApprovalStatus(false);
  };

  const handleValidation = () => {
    return (
      CommonFunctions.isBlank(paymentMode, 'please select payment Mode') &&
      CommonFunctions.isBlank(
        disbursementDate,
        'please select disbursement date',
      ) &&
      CommonFunctions.isBlank(
        firstPaymentDate,
        'please select first payment date',
      )
    );
  };

  const handleUpdateDisbursement = () => {
    if (handleValidation()) {
      handleUpdateDisbursementAPI();
    }
  };

  const handleUpdateDisbursementAPI = () => {
    let data = {
      mode: 'Update',
      branchId: 1,
      proposalId: onSelectCustomer.ProposalId,
      customerInfoId: onSelectCustomer.CenterId,
      staffId: profileDetail.StaffID,
      disbursementDate: disbursementDate,
      firstInstallmentDate: firstPaymentDate,
      payMode: paymentMode.RuleID,
    };
    console.log('DATA=>', data);
    dispatch(
      UpdateDisbursementRequest(data, response => {
        console.log('Update disbursement status=>', response);
        if (response.statusCode === 200) {
          Toast.show('Successfully! Submitted pre disbursement', Toast.SHORT);
          props.navigation.goBack();
        }
      }),
    );

    console.log('success');
  };

  const handleProceed = item => {
    console.log('ITEM=>', item);
    setOnSelectCustomer(item);
    setCustomerListModal(false);
  };

  const handleDateDisplay = type => {
    setDateType(type);
    setIsDisplayDate(true);
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Pre Disbursement'}
        />
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: R.fontSize.Size20,
            paddingVertical: R.fontSize.Size20,
          }}>
          <View style={style.mainView}>
            <AppCardPress
              disabled={true}
              headTitle={'Group Name'}
              title={approvalDetail !== '' && approvalDetail.StaffName}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Customer Name'}
              title={approvalDetail !== '' && approvalDetail.ApplicantName}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Request Amount'}
              title={approvalDetail !== '' && approvalDetail.LoanAmount}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Purpose Name'}
              title={'Purpose name'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'EMI Amount'}
              title={'EMI Amount'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Payment Frequency'}
              title={approvalDetail !== '' && approvalDetail.Frequency}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              onPress={() => handlePaymentModeDropDown()}
              headTitle={'Payment Mode *'}
              title={
                paymentMode !== '' ? paymentMode.ComponentName : 'Payment Mode'
              }
              TextColor={
                paymentMode !== ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                paymentMode !== ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
            <AppCardPress
              onPress={() => handleDateDisplay(disbursement_Date)}
              headTitle={'Disbursement Date *'}
              title={
                disbursementDate !== '' ? disbursementDate : 'Disbursement Date'
              }
              TextColor={
                disbursementDate !== ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                disbursementDate !== ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
            <AppCardPress
              onPress={() => handleDateDisplay(payment_Date)}
              headTitle={'First Payment Date *'}
              title={
                firstPaymentDate !== ''
                  ? firstPaymentDate
                  : 'First Payment Date'
              }
              TextColor={
                firstPaymentDate !== ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                firstPaymentDate !== ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
            <DatePicker
              modal
              // maximumDate={new Date()}
              minimumDate={new Date()}
              open={isDisplayDate}
              date={new Date()}
              mode="date"
              onConfirm={date => {
                console.log('DATE', date);
                dateType === payment_Date
                  ? setFirstPaymentDate(moment(date).format('YYYY-MM-DD'))
                  : setDisbursementDate(moment(date).format('YYYY-MM-DD'));

                setIsDisplayDate(false);
              }}
              onCancel={() => {
                setIsDisplayDate(false);
              }}
            />
          </View>
          <View>
            <AppButton
              onPress={() => handleUpdateDisbursement()}
              marginHorizontal={R.fontSize.Size30}
              title={'Submit'}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
      <ListViewModal
        visible={approvalStatus}
        cancelOnPress={() => setApprovalStatus(false)}
        onPress={item => handleRoleSelect(item)}
        dataList={listModalData}
      />
      <CustomerListModal
        backOnPress={() => props.navigation.goBack()}
        visible={customerListModal}
        data={customerList}
        onPress={item => handleProceed(item)}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.loanProposalDetailRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(DisbursementScreen);
