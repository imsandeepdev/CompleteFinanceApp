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
  Pressable
} from 'react-native';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  CustomTextInput,
  GroupDropDownModal,
  Header,
  ListGroupModal,
  ListViewModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import CommonFunctions from '../../utils/CommonFunctions';
import {useDispatch,connect} from 'react-redux';
import { RegGroupRequest } from '../../actions/regGroup.action';
import Toast from 'react-native-simple-toast';
import { GetAllCustomerRequest } from '../../actions/role.action';
import Styles from './style';
import { GetCenterDropDownRequest, GetGroupDropDownRequest } from '../../actions/dropdown.action';

let tempList1 = [
  {
    id: 1,
    title: 'Support1',
    selected: false,
  },
  {
    id: 2,
    title: 'Support2',
    selected: false,
  },
  {
    id: 3,
    title: 'Support3',
    selected: false,
  },
  {
    id: 4,
    title: 'Support4',
    selected: false,
  },
];


const GroupForm = props => {

  const dispatch = useDispatch()
  const [profileDetail, setProfileDetail] = useState('');
  const [groupName, setGroupName] = useState('');
  const [groupAddress, setGroupAddress] = useState('');
  const [branchManager, setBranchManager] = useState('');
  const [centerName, setCenterName] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [landmark, setLandMark] = useState('');
  const [firstMeetDate, setFirstMeetDate] = useState('');
  // const [onSelect, setOnSelect] = useState('');
  // const [onDeSelect, setOnDeSelect] = useState('');
  // const [onSelectTemp1, setOnSelectTemp1] = useState(tempList1);
  // const [onSelectValue, setOnSelectValue] = useState();
  // const [onDeSelectValue, setOnDeSelectValue] = useState();
  // const [onSelectedArray, setOnSelectedArray] = useState([]);
  const [empModal, setEmpModal] = useState(false)
  const [empList, setEmpList] = useState();
  const [selectedEmpList, setSelectedEmpList] = useState([]);
  const [selectedEmpIdList, setSelectedEmpIdList] = useState([]);
  const [groupDropDownModal, setGroupDropDownModal] = useState(false)
  const [groupDropDownList, setGroupDropDownList] = useState([]);
  const [groupDropDownType, setGroupDropDownType] = useState('');

  useEffect(()=>{
    handleGetAllCustomer()
    handleProfile()
  },[props.navigation])

  const handleProfile = () => {
    console.log('PROPS PROFILE', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
  }

  const handleGetAllCustomer = () =>{
    dispatch(GetAllCustomerRequest(response=>{
      console.log("Get All Customer Response=>", response.entity.entity)
      let tempList = response.entity.entity
      let tempSelectedList = []
      for(let i=0; i<tempList.length; i++)
      {
        console.log("ITEM=>",tempList[i].ApplicantName)
        tempSelectedList.push({
          ApplicantName: tempList[i].ApplicantName,
          Husbandname: tempList[i].Husbandname,
          ApplicantId: tempList[i].ApplicantId,
          ApplicantDateofbirth: tempList[i].ApplicantDateofbirth,
          selected: false,
        }); 
      }
      setEmpList(tempSelectedList)
    }))
  }

  // const handleOnPress = item => {
  //   console.log('ONCLICK==>', item);
  //   setOnSelectValue(item);
  //   setOnSelect(onSelect == item.id ? 0 : item.id);
  // };

  // const handleDeSelectOnPress = item => {
  //   console.log('ONCLICK==>', item);
  //   setOnDeSelectValue(item);
  //   setOnDeSelect(onDeSelect == item.id ? 0 : item.id);
    
  // };

  // const onHandlePush = () => {
  //   let tempList = onSelectTemp1.filter(item => item.id != onSelectValue.id);
  //   setOnSelectTemp1(tempList);
  //   console.log('temp selected==>', tempList);
  //   setOnSelectedArray([...onSelectedArray, onSelectValue]);
  //   setOnSelect('');
  //   setOnDeSelect('')
  // };

  // const onHandlePop = () => {
  //     let tempList = onSelectedArray.filter(item => item.id != onDeSelectValue.id);
  //     setOnSelectedArray(tempList);
  //     console.log('temp selected==>', tempList);
  //     setOnSelectTemp1([...onSelectTemp1, onDeSelectValue]);
  //      setOnSelect('');
  //      setOnDeSelect('');
  // };

  const handleValidation = () => {
    return (
      CommonFunctions.isBlank(branchManager, 'Please select branch manager') &&
      CommonFunctions.isBlank(centerName, 'Please select center name') &&
      CommonFunctions.isBlank(firstMeetDate, 'Please select meeting day') &&
      CommonFunctions.isBlank(groupName.trim(), 'please enter group name') &&
      CommonFunctions.isBlank(groupAddress.trim(), 'please enter address') &&
      CommonFunctions.isBlank(postalCode.trim(), 'please enter postal code') &&
      handleCustomerList()
    );
  }

  const handleCustomerList = () =>{
    if(selectedEmpList.length == 0)
    {
      Toast.show('please select customer details',Toast.SHORT)
      return false
    }
    else return true
  }

  const handleGroupSubAPI = () => {
    if(handleValidation())
    {
      handleGroupSubmit()
    }
  }

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

    console.log("GROUP DATA=>",data)
    dispatch(RegGroupRequest(data,response => {
      console.log("response =>",response)
      if(response.statusCode == 200)
      {
        Toast.show('Successfully! save group form details', Toast.SHORT);
        props.navigation.goBack()
      }
    }))  
  }

  const handleRoleSelect = (item,index) => {
    let tempList = empList
    let arr = tempList.map((item1,index1)=>{
      if(index1==index)
      {
        item1.selected = !item1.selected;
      }
      return{...item1}
    })
    setEmpList(arr)
    // setEmpModal(false);
  }

  const handleConfirmOnPress = () =>{
    let tempFilter = empList.filter(item=>item.selected == true)
    setSelectedEmpList(tempFilter)
    console.log("FILTER",tempFilter)
    let tempIdList = []
    tempFilter.forEach(item=>{
      console.log('ITEM=>', item.ApplicantId);
      tempIdList.push(JSON.stringify(item.ApplicantId));
    })

    console.log("TEMPID LIS",tempIdList)
    setSelectedEmpIdList(tempIdList)
    setEmpModal(false);
  }

  const handleGroupDropDown = (mode) =>{
    setGroupDropDownType(mode);
    dispatch(GetGroupDropDownRequest(mode, response=>{
      console.log("Group drop down res=>",response)
      setGroupDropDownList(response.entity.entity);
    }))
    setGroupDropDownModal(true)
  }

  const handleGroupDropDownSelect = (item) => {
    console.log("ITEM SELECT",item)
    groupDropDownType == 'Branch' && setBranchManager(item);
    groupDropDownType == 'Center' && setCenterName(item);
    groupDropDownType == 'MeetingDay' && setFirstMeetDate(item);
    setGroupDropDownModal(false);
  }

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Group Form'}
        />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View style={{flex: 1}}>
            <View style={Styles.mainView}>
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
                onPress={() => handleGroupDropDown('Branch')}
                headTitle={'Branch Manager'}
                title={
                  branchManager != '' ? branchManager.BoCode : 'Branch Manager'
                }
                TextColor={
                  branchManager != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  branchManager != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppCardPress
                onPress={() => handleGroupDropDown('Center')}
                headTitle={'Center Name'}
                title={centerName != '' ? centerName.CenterName : 'Center Name'}
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
                onPress={() => handleGroupDropDown('MeetingDay')}
                headTitle={'First Meeting Day'}
                title={
                  firstMeetDate != ''
                    ? firstMeetDate.RoleName
                    : 'First Meeting Day'
                }
                TextColor={
                  firstMeetDate != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  firstMeetDate != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
              <AppTextInput
                placeholder={'Group Name'}
                headTitle={'Group Name'}
                headTitleColor={
                  groupName != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={groupName}
                onChangeText={text => setGroupName(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppTextInput
                placeholder={'Address'}
                headTitle={'Address'}
                headTitleColor={
                  groupAddress != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={groupAddress}
                onChangeText={text => setGroupAddress(text)}
                returnKeyType={'next'}
                onSubmitEditing={() => mnameRef.current?.focus()}
              />
              <AppTextInput
                placeholder={'Postal Code'}
                headTitle={'Postal Code'}
                headTitleColor={
                  postalCode != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={postalCode}
                onChangeText={text => setPostalCode(text)}
                returnKeyType={'next'}
              />
              <AppTextInput
                placeholder={'Landmark'}
                headTitle={'Landmark'}
                headTitleColor={
                  landmark != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                value={landmark}
                onChangeText={text => setLandMark(text)}
                returnKeyType={'next'}
              />
              <AppCardPress
                onPress={() => {
                  setEmpModal(true);
                }}
                title={'Select Customer Detail'}
                TextColor={
                  selectedEmpList.length != 0
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  selectedEmpList.length != 0
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
                marginBottom={R.fontSize.Size2}
              />
              {selectedEmpList.length != 0 &&
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
                          {item.Husbandname}
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

              {/* <View
                style={{
                  flex: 1,
                  borderWidth: 1,
                  borderRadius: R.fontSize.Size5,
                  borderColor: R.colors.darkGreenColor,
                }}>
                <View style={{flexDirection: 'row', flex: 1}}>
                  <View
                    style={{
                      flex: 1,
                      borderRightWidth: 1,
                      marginVertical: R.fontSize.Size4,
                      borderColor: R.colors.placeholderTextColor,
                    }}>
                    {onSelectTemp1.map((item, index) => {
                      return (
                        <Pressable
                          onPress={() => handleOnPress(item)}
                          key={index}
                          style={{
                            marginVertical: R.fontSize.Size4,
                            marginHorizontal: R.fontSize.Size2,
                            borderBottomWidth: 1,
                            borderColor: R.colors.placeholderTextColor,
                            padding: R.fontSize.Size5,
                            backgroundColor:
                              item.id == onSelect
                                ? R.colors.appColor
                                : R.colors.lightWhite,
                          }}>
                          <Text>{item.title}</Text>
                        </Pressable>
                      );
                    })}
                  </View>

                  <View
                    style={{
                      justifyContent: 'space-around',
                      padding: R.fontSize.Size4,
                    }}>
                    <Pressable
                      disabled={onSelect != '' ? false : true}
                      onPress={() => onHandlePush()}
                      style={{
                        borderWidth: 1,
                        padding: R.fontSize.Size5,
                        borderRadius: R.fontSize.Size5,
                        backgroundColor:
                          onSelect != ''
                            ? R.colors.appColor
                            : R.colors.lightWhite,
                      }}>
                      <Image
                        source={R.images.backIcon}
                        resizeMode={'contain'}
                        style={{
                          height: R.fontSize.Size20,
                          width: R.fontSize.Size20,
                          transform: [{rotate: '180deg'}],
                        }}
                      />
                    </Pressable>

                    <Pressable
                      disabled={onDeSelect != '' ? false : true}
                      onPress={() => onHandlePop()}
                      style={{
                        borderWidth: 1,
                        padding: R.fontSize.Size5,
                        borderRadius: R.fontSize.Size5,
                        backgroundColor:
                          onDeSelect != ''
                            ? R.colors.appColor
                            : R.colors.lightWhite,
                      }}>
                      <Image
                        source={R.images.backIcon}
                        resizeMode={'contain'}
                        style={{
                          height: R.fontSize.Size20,
                          width: R.fontSize.Size20,
                        }}
                      />
                    </Pressable>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      borderLeftWidth: 1,
                      marginVertical: R.fontSize.Size4,
                      borderColor: R.colors.placeholderTextColor,
                    }}>
                    {onSelectedArray.map((item, index) => {
                      return (
                        <Pressable
                          onPress={() => handleDeSelectOnPress(item)}
                          key={index}
                          style={{
                            marginVertical: R.fontSize.Size4,
                            marginHorizontal: R.fontSize.Size2,
                            borderBottomWidth: 1,
                            borderColor: R.colors.placeholderTextColor,
                            padding: R.fontSize.Size5,
                            backgroundColor:
                              item.id == onDeSelect
                                ? R.colors.appColor
                                : R.colors.lightWhite,
                          }}>
                          <Text>{item.title}</Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              </View> */}
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
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.regGroupRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(GroupForm);
