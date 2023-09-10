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
import {
  ApprovedStatusDropDownRequest,
  LoanProposalDetailRequest,
  UpdateLoanApprovalRequest,
} from '../../actions/loanApproval.action';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';
import {GetAllCustomerRequest} from '../../actions/role.action';

const LoanApproval = props => {
  const dispatch = useDispatch();
  const [approvalDetail, setApprovalDetail] = useState('');
  const [approvalStatus, setApprovalStatus] = useState(false);
  const [listModalData, setListModalData] = useState([]);
  const [selectedApproval, setSelectedApproval] = useState('');
  const [profileDetail, setProfileDetail] = useState('');
  const [customerListModal, setCustomerListModal] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  const [onSelectCustomer, setOnSelectCustomer] = useState('');

  useEffect(() => {
    handleGetAllCustomer(props.profile.entity[0].StaffID);
    // handleApprovalDetail();
    handleProfile();
  }, [props.navigation]);

  const handleGetAllCustomer = staffId => {
    console.log('STAFFID', staffId);
    let tempUrl = `?mode=ApplicantForLoanProposal&LoginId=${staffId}`;
    dispatch(
      GetAllCustomerRequest(tempUrl, response => {
        console.log('Get All Customer Response=>', response.entity.entity);
        let tempList = response.entity.entity;
        setCustomerList(tempList);
      }),
    );
  };

  const handleProfile = () => {
    console.log('PROPS PROFILE', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
  };

  const handleApprovedStatusDropDown = () => {
    let data = {
      mode: 'Status',
      filterId: '0',
    };
    dispatch(
      ApprovedStatusDropDownRequest(data, response => {
        console.log('approved status respones=>', response);
        setApprovalStatus(true);
        setListModalData(response.entity.entity);
      }),
    );
  };

  const handleRoleSelect = item => {
    setSelectedApproval(item);
    setApprovalStatus(false);
    console.log('ITEM', item);
  };

  const handleValidation = () => {
    return CommonFunctions.isBlank(
      selectedApproval,
      'please select approval status',
    );
  };

  const handleLoanSubmit = () => {
    if (handleValidation()) {
      handleLoanSubmitAPI();
    }
  };

  const handleLoanSubmitAPI = () => {
    let data = {
      mode: 'Update',
      proposalId: approvalDetail.ProposalId,
      customerInfoId: approvalDetail.ClientInfoId,
      staffId: profileDetail.StaffID,
      approvalStatus: selectedApproval.RuleID,
    };
    console.log('DATA=>', data);
    dispatch(
      UpdateLoanApprovalRequest(data, response => {
        console.log('Update loan status=>', response);
        if (response.statusCode === 200) {
          Toast.show('Successfully! Submitted Loan Approval', Toast.SHORT);
          props.navigation.goBack();
        }
      }),
    );

    console.log('success');
  };

  const handleProceed = item => {
    console.log('ITEM=>', item);
    handleApprovalDetail(item.ProposalId);
    setOnSelectCustomer(item);
    setCustomerListModal(false);
  };

  const handleApprovalDetail = proposal_Id => {
    let proposalId = proposal_Id;
    dispatch(
      LoanProposalDetailRequest(proposalId, response => {
        console.log('Loan Proposal Detail', response.entity.entity[0]);
        setApprovalDetail(response.entity.entity[0]);
      }),
    );
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Loan Approval'}
        />
        <ScrollView contentContainerStyle={style.scrollGlow}>
          <View style={style.mainView}>
            <AppCardPress
              disabled={true}
              headTitle={'Group Name'}
              title={approvalDetail.StaffName}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Customer Name'}
              title={approvalDetail.ApplicantName}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Request Amount'}
              title={approvalDetail.LoanAmount}
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
              title={approvalDetail.Frequency}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              onPress={() => handleApprovedStatusDropDown()}
              headTitle={'Approval Status *'}
              title={
                selectedApproval !== ''
                  ? selectedApproval.RoleName
                  : 'Approval Status'
              }
              TextColor={
                selectedApproval !== ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                selectedApproval !== ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
          </View>
          <View>
            <AppButton
              onPress={() => handleLoanSubmit()}
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

export default connect(mapStateToProps)(LoanApproval);
