/* eslint-disable no-undef */
import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  CustomAlert,
  GroupDropDownModal,
  Header,
  ListGroupModal,
  StoryScreen,
  SwiperButtonComp,
} from '../../components';
import R from '../../res/R';
import moment from 'moment';
import CommonFunctions from '../../utils/CommonFunctions';
import {useDispatch, connect} from 'react-redux';
import {RegGroupRequest} from '../../actions/regGroup.action';
import Toast from 'react-native-simple-toast';
import {GetAllCustomerRequest} from '../../actions/role.action';
import Styles from './style';
import {
  GetGroupDetailRequest,
  GetGroupDropDownRequest,
} from '../../actions/dropdown.action';

const GroupForm = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupAddress, setGroupAddress] = useState('');
  const [existingGroupName, setExistingGroupName] = useState('');
  const [branchManager, setBranchManager] = useState('');
  const [centerName, setCenterName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [landmark, setLandMark] = useState('');
  const [firstMeetDate, setFirstMeetDate] = useState('');
  const [empModal, setEmpModal] = useState(false);
  const [empList, setEmpList] = useState();
  const [selectedEmpList, setSelectedEmpList] = useState([]);
  const [selectedEmpIdList, setSelectedEmpIdList] = useState([]);
  const [groupDropDownModal, setGroupDropDownModal] = useState(false);
  const [groupDropDownList, setGroupDropDownList] = useState([]);
  const [groupDropDownType, setGroupDropDownType] = useState('');
  const [swiperValue, setSwiperValue] = useState(true);
  const [exitEmpList, setExitEmpList] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [messageStatus, setMessageStatus] = useState('');

  useEffect(() => {
    handleGetAllCustomer(props.profile.entity[0].StaffID);
    handleProfile();
  }, [props.navigation]);

  const handleProfile = () => {
    console.log('PROPS PROFILE', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
  };

  const handleGetAllCustomer = staffId => {
    let tempUrl = `?mode=Get&LoginId=${staffId}`;

    dispatch(
      GetAllCustomerRequest(tempUrl, response => {
        console.log('Get All Customer Response=>', response.entity.entity);
        let tempList = response.entity.entity;
        let tempSelectedList = [];
        for (let i = 0; i < tempList.length; i++) {
          console.log('ITEM=>', tempList[i].ApplicantName);
          tempSelectedList.push({
            ApplicantName: tempList[i].ApplicantName,
            ApplicantId: tempList[i].ApplicantId,
            ApplicantDateofbirth: tempList[i].ApplicantDateofbirth,
            Groupstatus: 0,
            selected: false,
          });
        }
        setEmpList(tempSelectedList);
      }),
    );
  };

  const handleValidation = () => {
    return (
      CommonFunctions.isBlank(branchManager, 'Please select branch manager') &&
      CommonFunctions.isBlank(centerName, 'Please select center name') &&
      CommonFunctions.isBlank(firstMeetDate, 'Please select meeting day') &&
      handleGroupValidation() &&
      CommonFunctions.isBlank(groupAddress.trim(), 'please enter address') &&
      CommonFunctions.isBlank(postalCode.trim(), 'please enter postal code') &&
      handleCustomerList()
    );
  };

  const handleGroupValidation = () => {
    if (swiperValue) {
      if (groupName.trim() === '') {
        Toast.show('please enter group name', Toast.SHORT);
        return false;
      } else {
        return true;
      }
    } else {
      if (existingGroupName === '') {
        Toast.show('please select group name', Toast.SHORT);
        return false;
      } else {
        return true;
      }
    }
  };

  const handleCustomerList = () => {
    if (selectedEmpList.length === 0 && swiperValue) {
      Toast.show('please select customer details', Toast.SHORT);
      return false;
    } else {
      return true;
    }
  };

  const handleGroupSubAPI = () => {
    if (handleValidation()) {
      handleGroupSubmit();
    }
  };

  const handleGroupSubmit = () => {
    let data = {
      groupId: 0,
      groupCode: 'test',
      branchId: branchManager.BoId,
      groupName: groupName,
      bmId: 0,
      testerId: 0,
      staffid: profileDetail.StaffID,
      crtDate: '2023-06-24T16:30:17.748Z',
      approveStatus: 'string',
      approvedBy: 0,
      approveDate: '2023-06-24T16:30:17.748Z',
      approvalReason: postalCode,
      firstMeetingDate: firstMeetDate.RuleID,
      remarks: landmark,
      isActive: true,
      createdDate: '2023-06-24T16:30:17.748Z',
      updatedDate: '2023-06-24T16:30:17.748Z',
      createdBy: 0,
      updatedBy: 0,
      processDate: '2023-06-24T16:30:17.748Z',
      staff_Recg: 0,
      customerList: selectedEmpIdList,
      centerId: centerName.CenterId,
      customerId: 1,
      g_LandMark: landmark,
      g_PostalCode: postalCode,
      g_Address: groupAddress,
    };

    console.log('GROUP DATA=>', data);
    dispatch(
      RegGroupRequest(data, response => {
        console.log('response =>', response);
        if (response.statusCode === 200) {
          Toast.show('Successfully! save group form details', Toast.SHORT);
          // props.navigation.goBack();
          setMessageStatus('success');
          setToastMessage('Successfully! save group form details');
          setModalVisible(true);
        } else {
          setMessageStatus('faild');
          setToastMessage('some error occrued');
          setModalVisible(true);
        }
      }),
    );
  };

  const handleModalClose = () => {
    setModalVisible(false);
    props.navigation.goBack();
  };

  const handleRoleSelect = (item, index) => {
    let tempList = empList;
    let arr = tempList.map((item1, index1) => {
      if (index1 === index) {
        item1.selected = !item1.selected;
      }
      return {...item1};
    });
    setEmpList(arr);
    // setEmpModal(false);
  };

  const handleConfirmOnPress = () => {
    let tempFilter = empList.filter(item => item.selected === true);
    setSelectedEmpList(tempFilter);
    console.log('FILTER', tempFilter);
    let tempIdList = [];
    tempFilter.forEach(item => {
      console.log('ITEM=>', item.ApplicantId);
      tempIdList.push(JSON.stringify(item.ApplicantId));
    });

    console.log('TEMPID LIS', tempIdList);
    setSelectedEmpIdList(tempIdList);
    setEmpModal(false);
  };

  const handleGroupDropDown = mode => {
    let tempCenter =
      centerName.CenterId !== undefined ? centerName.CenterId : 0;
    setGroupDropDownType(mode);
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
    groupDropDownType === 'Branch' && setBranchManager(item);
    groupDropDownType === 'GroupCenter' && setCenterName(item);
    groupDropDownType === 'MeetingDay' && setFirstMeetDate(item);
    groupDropDownType === 'Getgroup' && handleGroupDetailAPI(item);
    setGroupDropDownModal(false);
  };

  const handleGroupDetailAPI = item => {
    setExistingGroupName(item);
    handleGroupCustomerList(item);
    let data = {
      mode: 'GetgroupInfo',
      group_id: item.GroupId,
      login_id: profileDetail.StaffID,
    };
    dispatch(
      GetGroupDetailRequest(data, response => {
        console.log('RESPONSE GROUP ', response);
        if (response.statusCode === 200) {
          let resValue = response.entity.entity[0];
          setGroupAddress(resValue.G_Address);
          setPostalCode(resValue.G_PostalCode);
          setLandMark(resValue.G_LandMark);
          let data = {
            RoleName: resValue.FirstMeetingText,
            RuleID: resValue.FirstMeetingDate,
          };
          setFirstMeetDate(data);
        }
      }),
    );
    console.log('GROUP INFO==>', item);
  };

  const handleGroupCustomerList = item => {
    let data = {
      mode: 'Groupcustomer',
      group_id: item.GroupId,
      login_id: profileDetail.StaffID,
    };
    dispatch(
      GetGroupDetailRequest(data, response => {
        console.log('GROUP CUStomer List ', response);
        let tempList = response.entity.entity;
        let tempSelectedList = [];
        for (let i = 0; i < tempList.length; i++) {
          console.log('ITEM=>', tempList[i].ApplicantName);
          tempSelectedList.push({
            ApplicantName: tempList[i].ApplicantName,
            ApplicantId: tempList[i].ApplicantId,
            ApplicantDateofbirth: tempList[i].ApplicantDateofbirth,
            Groupstatus: tempList[i].Groupstatus,
            selected: false,
          });
        }
        setEmpList(tempSelectedList);
      }),
    );
  };

  const handleSwiperOnPress = () => {
    setGroupName('');
    setExistingGroupName('');
    setGroupAddress('');
    setPostalCode('');
    setLandMark('');
    setSwiperValue(!swiperValue);
    !swiperValue && handleGetAllCustomer(props.profile.entity[0].StaffID);
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={Styles.flexView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Group Form'}
        />

        <SwiperButtonComp
          buttonStatus={swiperValue}
          onPressButton={() => handleSwiperOnPress()}
          activeTitleText={!swiperValue ? 'Existing Group' : 'New Group'}
          disableTitleText={!swiperValue ? 'New Group' : 'Existing Group'}
        />

        <ScrollView contentContainerStyle={Styles.scrollFlexGrow}>
          <View style={Styles.flexView}>
            <View style={Styles.mainView}>
              <AppCardPress
                disabled={true}
                headTitle={'Staff Name'}
                title={
                  profileDetail !== '' ? profileDetail.StaffName : 'Staff Name'
                }
                TextColor={R.colors.secAppColor}
                headTitleColor={R.colors.darkGreenColor}
              />
              <AppCardPress
                onPress={() => handleGroupDropDown('Branch')}
                headTitle={'Branch Name *'}
                title={
                  branchManager !== '' ? branchManager.BoCode : 'Branch Name'
                }
                TextColor={
                  branchManager !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  branchManager !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppCardPress
                onPress={() => handleGroupDropDown('GroupCenter')}
                headTitle={'Center Name *'}
                title={
                  centerName !== '' ? centerName.CenterName : 'Center Name'
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

              {swiperValue ? (
                <AppTextInput
                  placeholder={'Create Group Name'}
                  headTitle={'Create Group Name *'}
                  headTitleColor={
                    groupName !== ''
                      ? R.colors.darkGreenColor
                      : R.colors.textPriColor
                  }
                  value={groupName}
                  onChangeText={text => setGroupName(text)}
                  returnKeyType={'next'}
                  onSubmitEditing={() => mnameRef.current?.focus()}
                />
              ) : (
                <AppCardPress
                  onPress={() => handleGroupDropDown('Getgroup')}
                  headTitle={'Group Name *'}
                  title={
                    existingGroupName !== ''
                      ? existingGroupName.GroupName
                      : 'Group Name'
                  }
                  TextColor={
                    existingGroupName !== ''
                      ? R.colors.secAppColor
                      : R.colors.placeholderTextColor
                  }
                  headTitleColor={
                    existingGroupName !== ''
                      ? R.colors.darkGreenColor
                      : R.colors.textPriColor
                  }
                  rightIcon={R.images.dropdownIcon}
                />
              )}
              <AppCardPress
                disabled={swiperValue ? false : true}
                onPress={() => handleGroupDropDown('MeetingDay')}
                headTitle={'First Meeting Day *'}
                title={
                  firstMeetDate !== ''
                    ? firstMeetDate.RoleName
                    : 'First Meeting Day'
                }
                TextColor={
                  firstMeetDate !== ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  firstMeetDate !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={swiperValue ? R.images.dropdownIcon : null}
              />
              <AppTextInput
                editable={swiperValue ? true : false}
                placeholder={'Address'}
                headTitle={'Address *'}
                headTitleColor={
                  groupAddress !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={groupAddress}
                onChangeText={text => setGroupAddress(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppTextInput
                editable={swiperValue ? true : false}
                placeholder={'Postal Code'}
                headTitle={'Postal Code *'}
                headTitleColor={
                  postalCode !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={postalCode}
                maxLength={6}
                onChangeText={text => setPostalCode(text)}
                returnKeyType={'next'}
              />
              <AppTextInput
                editable={swiperValue ? true : false}
                placeholder={'Landmark'}
                headTitle={'Landmark'}
                headTitleColor={
                  landmark !== ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={landmark}
                onChangeText={text => setLandMark(text)}
                returnKeyType={'next'}
              />
              {swiperValue && (
                <AppCardPress
                  onPress={() => {
                    setEmpModal(true);
                  }}
                  title={'Select Customer Detail *'}
                  TextColor={
                    selectedEmpList.length !== 0
                      ? R.colors.secAppColor
                      : R.colors.placeholderTextColor
                  }
                  headTitleColor={
                    selectedEmpList.length !== 0
                      ? R.colors.darkGreenColor
                      : R.colors.textPriColor
                  }
                  rightIcon={R.images.dropdownIcon}
                  marginBottom={R.fontSize.Size2}
                />
              )}
              {!swiperValue && existingGroupName !== '' && (
                <AppCardPress
                  onPress={() => {
                    setEmpModal(true);
                  }}
                  title={'Select Customer Detail'}
                  TextColor={
                    selectedEmpList.length !== 0
                      ? R.colors.secAppColor
                      : R.colors.placeholderTextColor
                  }
                  headTitleColor={
                    selectedEmpList.length !== 0
                      ? R.colors.darkGreenColor
                      : R.colors.textPriColor
                  }
                  rightIcon={R.images.dropdownIcon}
                  marginBottom={R.fontSize.Size2}
                />
              )}
              {selectedEmpList.length !== 0 &&
                selectedEmpList.map((item, index) => {
                  return (
                    <View style={Styles.headMainView} key={index}>
                      <View style={Styles.headView}>
                        <Text style={Styles.modelHeadText} numberOfLines={1}>
                          {item.ApplicantName}
                        </Text>
                      </View>
                      <View style={Styles.headView}>
                        <Text style={Styles.modelHeadText} numberOfLines={1}>
                          {item.ApplicantId}
                        </Text>
                      </View>
                      <View style={[Styles.headView, {borderRightWidth: 0}]}>
                        <Text style={Styles.modelHeadText} numberOfLines={1}>
                          {moment(item.ApplicantDateofbirth).format(
                            'Do-MMM-YYYY',
                          )}
                        </Text>
                      </View>
                    </View>
                  );
                })}
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <AppButton
            onPress={() => handleGroupSubAPI()}
            marginHorizontal={R.fontSize.Size30}
            title={'Submit'}
          />
        </View>
      </SafeAreaView>
      <ListGroupModal
        visible={empModal}
        onPressClose={() => setEmpModal(false)}
        onPress={(item, index) => handleRoleSelect(item, index)}
        dataList={empList}
        onPressConfirm={() => handleConfirmOnPress()}
      />
      <GroupDropDownModal
        visible={groupDropDownModal}
        cancelOnPress={() => setGroupDropDownModal(false)}
        onPress={item => handleGroupDropDownSelect(item)}
        dataList={groupDropDownList}
      />
      <CustomAlert
        visible={modalVisible}
        topIcon={
          messageStatus === 'success'
            ? R.images.successIcon
            : R.images.cancelRedIcon
        }
        modalColor={
          messageStatus === 'success' ? R.colors.appColor : R.colors.redColor
        }
        title={messageStatus === 'success' ? 'Success!' : 'Error'}
        subTitle={toastMessage}
        onPress={() => handleModalClose()}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.regGroupRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(GroupForm);
