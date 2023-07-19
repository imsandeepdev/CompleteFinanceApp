import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  CustomTextInput,
  Header,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
import DatePicker from 'react-native-date-picker';
import moment from 'moment';



const GrtForm = props => {
  const [branchName, setBranchName] = useState('');
  const [staffName, setStaffName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [centerName, setCenterName] = useState('');

  const [approvalDate, setApprovalDate] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [approvalBy, setApprovalBy] = useState('');
  
  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'GRT'}
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
              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Branch Name'}
                title={branchName != '' ? branchName : 'Branch Name'}
                TextColor={
                  branchName != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  branchName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Staff Name'}
                title={staffName != '' ? staffName : 'Staff Name'}
                TextColor={
                  staffName != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  staffName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Center name'}
                title={centerName != '' ? centerName : 'Center name'}
                TextColor={
                  centerName != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  centerName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Group Name'}
                title={groupName != '' ? groupName : 'Group Name'}
                TextColor={
                  groupName != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  groupName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Approved Status'}
                title={
                  approvalStatus != '' ? approvalStatus : 'Approved Status'
                }
                TextColor={
                  approvalStatus != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  approvalStatus != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Approved Date'}
                title={approvalDate != '' ? approvalDate : 'Approved Date'}
                TextColor={
                  approvalDate != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  approvalDate != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />

              <AppCardPress
                onPress={() => console.log('First Meeting Date')}
                headTitle={'Approved By'}
                title={approvalBy != '' ? approvalBy : 'Approved By'}
                TextColor={
                  approvalBy != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  approvalBy != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <AppButton marginHorizontal={R.fontSize.Size30} title={'Submit'} />
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default GrtForm;
