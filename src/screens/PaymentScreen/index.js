import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TextInput,
} from 'react-native';
import {AppButton, Header, ListViewModal, StoryScreen} from '../../components';
import Styles from './style';
import R from '../../res/R';
import {useDispatch, connect} from 'react-redux';
import {
  CenterCollectionRequest,
  LoanCollectionRequest,
  LoanRepaymentCollectionRequest,
} from '../../actions/loanCollection.action';
import Toast from 'react-native-simple-toast';

const CollectionTitle = [
  'LoanId',
  'Customer Name',
  'Husband Name',
  'Collected Amount',
  'Due Amount',
  'Principle Collection',
  'Interested Collection',
  'Outstanding Amount',
];

const PaymentScreen = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState();
  const [centerCollectionList, setCenterCollectionList] = useState([]);
  const [selectCollected, setSelectCollected] = useState([]);
  const [listModal, setListModal] = useState(false);
  const [overAllCollectAmount, setOverAllCollectAmount] = useState('');
  const [selectedCenter, setSelectedCenter] = useState();
  const [totalPrincipleAmount, setTotalPrincipleAmount] = useState('');
  const [totalInterestAmount, setTotalInterestAmount] = useState('');
  const [buttonVisibleStatus, setButtonVisibleStatus] = useState(false);
  const [prevCollectAmount, setPrevCollectAmount] = useState(0);

  useEffect(() => {
    console.log('Profile Details on Payment Screen=>', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
    // handleCollectionListAPI(props.profile.entity[0].BoId);
    handleCenterCollection(props.profile.entity[0].StaffID);
  }, [props.navigation]);

  const handleCenterCollection = login_Id => {
    let data = {
      loginId: login_Id,
    };
    dispatch(
      CenterCollectionRequest(data, response => {
        console.log('Center Collection Res==>', response);

        if (response.statusCode === 200) {
          setCenterCollectionList(response.entity.entity);
        }
      }),
    );
  };

  const handleCollectionModal = () => {
    setListModal(true);
  };

  const handleCollectionListAPI = item => {
    setSelectedCenter(item);
    let data = {
      centerId: item.centerId,
      date: '2023-11-18T06:32:11.089Z',
      boId: profileDetail.BoId,
    };
    console.log('payment data=>', data);
    dispatch(
      LoanCollectionRequest(data, response => {
        console.log('Loan Collection Res==>', response);
        handleCollectionListState(response.entity.entity);
        let tempArray = [];
        tempArray = response.entity.entity;
        setButtonVisibleStatus(tempArray.length > 0 ? true : false);
      }),
    );
  };

  const handleCollectionListState = list => {
    let tempList = [];
    tempList = list;
    let temp = tempList.map(item => {
      item.selected = true;
      return {...item};
    });

    setSelectCollected(temp);
    handleOverAllCollected(temp);

    setListModal(false);
  };

  const handleSelectedCollected = (item1, index1) => {
    let tempData = selectCollected.map((item, index) => {
      if (index === index1) {
        item.selected = !item.selected;
      }
      return {...item};
    });
    setSelectCollected(tempData);
    handleOverAllCollected(tempData);
    let tempFilter = selectCollected.filter(item => item.selected === true);
    if (tempFilter.length <= 0) {
      setButtonVisibleStatus(false);
    } else {
      setButtonVisibleStatus(true);
    }
    console.log('TempFilter', tempFilter);
  };

  const handleOnChangeAmount = (text, index1) => {
    if (prevCollectAmount < Number(text)) {
      Toast.show(
        'Collected amount should be required less then due amount',
        Toast.SHORT,
      );
    }
    console.log('INDEXX=>', index1), console.log('AMOUNT=>', text);
    let tempData = selectCollected.map((item, index) => {
      if (index === index1) {
        item.sumCollected = text;
      }
      return {...item};
    });
    setSelectCollected(tempData);
    handleOverAllCollected(tempData);
    // console.log('UPDATED TEMP DATA=>', tempData);
  };

  const handleOverAllCollected = tempData => {
    let tempFilter = tempData.filter(item => item.selected === true);
    console.log('tempFilter=>', tempFilter);
    const totalSum = tempFilter.reduce((accumulator, currentItem) => {
      return Number(accumulator) + Number(currentItem.sumCollected);
    }, 0);
    console.log('temp Amount==>', totalSum);
    setOverAllCollectAmount(totalSum);
  };

  const handleCollectedVerification = () => {
    let tempData = selectCollected.map((item, index) => {
      console.log('PRINCIPE AMOUNT=>', item.principleCollected);
      let tempAmount =
        Number(item.sumCollected).length <= 0 ? 0 : Number(item.sumCollected);
      console.log('CURRENT TEMP AMOUNT=>', tempAmount);

      if (item.selected === true && item.principleCollected >= tempAmount) {
        item.principleCollected = item.principleCollected - tempAmount;
      } else if (
        item.selected === true &&
        item.principleCollected < tempAmount
      ) {
        let tempDifferenceValue = tempAmount - item.principleCollected;
        item.principleCollected = 0;
        item.interestCollected = item.interestCollected - tempDifferenceValue;
      }

      return {...item};
    });
    setSelectCollected(tempData);
    console.log('UPDATED TEMP DATA=>', tempData);
    handleLoanRepaymentCollection(tempData);
  };

  const handleLoanRepaymentCollection = tempData => {
    let tempFilter = tempData.filter(item => item.selected === true);
    console.log('TEP FILTERR=>', tempFilter);

    let tempArray = [];
    tempFilter.forEach(item => {
      tempArray.push({
        tempId: item.tempId,
        loginId: profileDetail.StaffID,
        branhId: profileDetail.BranchId,
        principleCollection: item.principleCollected,
        intertestCollection: item.interestCollected,
        applicantId: item.applicantId,
        centerId: item.centerId,
        loanId: item.loanId,
      });
    });

    console.log('Temppupdatedd==>', tempArray);

    // let data = {
    //   tempId: selectedCenter.tempId,
    //   loginId: profileDetail.StaffID,
    //   branhId: profileDetail.BranchId,
    //   principleCollection: totalPrincipleAmount,
    //   intertestCollection: totalInterestAmount,
    //   applicantId: selectedCenter.applicantId,
    //   centerId: selectedCenter.centerId,
    //   loanId: selectedCenter.loanId,
    // };
    // console.log('Loan Repayment Data', data);

    dispatch(
      LoanRepaymentCollectionRequest(tempArray, response => {
        console.log('loan Repayment collection response=>', response);
        if (response.statusCode === 200) {
          Toast.show('Successfully! Saved Payment', Toast.SHORT);
          props.navigation.goBack();
        }
      }),
    );
  };

  const handleOnPressIn = item => {
    console.log('handle on Press in', item.sumCollected);
    setPrevCollectAmount(Number(item.sumCollected));
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={Styles.mainSafeView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Payment Screen'}
        />
        <ScrollView contentContainerStyle={Styles.scrollFlexGrow}>
          <View style={Styles.mainView}>
            <View>
              <Pressable
                onPress={() => handleCollectionModal()}
                style={({pressed}) => [
                  {
                    paddingVertical: 10,
                    borderBottomWidth: 2,
                    borderColor: R.colors.appColor,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: R.colors.appColor,
                    paddingHorizontal: R.fontSize.Size10,
                    borderRadius: R.fontSize.Size4,
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}>
                <View style={Styles.topCenterView}>
                  <Text style={Styles.centerText} numberOfLines={1}>
                    {'Select Center'}
                  </Text>
                </View>

                <Image
                  source={R.images.dropdownIcon}
                  resizeMode={'contain'}
                  style={{
                    height: R.fontSize.Size14,
                    width: R.fontSize.Size14,
                  }}
                />
              </Pressable>
              {selectCollected.length > 0 && (
                <View
                  style={{
                    marginTop: R.fontSize.Size5,
                  }}>
                  <View>
                    <View style={Styles.wrapView}>
                      {CollectionTitle.map((item, index) => {
                        return (
                          <View key={index} style={Styles.headView}>
                            <Text style={Styles.headTitle} numberOfLines={4}>
                              {item}
                            </Text>
                          </View>
                        );
                      })}
                    </View>
                    <View style={Styles.selectedView}>
                      {selectCollected.map((item, index) => {
                        return (
                          <View key={index}>
                            <Pressable
                              onPress={() =>
                                handleSelectedCollected(item, index)
                              }
                              style={({pressed}) => [
                                {
                                  opacity: pressed ? 0.5 : 1,
                                  borderWidth: 1.5,
                                  borderColor: item.selected
                                    ? R.colors.appColor
                                    : R.colors.placeHolderColor,
                                  borderRadius: 4,
                                  overflow: 'hidden',
                                  marginTop: R.fontSize.Size4,
                                  backgroundColor: item.selected
                                    ? R.colors.appColor
                                    : R.colors.placeholderTextColor,
                                },
                              ]}>
                              <View style={[Styles.wrapViewStyle]}>
                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {item.loanId}
                                  </Text>
                                </View>
                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {item.applicantName}
                                  </Text>
                                </View>
                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {item.husbandName}
                                  </Text>
                                </View>

                                <View style={Styles.valueTextInputHeadView}>
                                  <TextInput
                                    style={{
                                      flex: 1,
                                      borderWidth: 0.4,
                                      fontSize: R.fontSize.Size12,
                                      color: R.colors.black,
                                      textAlign: 'center',
                                    }}
                                    value={`${item.sumCollected}`}
                                    onChangeText={text =>
                                      handleOnChangeAmount(text, index)
                                    }
                                    maxLength={8}
                                    onPressIn={({nativeEvent: PressEvent}) =>
                                      handleOnPressIn(item)
                                    }
                                  />
                                </View>
                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {Number(item.principleCollected) +
                                      Number(item.interestCollected)}
                                  </Text>
                                </View>

                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {item.principleCollected}
                                  </Text>
                                </View>

                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {item.interestCollected}
                                  </Text>
                                </View>
                                <View style={Styles.valueHeadView}>
                                  <Text
                                    style={Styles.valueHeadTitle}
                                    numberOfLines={2}>
                                    {item.totalOS}
                                  </Text>
                                </View>
                              </View>
                            </Pressable>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                  <View style={Styles.overAllView}>
                    <Text style={Styles.overAllText}>
                      {'Overall Collected Amount :  '}
                      <Text
                        style={{
                          color: R.colors.black,
                        }}>
                        {overAllCollectAmount}
                      </Text>
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          {/* TEST LAYOUT */}

          <View
            style={{
              borderWidth: 2,
              // padding: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderColor: R.colors.placeholderTextColor,
                paddingVertical: 4,
                backgroundColor: R.colors.appColor,
                alignItems: 'center',
              }}>
              <Pressable
                style={({pressed}) => [
                  {
                    opacity: pressed ? 0.5 : 1,
                    paddingHorizontal: 10,
                  },
                ]}>
                <Image
                  source={R.images.menuIcon}
                  resizeMode={'contain'}
                  style={{height: 20, width: 20}}
                />
              </Pressable>
              <View style={{flex: 1, marginHorizontal: 5}}>
                <Text
                  style={{
                    color: R.colors.white,
                    fontSize: R.fontSize.Size14,
                    fontWeight: '600',
                  }}>
                  {'Shyam Yadav'}
                </Text>
                <Text
                  style={{
                    color: R.colors.white,
                    fontSize: R.fontSize.Size12,
                    fontWeight: '400',
                  }}>
                  {'W/O: Reema Yadav'}
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <Text
                  style={{
                    color: R.colors.white,
                    fontSize: R.fontSize.Size14,
                    fontWeight: '600',
                  }}>
                  {'LoanId: 123'}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                borderBottomWidth: 1,
                borderColor: R.colors.placeholderTextColor,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginHorizontal: 5,
                  borderRightWidth: 1,
                  alignItems: 'center',
                  borderColor: R.colors.placeholderTextColor,
                }}>
                <View style={{flex: 1}}>
                  <Text>{'Principle Amount'}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>{'₹ 333'}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginHorizontal: 5,
                  alignItems: 'center',
                }}>
                <View style={{flex: 1}}>
                  <Text>{'Interest Amount'}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>{'₹ 333'}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                borderBottomWidth: 1,
                borderColor: R.colors.placeholderTextColor,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginHorizontal: 5,
                  borderRightWidth: 1,
                  alignItems: 'center',
                  borderColor: R.colors.placeholderTextColor,
                }}>
                <View style={{flex: 1}}>
                  <Text>{'Due Amount'}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>{'₹ 333'}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  marginHorizontal: 5,
                  alignItems: 'center',
                }}>
                <View style={{flex: 1}}>
                  <Text>{'Outstanding Amount'}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Text>{'₹ 333'}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 4,
                alignItems: 'center',
              }}>
              <View style={{flex: 1}}>
                <Text>{'Collected Amount'}</Text>
              </View>
              <View style={{flex: 1}}>
                <TextInput
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: R.colors.placeholderTextColor,

                    fontSize: R.fontSize.Size12,
                    color: R.colors.black,
                    textAlign: 'center',
                    paddingVertical: 8,
                  }}
                  value={`665`}
                  maxLength={8}
                />
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <AppButton
            onPress={() => {
              handleCollectedVerification();
            }}
            marginHorizontal={R.fontSize.Size30}
            buttonBorderRadius={R.fontSize.Size4}
            buttonHeight={R.fontSize.Size45}
            disabled={buttonVisibleStatus ? false : true}
            backgroundColor={
              buttonVisibleStatus
                ? R.colors.appColor
                : R.colors.placeholderTextColor
            }
            title={'Save'}
          />
        </View>
      </SafeAreaView>
      <ListViewModal
        visible={listModal}
        cancelOnPress={() => setListModal(false)}
        onPress={item => handleCollectionListAPI(item)}
        dataList={centerCollectionList}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.loanCollectionRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(PaymentScreen);
