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
  Header,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

let tempList1 = [
  {
    id: 1,
    title: 'Support1',
  },
  {
    id: 2,
    title: 'Support2',
  },
  {
    id: 3,
    title: 'Support3',
  },
  {
    id: 4,
    title: 'Support4',
  },
];


const GroupForm = props => {
  const [staffName, setStaffName] = useState('');

  const [groupName, setGroupName] = useState('');
  const [branchManager, setBranchManager] = useState('');
  const [centerName, setCenterName] = useState('');
  const [centerAddress, setCenterAddress] = useState('');
  const [centerPostalCode, setCenterPostalCode] = useState('');
  const [centerLandmark, setCenterLandmark] = useState('');
  const [centerDissolvedDate, setCenterDissolvedDate] = useState('');
  const [isDisplayDate, setIsDisplayDate] = useState(false);
  const [meetingDay, setMeetingDay] = useState('meetingDay');


  const [onSelect, setOnSelect] = useState('');
  const [onDeSelect, setOnDeSelect] = useState('');

  const [onSelectTemp1, setOnSelectTemp1] = useState(tempList1);
  const [onSelectValue, setOnSelectValue] = useState();
  const [onDeSelectValue, setOnDeSelectValue] = useState();
  const [onSelectedArray, setOnSelectedArray] = useState([]);


  const handleOnPress = item => {
    console.log('ONCLICK==>', item);
    setOnSelectValue(item);
    setOnSelect(onSelect == item.id ? 0 : item.id);
  };

  const handleDeSelectOnPress = item => {
    console.log('ONCLICK==>', item);
    setOnDeSelectValue(item);
    setOnDeSelect(onDeSelect == item.id ? 0 : item.id);
    
  };

  const onHandlePush = () => {
    let tempList = onSelectTemp1.filter(item => item.id != onSelectValue.id);
    setOnSelectTemp1(tempList);
    console.log('temp selected==>', tempList);
    setOnSelectedArray([...onSelectedArray, onSelectValue]);
    setOnSelect('');
    setOnDeSelect('')
  };

  const onHandlePop = () => {
      let tempList = onSelectedArray.filter(item => item.id != onDeSelectValue.id);
      setOnSelectedArray(tempList);
      console.log('temp selected==>', tempList);
      setOnSelectTemp1([...onSelectTemp1, onDeSelectValue]);
       setOnSelect('');
       setOnDeSelect('');
  };

  const handleGroupSubmit = () => {
    let data = {
      groupId: 0,
      groupCode: 'string',
      branchId: 0,
      groupName: 'string',
      bmId: 0,
      testerId: 0,
      staffid: 0,
      crtDate: '2023-06-24T16:30:17.748Z',
      approveStatus: 'string',
      approvedBy: 0,
      approveDate: '2023-06-24T16:30:17.748Z',
      approvalReason: 'string',
      firstMeetingDate: '2023-06-24T16:30:17.748Z',
      remarks: 'string',
      isActive: true,
      createdDate: '2023-06-24T16:30:17.748Z',
      updatedDate: '2023-06-24T16:30:17.748Z',
      createdBy: 0,
      updatedBy: 0,
      processDate: '2023-06-24T16:30:17.748Z',
      staff_Recg: 0,
    };
  }

  return (
    <StoryScreen>
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
            <View
              style={{
                flex: 1,
                paddingHorizontal: R.fontSize.Size24,
                paddingTop: R.fontSize.Size50,
              }}>
              <AppCardPress
                onPress={() => console.log('Staff Name')}
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
                onPress={() => console.log('Branch Manager')}
                headTitle={'Branch Manager'}
                title={branchManager != '' ? branchManager : 'Branch Manager'}
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
                onPress={() => console.log('Center Name')}
                headTitle={'Center Name'}
                title={centerName != '' ? centerName : 'Center Name'}
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

              <View
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
              </View>
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

export default GroupForm;
