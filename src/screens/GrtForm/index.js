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
  GroupDropDownModal,
  Header,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import {connect,useDispatch} from 'react-redux';
import { GetGroupDropDownRequest } from '../../actions/dropdown.action';



const GrtForm = props => {

  const dispatch = useDispatch()
  const [profileDetail, setProfileDetail] = useState('');
  const [branchName, setBranchName] = useState('');
  const [staffName, setStaffName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [centerName, setCenterName] = useState('');
  const [approvalDate, setApprovalDate] = useState('');
  const [approvalStatus, setApprovalStatus] = useState('');
  const [approvalBy, setApprovalBy] = useState('');
  const [grtDropDownModal,setGrtDropDownModal] = useState(false)
  const [grtDropDownList, setGrtDropDownList] = useState([])
  const [grtDropDownType, setGrtDropDownType] = useState('');


  useEffect(()=>{
    handleProfile()
  },[props.navigation])

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

  const handleGrtDropDownSelect = (item) =>{
    console.log('ITEM SELECT', item);
    grtDropDownType == 'Branch' && setBranchName(item);
    grtDropDownType == 'Center' && setCenterName(item);
    grtDropDownType == 'MeetingDay' && setFirstMeetDate(item);
    setGrtDropDownModal(false);

  }
  
  return (
    <StoryScreen loading={props.loading}>
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
                disabled={true}
                headTitle={'Staff Name'}
                title={
                  profileDetail != '' ? profileDetail.StaffName : 'Staff Name'
                }
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppCardPress
                onPress={() => handleGrtDropDown('Branch')}
                headTitle={'Branch Name'}
                title={branchName != '' ? branchName.BoCode : 'Branch Name'}
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
                onPress={() => handleGrtDropDown('Center')}
                headTitle={'Center name'}
                title={centerName != '' ? centerName.CenterName : 'Center name'}
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
                disabled={true}
                headTitle={'Approved Date'}
                title={moment().format('DD-MM-YYYY')}
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
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
      <GroupDropDownModal
        visible={grtDropDownModal}
        cancelOnPress={() => setGrtDropDownModal(false)}
        onPress={item => handleGrtDropDownSelect(item)}
        dataList={grtDropDownList}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(GrtForm);
