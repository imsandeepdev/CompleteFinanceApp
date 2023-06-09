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


const CenterForm = props => {

    const [staffName, setStaffName] = useState('')
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
              <AppTextInput
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
              <AppCardPress
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
              />
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
            marginHorizontal={R.fontSize.Size30} 
            title={'Submit'} 
          />
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default CenterForm;
