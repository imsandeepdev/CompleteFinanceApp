/* eslint-disable no-undef */
import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, ScrollView, SafeAreaView} from 'react-native';
import {
  AppCardPress,
  AppTextInput,
  CustomAlert,
  GradientButton,
  GroupDropDownModal,
  Header,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch, connect} from 'react-redux';
import {RegCenterRequest} from '../../actions/regCenter.action';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';
import style from './style';
import {GetGroupDropDownRequest} from '../../actions/dropdown.action';

const CenterForm = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState('');
  const [centerName, setCenterName] = useState('');
  const [centerMeetingDay, setCenterMeetingDay] = useState('');
  const [centerMeetingTime, setCenterMeetingTime] = useState('');
  const [centerAddress, setCenterAddress] = useState('');
  const [centerPostalCode, setCenterPostalCode] = useState('');
  const [centerLandmark, setCenterLandmark] = useState('');
  const [isDisplayDate, setIsDisplayDate] = useState(false);
  const [meetingDay, setMeetingDay] = useState('meetingDay');
  const [groupDropDownModal, setGroupDropDownModal] = useState(false);
  const [groupDropDownList, setGroupDropDownList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [applicantStatus, setApplicantStatus] = useState(false);
  const [applicantStatusMsg, setApplicantStatusMsg] = useState('');
  const [selectedHeading, setSelectedHeading] = useState('');

  useEffect(() => {
    handleProfile();
  }, [props.navigation]);

  const handleProfile = () => {
    console.log('PROPS PROFILE', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
  };

  const handleValidation = () => {
    return (
      CommonFunctions.isBlank(centerName.trim(), 'please enter center name') &&
      CommonFunctions.isBlank(
        centerMeetingDay,
        'please select center meeting day',
      ) &&
      CommonFunctions.isBlank(
        centerMeetingTime,
        'please select center meeting time',
      ) &&
      CommonFunctions.isBlank(centerAddress.trim(), 'please enter address') &&
      CommonFunctions.isBlank(
        centerPostalCode.trim(),
        'please enter postal code',
      ) &&
      CommonFunctions.isBlank(centerLandmark.trim(), 'please enter landmark')
    );
  };

  const handleCenterSumitAPI = () => {
    if (handleValidation()) {
      handleCenterSubmit();
    }
  };

  const handleCenterSubmit = () => {
    let data = {
      centerId: 0,
      branchId: profileDetail.BoId,
      staffId_Org: profileDetail.StaffID,
      grtId: 0,
      staffId_Recg: profileDetail.StaffID,
      centercode: 'string',
      centerName: centerName,
      areaName: 'string',
      formationDate: '2023-06-24T16:43:24.770Z',
      centerMeetingDay: centerMeetingDay.RuleID,
      centerMeetingTime: '2023-06-24T16:43:24.770Z',
      reportingDay: 0,
      address: centerAddress,
      village: 'string',
      postalCode: centerPostalCode,
      landMark: centerLandmark,
      dissolvedDate: '2023-06-24T16:43:24.770Z',
      locationStatus: 0,
      transferStatus: 'string',
      tranferDate: '2023-06-24T16:43:24.770Z',
      isActive: true,
      createdBy: 0,
      createdDate: '2023-06-24T16:43:24.770Z',
      updatedBy: 0,
      updatedDate: '2023-06-24T16:43:24.770Z',
    };

    dispatch(
      RegCenterRequest(data, response => {
        console.log('Response Center=>', response);
        if (response.statusCode === 200) {
          setModalVisible(true);
          setApplicantStatus(true);
          setApplicantStatusMsg('Successfully! save center form details');
        } else {
          setModalVisible(true);
          setApplicantStatus(false);
          setApplicantStatusMsg('Faild! Try Again ');
        }
      }),
    );
  };

  const handleGroupDropDown = mode => {
    setSelectedHeading('Select Meeting Day');
    let tempCenter =
      centerName.CenterId !== undefined ? centerName.CenterId : 0;

    let data = `?mode=${mode}&StaffId=${profileDetail.StaffID}&BranchId=${profileDetail.BoId}&CenterId=${tempCenter}&GroupId=0`;
    dispatch(
      GetGroupDropDownRequest(data, response => {
        console.log('Group drop down res=>', response);
        setGroupDropDownList(response.entity.entity);
      }),
    );
    setGroupDropDownModal(true);
  };

  const handleGroupDropDownSelect = item => {
    console.log('ITEM SELECT', item);
    setCenterMeetingDay(item);
    setGroupDropDownModal(false);
  };

  const handleSuccessModalClose = () => {
    setModalVisible(false);
    props.navigation.goBack();
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <StoryScreen>
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Center Form'}
        />

        <ScrollView contentContainerStyle={style.scrollFlexGrow}>
          <View style={style.mainView}>
            <View style={style.topMainView}>
              <AppCardPress
                disabled={true}
                headTitle={'Staff Name'}
                title={
                  profileDetail !== '' ? profileDetail.StaffName : 'Staff Name'
                }
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppTextInput
                placeholder={'Center name'}
                headTitle={'Center name *'}
                headTitleColor={
                  centerName !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={centerName}
                onChangeText={text => setCenterName(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppCardPress
                // onPress={() => (
                //   setIsDisplayDate(true), setMeetingDay('meetingDay')
                // )}
                onPress={() => handleGroupDropDown('MeetingDay')}
                headTitle={'Center Meeting Day *'}
                title={
                  centerMeetingDay !== ''
                    ? centerMeetingDay.RoleName
                    : 'Center Meeting Day'
                }
                TextColor={
                  centerMeetingDay !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerMeetingDay !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppCardPress
                onPress={() => (
                  setIsDisplayDate(true), setMeetingDay('meetingTime')
                )}
                headTitle={'Center Meeting Time *'}
                title={
                  centerMeetingTime !== ''
                    ? centerMeetingTime
                    : 'Center Meeting Time'
                }
                TextColor={
                  centerMeetingTime !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerMeetingTime !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppTextInput
                placeholder={'Address'}
                headTitle={'Address *'}
                headTitleColor={
                  centerAddress !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={centerAddress}
                onChangeText={text => setCenterAddress(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppTextInput
                placeholder={'Postal Code'}
                headTitle={'Postal Code *'}
                headTitleColor={
                  centerPostalCode !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={centerPostalCode}
                onChangeText={text => setCenterPostalCode(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppTextInput
                placeholder={'Landmark'}
                headTitle={'Landmark *'}
                headTitleColor={
                  centerLandmark !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={centerLandmark}
                onChangeText={text => setCenterLandmark(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <DatePicker
                modal
                minimumDate={
                  meetingDay !== 'meetingTime'
                    ? new Date()
                    : new Date('2000-01-01')
                }
                open={isDisplayDate}
                date={
                  meetingDay !== 'meetingTime'
                    ? new Date()
                    : new Date('2000-01-01')
                }
                mode={meetingDay !== 'meetingTime' ? 'date' : 'time'}
                onConfirm={date => {
                  setIsDisplayDate(false);
                  console.log('DATE', date);
                  meetingDay === 'meetingDay' &&
                    setCenterMeetingDay(moment(date).format('Do MMM YYYY'));
                  meetingDay === 'meetingTime' &&
                    setCenterMeetingTime(moment(date).format('hh:mm A'));
                }}
                onCancel={() => {
                  setIsDisplayDate(false);
                }}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <GradientButton
            onPress={() => handleCenterSumitAPI()}
            marginHorizontal={R.fontSize.Size30}
            title={'Submit'}
          />
        </View>
      </SafeAreaView>
      <GroupDropDownModal
        visible={groupDropDownModal}
        cancelOnPress={() => setGroupDropDownModal(false)}
        onPress={item => handleGroupDropDownSelect(item)}
        dataList={groupDropDownList}
        heading={selectedHeading}
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
  loading: state.regGroupRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(CenterForm);
