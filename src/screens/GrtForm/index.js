import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  Pressable,
} from 'react-native';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  DocumentViewModal,
  GroupDropDownModal,
  Header,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import moment from 'moment';
import {connect, useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import {
  GetGroupDropDownRequest,
  GetGroupWiseCustomerDropDownRequest,
} from '../../actions/dropdown.action';
import Styles from './style';
import AppContent from '../../utils/AppContent';
import CommonFunctions from '../../utils/CommonFunctions';
import {RegGRTRequest} from '../../actions/regGRT.action';

const CustomCardView = props => {
  return (
    <View style={Styles.headMainView}>
      <View style={Styles.headView}>
        <Text style={Styles.modelHeadText} numberOfLines={1}>
          {props.title}
        </Text>
      </View>
      <View style={Styles.headView}>
        <Text style={Styles.modelHeadText} numberOfLines={1}>
          {props.subTitle}
        </Text>
      </View>
      <Pressable
        disabled={props.disabled}
        onPress={props.onPressUdid}
        style={({pressed}) => [
          Styles.headView,
          {
            flex: 1 / 2,
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        {props.onPressUdid ? (
          <Image
            source={{
              uri: props.udidURI,
            }}
            resizeMode={'cover'}
            style={Styles.image100}
          />
        ) : (
          <Text style={Styles.modelHeadText}>{'UDID'}</Text>
        )}
      </Pressable>
      <Pressable
        disabled={props.disabled}
        onPress={props.onPressBank}
        style={({pressed}) => [
          Styles.headView,
          {
            borderRightWidth: 0,
            flex: 1 / 2,
            opacity: pressed ? 0.5 : 1,
          },
        ]}>
        {props.onPressBank ? (
          <Image
            source={{
              uri: props.bankURI,
            }}
            resizeMode={'cover'}
            style={Styles.image100}
          />
        ) : (
          <Text style={Styles.modelHeadText}>{'BANK'}</Text>
        )}
      </Pressable>
    </View>
  );
};

const GrtForm = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState('');
  const [branchName, setBranchName] = useState('');
  const [staffName, setStaffName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [centerName, setCenterName] = useState('');
  const [approvalReason, setApprovalReason] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [grtDropDownModal, setGrtDropDownModal] = useState(false);
  const [grtDropDownList, setGrtDropDownList] = useState([]);
  const [grtDropDownType, setGrtDropDownType] = useState('');
  const [documentModal, setDocumentModal] = useState(false);
  const [selectDocument, setSelectDocument] = useState();

  const [groupCustomerList, setGroupCustomerList] = useState([]);

  useEffect(() => {
    handleProfile();
  }, [props.navigation]);

  const handleProfile = () => {
    setProfileDetail(props.profile.entity[0]);
  };

  const handleGrtDropDown = mode => {
    setGrtDropDownType(mode);
    dispatch(
      GetGroupDropDownRequest(mode, response => {
        console.log('Group drop down res=>', response);
        setGrtDropDownList(response.entity.entity);
      }),
    );
    setGrtDropDownModal(true);
  };

  const handleApprovedStatusDropDown = mode => {
    setGrtDropDownType(mode);
    setGrtDropDownList(AppContent.ApprovedStatusGrt);
    setGrtDropDownModal(true);
  };

  const handleGrtDropDownSelect = item => {
    console.log('ITEM SELECT', item);
    grtDropDownType === 'Staff' && setStaffName(item);
    grtDropDownType === 'Branch' && setBranchName(item);
    grtDropDownType === 'Center' && setCenterName(item);
    // eslint-disable-next-line no-undef
    grtDropDownType === 'MeetingDay' && setFirstMeetDate(item);
    grtDropDownType === 'Group' &&
      (setGroupName(item), handleGroupNamePicker('Customer', item.GroupId));
    grtDropDownType === 'ApprovedStatus' && setApprovalStatus(item);
    setGrtDropDownModal(false);
  };

  const handleGroupNamePickerValidation = () => {
    if (centerName !== '') {
      handleGroupNamePicker('Group', centerName.CenterId);
    } else {
      Toast.show('Please firstly select center name', Toast.SHORT);
    }
  };

  const handleGroupNamePicker = (modeName, idNo) => {
    let data = {
      mode: modeName,
      id: idNo,
    };
    dispatch(
      GetGroupWiseCustomerDropDownRequest(data, response => {
        console.log('GROUP WISE RES=>', response);
        if (response.statusCode === 200) {
          if (modeName === 'Group') {
            setGrtDropDownType(modeName);
            setGrtDropDownList(response.entity.entity);
            setGrtDropDownModal(true);
          } else {
            setGroupCustomerList(response.entity.entity);
          }
        }
      }),
    );
  };

  const handleValidationOnSubmit = () => {
    return (
      CommonFunctions.isBlank(branchName, 'Please select branch name') &&
      CommonFunctions.isBlank(centerName, 'Please select center name') &&
      CommonFunctions.isBlank(groupName, 'Please select group name') &&
      CommonFunctions.isBlank(
        approvalStatus,
        'Please select approved status',
      ) &&
      CommonFunctions.isBlank(approvalReason.trim(), 'Please enter reason')
    );
  };

  const handleOnSubmit = () => {
    if (handleValidationOnSubmit()) {
      handleOnSubmitAPI();
    }
  };

  const handleOnSubmitAPI = () => {
    let data = {
      groupId: groupName.GroupId,
      staffid: profileDetail.StaffID,
      approveStatus: `${approvalStatus.id}`,
      approvedBy: profileDetail.StaffID,
      approveDate: `${moment().format()}`,
      approvalReason: 'string',
      firstMeetingDate: 1,
      remarks: 'string',
      updatedDate: `${moment().format()}`,
    };

    console.log('DATA==>', data);

    dispatch(
      RegGRTRequest(data, response => {
        console.log('GRT RES=>', response);
        if (response.statusCode === 200) {
          Toast.show('Successfully! save grt form details', Toast.SHORT);
          props.navigation.goBack();
        }
      }),
    );
  };

  const handleOpenDocumentModal = item => {
    console.log('ITEM', item);
    setSelectDocument(item);
    setDocumentModal(true);
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={Styles.flexView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'GRT'}
        />

        <ScrollView contentContainerStyle={Styles.scrollFlexGrow}>
          <View style={Styles.flexView}>
            <View style={Styles.mainView}>
              <AppCardPress
                onPress={() => handleGrtDropDown('Staff')}
                headTitle={'Staff Name'}
                title={staffName !== '' ? staffName.BoCode : 'Staff Name'}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
                rightIcon={R.images.dropdownIcon}
              />
              <AppCardPress
                onPress={() => handleGrtDropDown('Branch')}
                headTitle={'Branch Name *'}
                title={branchName !== '' ? branchName.BoCode : 'Branch Name'}
                TextColor={
                  branchName !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  branchName !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => handleGrtDropDown('Center')}
                headTitle={'Center name *'}
                title={
                  centerName !== '' ? centerName.CenterName : 'Center name'
                }
                TextColor={
                  centerName !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerName !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              {centerName !== '' && (
                <AppCardPress
                  onPress={() => handleGroupNamePickerValidation()}
                  headTitle={'Group Name *'}
                  title={groupName !== '' ? groupName.GroupName : 'Group Name'}
                  TextColor={
                    groupName !== ''
                      ? R.colors.secAppColor
                      : R.colors.placeholderTextColor
                  }
                  headTitleColor={
                    groupName !== ''
                      ? R.colors.darkGreenColor
                      : R.colors.textPriColor
                  }
                  rightIcon={R.images.dropdownIcon}
                />
              )}

              <AppCardPress
                onPress={() => handleApprovedStatusDropDown('ApprovedStatus')}
                headTitle={'Approved Status *'}
                title={
                  approvalStatus !== ''
                    ? approvalStatus.approvedTitile
                    : 'Approved Status'
                }
                TextColor={
                  approvalStatus !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  approvalStatus !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppTextInput
                placeholder={
                  approvalStatus !== ''
                    ? `${approvalStatus.approvedTitile} Reason`
                    : 'Approved Reason'
                }
                headTitle={
                  approvalStatus !== ''
                    ? `${approvalStatus.approvedTitile} Reason *`
                    : 'Approved Reason *'
                }
                headTitleColor={
                  approvalReason !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={approvalReason}
                onChangeText={text => setApprovalReason(text)}
              />

              <AppCardPress
                disabled={true}
                headTitle={'Approved Date'}
                title={moment().format('DD-MM-YYYY')}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppCardPress
                disabled={true}
                headTitle={'Approved By'}
                title={
                  profileDetail !== '' ? profileDetail.StaffName : 'Approved By'
                }
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />

              {groupCustomerList.length !== 0 && (
                <View style={{marginBottom: R.fontSize.Size20}}>
                  <CustomCardView
                    title={'Applicant'}
                    subTitle={'center'}
                    disabled={true}
                  />
                  {groupCustomerList.map((item, index) => {
                    return (
                      <CustomCardView
                        key={index}
                        title={item.ApplicantName}
                        subTitle={moment(item.ApplicantDateofbirth).format(
                          'Do-MMM-YYYY',
                        )}
                        onPressUdid={() => {
                          handleOpenDocumentModal(item.KycFirstDoc);
                        }}
                        udidURI={`${item.KycFirstDoc}`}
                        bankURI={`${item.KycSecondDoc}`}
                        onPressBank={() => {
                          handleOpenDocumentModal(item.KycSecondDoc);
                        }}
                      />
                    );
                  })}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <AppButton
            onPress={() => handleOnSubmit()}
            marginHorizontal={R.fontSize.Size30}
            title={'Submit'}
          />
        </View>
      </SafeAreaView>
      <GroupDropDownModal
        visible={grtDropDownModal}
        cancelOnPress={() => setGrtDropDownModal(false)}
        onPress={item => handleGrtDropDownSelect(item)}
        dataList={grtDropDownList}
      />
      <DocumentViewModal
        visible={documentModal}
        onPressClose={() => setDocumentModal(false)}
        feedBackOnPress={() => setDocumentModal(false)}
        sourceURL={selectDocument}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(GrtForm);
