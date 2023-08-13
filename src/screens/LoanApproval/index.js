import * as React from 'react'
import {useState,useEffect} from 'react'
import {View,Text,Image,SafeAreaView,ScrollView,Pressable} from 'react-native';
import StoryScreen from '../../components/StoryScreen';
import style from './style';
import { AppButton, AppCardPress, Header, ListViewModal } from '../../components';
import R from '../../res/R';
import {useDispatch,connect} from 'react-redux';
import { ApprovedStatusDropDownRequest, LoanProposalDetailRequest, UpdateLoanApprovalRequest } from '../../actions/loanApproval.action';
import CommonFunctions from '../../utils/CommonFunctions';

const LoanApproval = (props) => {

    const dispatch = useDispatch()
    const [approvalDetail, setApprovalDetail] = useState('')
    const [approvalStatus, setApprovalStatus] = useState(false)
    const [listModalData, setListModalData] = useState([])
    const [selectedApproval, setSelectedApproval] = useState('');

    useEffect(()=>{
      handleApprovalDetail()
    },[props.navigation])

    const handleApprovalDetail = () => {

      let proposalId='13'
      dispatch(LoanProposalDetailRequest(proposalId,response=>{
        console.log('Loan Proposal Detail', response.entity.entity[0]);
        setApprovalDetail(response.entity.entity[0]);
      }))
    }

    const handleApprovedStatusDropDown = () => {
      let data={
        mode:'Status',
        filterId:'0'
      }
      dispatch(ApprovedStatusDropDownRequest(data,response=>{
          console.log('approved status respones=>',response)
          setApprovalStatus(true);
          setListModalData(response.entity.entity);
      }))
    }

    const handleRoleSelect = (item) => {
      setSelectedApproval(item);
      setApprovalStatus(false)
      console.log("ITEM",item)
    }

    const handleValidation = () => {
      return(
        CommonFunctions.isBlank(selectedApproval,'please select approval status')
      )
    }

    const handleLoanSubmit = () =>{
      if(handleValidation())
      {
        handleLoanSubmitAPI()
      }
    }

    const handleLoanSubmitAPI = () => {
      let data = {
        mode: 'Update',
        proposalId: 13,
        customerInfoId: 68,
        staffId: 1,
        approvalStatus: 1,
      };
      dispatch(UpdateLoanApprovalRequest(data,response=>{
        console.log("Update loan status=>",response)
      }))

      console.log("success")
    }

    return (
      <StoryScreen loading={props.loading}>
        <SafeAreaView style={style.mainView}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftSource={R.images.backIcon}
            title={'Loan Approval'}
          />
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: R.fontSize.Size20,
              paddingVertical: R.fontSize.Size20,
            }}>
            <View style={{flex: 1}}>
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
                  selectedApproval != ''
                    ? selectedApproval.RoleName
                    : 'Approval Status'
                }
                TextColor={
                  selectedApproval != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  selectedApproval != ''
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
      </StoryScreen>
    );
}

const mapStateToProps = (state, props) => ({
  loading: state.loanProposalDetailRoot.loading,
});

export default connect(mapStateToProps)(LoanApproval);