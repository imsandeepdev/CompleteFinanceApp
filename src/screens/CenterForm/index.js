import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView
} from 'react-native';
import {AppButton, AppCardPress, AppTextInput, CustomTextInput, Header, StoryScreen} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {useDispatch,connect} from 'react-redux';
import { RegCenterRequest } from '../../actions/regCenter.action';
import CommonFunctions from '../../utils/CommonFunctions';
import Toast from 'react-native-simple-toast';


const CenterForm = props => {

    const dispatch = useDispatch()
    const [staffName, setStaffName] = useState('')
    const [profileDetail, setProfileDetail] = useState('');
    const [centerName, setCenterName] = useState('');
    const [centerMeetingDay, setCenterMeetingDay] = useState('');
    const [centerMeetingTime, setCenterMeetingTime] = useState('');
    const [centerAddress, setCenterAddress] = useState('');
    const [centerPostalCode, setCenterPostalCode] = useState('');
    const [centerLandmark, setCenterLandmark] = useState('');
    const [centerDissolvedDate, setCenterDissolvedDate] = useState('');
    const [centerLocationStatus, setCenterLocationStatus] = useState('');
    const [isDisplayDate, setIsDisplayDate] = useState(false);
    const [meetingDay,setMeetingDay]= useState('meetingDay')

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
      CommonFunctions.isBlank(centerAddress.trim(), 'please enter address') &&
      CommonFunctions.isBlank(centerPostalCode.trim(), 'please enter postal code') &&
      CommonFunctions.isBlank(centerLandmark.trim(), 'please enter landmark')

    );
  }

  const handleCenterSumitAPI =() => {
    if(handleValidation())
    {
      handleCenterSubmit()
    }
  }

  const handleCenterSubmit = () => {
    let data = {
      centerId: 0,
      branchId: 0,
      staffId_Org: profileDetail.StaffID,
      grtId: 0,
      staffId_Recg: profileDetail.StaffID,
      centercode: 'string',
      centerName: centerName,
      areaName: 'string',
      formationDate: '2023-06-24T16:43:24.770Z',
      centerMeetingDay: 2,
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

    dispatch(RegCenterRequest(data,response =>{
      console.log("Response Center=>", response)
      if (response.message == 'Success') {
        Toast.show('Successfully! save center form details', Toast.SHORT);
        props.navigation.goBack();
      }
    }))
    
  }



  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Center Form'}
        />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={{flex: 1}}>
            <View
              style={{
                flex: 1,
                paddingHorizontal: R.fontSize.Size24,
                paddingTop: R.fontSize.Size50,
              }}>
              {/* <AppTextInput
                placeholder={'Staff name'}
                headTitle={'Staff name'}
                headTitleColor={
                  staffName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={staffName}
                onChangeText={text => setStaffName(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              /> */}
              <AppCardPress
                disabled={true}
                headTitle={'Staff Name'}
                title={
                  profileDetail != '' ? profileDetail.StaffName : 'Staff Name'
                }
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppTextInput
                placeholder={'Center name'}
                headTitle={'Center name'}
                headTitleColor={
                  centerName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={centerName}
                onChangeText={text => setCenterName(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppCardPress
                onPress={() => (
                  setIsDisplayDate(true), setMeetingDay('meetingDay')
                )}
                headTitle={'Center Meeting Day'}
                title={
                  centerMeetingDay != ''
                    ? centerMeetingDay
                    : 'Center Meeting Day'
                }
                TextColor={
                  centerMeetingDay != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerMeetingDay != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppCardPress
                onPress={() => (
                  setIsDisplayDate(true), setMeetingDay('meetingTime')
                )}
                headTitle={'Center Meeting Time'}
                title={
                  centerMeetingTime != ''
                    ? centerMeetingTime
                    : 'Center Meeting Time'
                }
                TextColor={
                  centerMeetingTime != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerMeetingTime != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppTextInput
                placeholder={'Address'}
                headTitle={'Address'}
                headTitleColor={
                  centerAddress != ''
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
                headTitle={'Postal Code'}
                headTitleColor={
                  centerPostalCode != ''
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
                headTitle={'Landmark'}
                headTitleColor={
                  centerLandmark != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={centerLandmark}
                onChangeText={text => setCenterLandmark(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              {/* <AppCardPress
                onPress={() => (
                  setIsDisplayDate(true), setMeetingDay('dissolvedDate')
                )}
                headTitle={'Dissolved Date'}
                title={
                  centerDissolvedDate != ''
                    ? centerDissolvedDate
                    : 'Dissolved Date'
                }
                TextColor={
                  centerDissolvedDate != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerDissolvedDate != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              /> */}
              <DatePicker
                modal
                // maximumDate={new Date()}
                minimumDate={
                  meetingDay != 'meetingTime'
                    ? new Date()
                    : new Date('2000-01-01')
                }
                open={isDisplayDate}
                date={
                  meetingDay != 'meetingTime'
                    ? new Date()
                    : new Date('2000-01-01')
                }
                mode={meetingDay != 'meetingTime' ? 'date' : 'time'}
                onConfirm={date => {
                  setIsDisplayDate(false);
                  console.log('DATE', date);
                  meetingDay == 'meetingDay' &&
                    setCenterMeetingDay(moment(date).format('Do MMM YYYY'));
                  meetingDay == 'meetingTime' &&
                    setCenterMeetingTime(moment(date).format('hh:mm A'));
                  meetingDay == 'dissolvedDate' &&
                    setCenterDissolvedDate(moment(date).format('Do MMM YYYY'));
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
          <AppButton
            onPress={() => handleCenterSumitAPI()}
            marginHorizontal={R.fontSize.Size30}
            title={'Submit'}
          />
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.regGroupRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps) (CenterForm);
