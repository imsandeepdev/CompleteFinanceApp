import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import StoryScreen from '../../components/StoryScreen';
import style from './style';
import {
  AppCardPress,
  CustomAlert,
  CustomerListModal,
  GradientButton,
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
import {GetLoanProposalCustomerListRequest} from '../../actions/role.action';

const LoanApproval = props => {
  const dispatch = useDispatch();
  const [approvalDetail, setApprovalDetail] = useState('');
  const [approvalStatus, setApprovalStatus] = useState(false);
  const [listModalData, setListModalData] = useState([]);
  const [selectedApproval, setSelectedApproval] = useState('');
  const [profileDetail, setProfileDetail] = useState('');
  const [customerListModal, setCustomerListModal] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  // const [onSelectCustomer, setOnSelectCustomer] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [applicantStatus, setApplicantStatus] = useState(false);
  const [applicantStatusMsg, setApplicantStatusMsg] = useState('');

  useEffect(() => {
    handleGetAllCustomer(
      props.profile.entity[0].StaffID,
      props.profile.entity[0].BoId,
    );
    handleProfile();
  }, [props.navigation]);

  const handleGetAllCustomer = (staffId, BoId) => {
    console.log('STAFFID', staffId);
    let tempUrl = `?mode=CustomerLoanApproval&loginId=${staffId}&BranchId=${BoId}`;
    dispatch(
      GetLoanProposalCustomerListRequest(tempUrl, response => {
        console.log(
          'Get Loan Proposal Customer Response=>',
          response.entity.entity,
        );
        let tempList = response.entity.entity;
        setCustomerList(tempList);
        setCustomerListModal(true);
      }),
    );
  };

  // const handleGetAllCustomer = staffId => {
  //   console.log('STAFFID', staffId);
  //   let tempUrl = `?mode=ApplicantForLoanProposal&LoginId=${staffId}`;
  //   dispatch(
  //     GetAllCustomerRequest(tempUrl, response => {
  //       console.log('Get All Customer Response=>', response.entity.entity);
  //       let tempList = response.entity.entity;
  //       setCustomerList(tempList);
  //     }),
  //   );
  // };

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
      BranchId: profileDetail.BoId,
    };
    console.log('DATA=>', data);
    dispatch(
      UpdateLoanApprovalRequest(data, response => {
        console.log('Update loan status=>', response);
        if (response.statusCode === 200) {
          setModalVisible(true);
          setApplicantStatus(true);
          setApplicantStatusMsg('Successfully! Submitted Loan Approval');

          // Toast.show('Successfully! Submitted Loan Approval', Toast.SHORT);
          // props.navigation.goBack();
        } else {
          setModalVisible(true);
          setApplicantStatus(false);
          setApplicantStatusMsg('Faild! Loan Approval. Try Again ');
        }
      }),
    );

    console.log('success');
  };

  const handleProceed = item => {
    console.log('ITEM=>', item);
    handleApprovalDetail(item.ProposalId);
    // setOnSelectCustomer(item);
    setCustomerListModal(false);
  };

  const handleApprovalDetail = proposal_Id => {
    let data = {
      proposalId: proposal_Id,
      boID: profileDetail.BoId,
    };
    // let proposalId = proposal_Id;
    dispatch(
      LoanProposalDetailRequest(data, response => {
        console.log('Loan Proposal Detail', response.entity.entity[0]);
        setApprovalDetail(response.entity.entity[0]);
      }),
    );
  };

  const handleSuccessModalClose = () => {
    setModalVisible(false);
    handleGetAllCustomer(profileDetail.StaffID, profileDetail.BoId);
  };

  const handleModalClose = () => {
    setModalVisible(false);
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
              title={approvalDetail.PurposeName}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'EMI Amount'}
              title={approvalDetail.TotalIntAmount}
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
            <GradientButton
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
        heading={'Select Approval Status'}
      />
      <CustomerListModal
        backOnPress={() => props.navigation.goBack()}
        visible={customerListModal}
        data={customerList}
        onPress={item => handleProceed(item)}
      />
      <CustomAlert
        visible={modalVisible}
        topIcon={
          applicantStatus ? R.images.successIcon : R.images.cancelRedIcon
        }
        modalColor={applicantStatus ? R.colors.appColor : R.colors.redColor}
        title={applicantStatus ? 'Success' : 'Failed'}
        subTitle={applicantStatusMsg}
        onPress={() => {
          applicantStatus ? handleSuccessModalClose() : handleModalClose();
        }}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.loanProposalDetailRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(LoanApproval);
