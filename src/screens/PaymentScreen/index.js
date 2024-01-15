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
import {
  AppButton,
  CustomAlert,
  Header,
  ListViewModal,
  StoryScreen,
} from '../../components';
import Styles from './style';
import R from '../../res/R';
import {useDispatch, connect} from 'react-redux';
import {
  CenterCollectionRequest,
  LoanCollectionRequest,
  LoanRepaymentCollectionRequest,
} from '../../actions/loanCollection.action';
// import Toast from 'react-native-simple-toast';

// const CollectionTitle = [
//   'LoanId',
//   'Customer Name',
//   'Husband Name',
//   'Collected Amount',
//   'Due Amount',
//   'Principle Collection',
//   'Interested Collection',
//   'Outstanding Amount',
// ];

const PaymentScreen = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState();
  const [centerCollectionList, setCenterCollectionList] = useState([]);
  const [selectCollected, setSelectCollected] = useState([]);
  const [collectedStatus, setCollectedStatus] = useState(false);

  const [listModal, setListModal] = useState(false);
  const [overAllCollectAmount, setOverAllCollectAmount] = useState('');
  // const [selectedCenter, setSelectedCenter] = useState();
  // const [totalPrincipleAmount, setTotalPrincipleAmount] = useState('');
  // const [totalInterestAmount, setTotalInterestAmount] = useState('');
  const [buttonVisibleStatus, setButtonVisibleStatus] = useState(false);
  // const [prevCollectAmount, setPrevCollectAmount] = useState(0);
  const [toastMessage, setToastMessage] = useState('');
  const [toastAlertVisible, setToastAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState('');

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
    setCollectedStatus(false);
    setListModal(true);
    // setButtonVisibleStatus(false);
  };

  const handleCollectionListAPI = item => {
    // setSelectedCenter(item);
    let data = {
      centerId: item.centerId,
      date: '2023-11-18T06:32:11.089Z',
      boId: profileDetail.BoId,
    };
    console.log('payment data=>', data);
    dispatch(
      LoanCollectionRequest(data, response => {
        console.log('Loan Collection Res==>', response);
        let tempLength = [];
        tempLength = response.entity.entity;
        if (tempLength <= 0) {
          setCollectedStatus(true);
          setListModal(false);
        } else {
          handleCollectionListState(response.entity.entity);
          // let tempArray = [];
          // tempArray = response.entity.entity;
          setButtonVisibleStatus(false);
        }
      }),
    );
  };

  const handleCollectionListState = list => {
    let tempList = [];
    tempList = list;
    let temp = tempList.map(item => {
      item.selected = false;
      item.principle = item.principleCollected;
      item.interest = item.interestCollected;
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
    let tempData = selectCollected.map((item, index) => {
      if (index === index1) {
        if (item.interestCollected + item.principleCollected < Number(text)) {
          setToastAlertVisible(true);
          setAlertType('Error');
          setToastMessage(
            'Collected amount should be required less then due amount',
          );
          item.sumCollected = item.interestCollected + item.principleCollected;

          // Toast.show(
          //   'Collected amount should be required less then due amount',
          //   Toast.SHORT,
          // );
        } else {
          let tempData = selectCollected.map((item, index) => {
            if (index === index1) {
              item.sumCollected = text;
              if (Number(text) >= item.interestCollected) {
                let tempDiff = Number(text) - item.interestCollected;
                item.interest = item.interestCollected;
                item.principle = tempDiff;
              } else {
                item.principle = 0;
                item.interest = Number(text);
              }
            }
            return {...item};
          });
          setSelectCollected(tempData);
          handleOverAllCollected(tempData);
        }
      }
      return {...item};
    });
    setSelectCollected(tempData);

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

      // if (item.selected === true && item.principleCollected >= tempAmount) {
      //   item.principleCollected = item.principleCollected - tempAmount;
      // } else if (
      //   item.selected === true &&
      //   item.principleCollected < tempAmount
      // ) {
      //   let tempDifferenceValue = tempAmount - item.principleCollected;
      //   item.principleCollected = 0;
      //   item.interestCollected = item.interestCollected - tempDifferenceValue;
      // }
      if (item.selected === true && item.interestCollected >= tempAmount) {
        item.interestCollected = tempAmount;
        item.principleCollected = 0;
      } else if (
        item.selected === true &&
        item.interestCollected < tempAmount
      ) {
        let tempDifferenceValue = tempAmount - item.interestCollected;
        item.principleCollected = tempDifferenceValue;
        item.interestCollected = item.interestCollected;
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
        principleCollection: item.principle,
        intertestCollection: item.interest,
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
          setToastAlertVisible(true);
          setAlertType('Success');
          setToastMessage('Successfully! Saved Payment');
        }
      }),
    );
  };

  const handleOnPressIn = item => {
    console.log('handle on Press in', item);
    // setPrevCollectAmount(Number(item.sumCollected));
    // setTotalPrincipleAmount(item.principleCollected);
    // setTotalInterestAmount(item.interestCollected);
  };

  const handleClosedAlert = () => {
    setToastAlertVisible(false);
    if (alertType === 'Success') {
      props.navigation.goBack();
    }
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
                    paddingVertical: 12,
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
              {collectedStatus && (
                <View
                  style={{
                    marginTop: R.fontSize.Size20,
                    alignItems: 'center',
                  }}>
                  <Text style={Styles.noRecordText}>
                    {
                      'No record found on this center\nPlease select another center'
                    }
                  </Text>
                </View>
              )}
              {selectCollected.length > 0 && (
                <View
                  style={{
                    marginTop: R.fontSize.Size5,
                  }}>
                  <View>
                    <View>
                      {selectCollected.map((item, index) => {
                        let checkTextColor = item.selected
                          ? R.colors.white
                          : R.colors.black;
                        return (
                          <View key={index}>
                            <Pressable
                              onPress={() => {
                                handleSelectedCollected(item, index);
                              }}
                              style={({pressed}) => [
                                Styles.cardMainView,
                                {
                                  opacity: pressed ? 0.5 : 1,
                                  borderColor: item.selected
                                    ? R.colors.appColor
                                    : R.colors.placeHolderColor,
                                },
                              ]}>
                              <View
                                style={[
                                  Styles.cardRowTopView,
                                  {
                                    backgroundColor: item.selected
                                      ? R.colors.appColor
                                      : R.colors.placeholderTextColor,
                                  },
                                ]}>
                                <View
                                  style={{
                                    paddingHorizontal: R.fontSize.Size4,
                                  }}>
                                  {item.selected ? (
                                    <Image
                                      source={R.images.successIcon}
                                      resizeMode={'contain'}
                                      style={Styles.checkIcon}
                                    />
                                  ) : (
                                    <View style={Styles.unCheckView} />
                                  )}
                                </View>
                                <View style={Styles.cardTopTitleView}>
                                  <Text
                                    style={[
                                      Styles.cardTitleText,
                                      {color: checkTextColor},
                                    ]}>
                                    {item.applicantName}
                                  </Text>
                                  <Text
                                    style={[
                                      Styles.cardSubTitleText,
                                      {
                                        color: checkTextColor,
                                      },
                                    ]}>
                                    {`W/O: ${item.husbandName}`}
                                  </Text>
                                </View>
                                <View style={{marginRight: R.fontSize.Size10}}>
                                  <Text
                                    style={[
                                      Styles.cardTitleText,
                                      {color: checkTextColor},
                                    ]}>
                                    {`LoanId: ${item.loanId}`}
                                  </Text>
                                </View>
                              </View>
                              <View style={Styles.cardBodyRowView}>
                                <View style={Styles.cardBodyLeftView}>
                                  <View style={Styles.cardFlex}>
                                    <Text style={Styles.cardBodyTitleText}>
                                      {'Principle '}
                                    </Text>
                                  </View>
                                  <View style={Styles.cardFlex}>
                                    <Text
                                      style={
                                        Styles.cardBodyAmountText
                                      }>{`₹ ${item.principle} `}</Text>
                                  </View>
                                </View>
                                <View style={Styles.cardBodyRightView}>
                                  <View style={Styles.cardFlex}>
                                    <Text style={Styles.cardBodyTitleText}>
                                      {'Interest Amount'}
                                    </Text>
                                  </View>
                                  <View style={Styles.cardFlex}>
                                    <Text
                                      style={
                                        Styles.cardBodyAmountText
                                      }>{`₹ ${item.interest} `}</Text>
                                  </View>
                                </View>
                              </View>
                              <View style={Styles.cardBodyRowView}>
                                <View style={Styles.cardBodyLeftView}>
                                  <View style={Styles.cardFlex}>
                                    <Text style={Styles.cardBodyTitleText}>
                                      {'Due Amount'}
                                    </Text>
                                  </View>
                                  <View style={Styles.cardFlex}>
                                    <Text
                                      style={Styles.cardBodyAmountText}>{`₹ ${
                                      Number(item.principleCollected) +
                                      Number(item.interestCollected)
                                    }`}</Text>
                                  </View>
                                </View>
                                <View style={Styles.cardBodyRightView}>
                                  <View style={Styles.cardFlex}>
                                    <Text style={Styles.cardBodyTitleText}>
                                      {'Outstanding Amount'}
                                    </Text>
                                  </View>
                                  <View style={Styles.cardFlex}>
                                    <Text
                                      style={
                                        Styles.cardBodyAmountText
                                      }>{`₹ ${item.totalOS}`}</Text>
                                  </View>
                                </View>
                              </View>
                              <View style={Styles.cardBodyRowView}>
                                <View style={Styles.cardFlex}>
                                  <Text style={Styles.cardBodyTitleText}>
                                    {'Collected Amount ( ₹ )'}
                                  </Text>
                                </View>
                                <View style={Styles.cardFlex}>
                                  <TextInput
                                    style={Styles.cardTextInput}
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
                              </View>
                            </Pressable>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                  {/* <View style={Styles.overAllView}>
                    <Text style={Styles.overAllText}>
                      {'Overall Collected Amount :  '}
                      <Text
                        style={{
                          color: R.colors.black,
                        }}>
                        {overAllCollectAmount}
                      </Text>
                    </Text>
                  </View> */}
                </View>
              )}
            </View>
          </View>
        </ScrollView>
        {selectCollected.length > 0 && (
          <View style={Styles.bottomMainView}>
            <View style={Styles.overAllView}>
              <Text style={Styles.overAllText}>
                {'Overall Collected Amount :  '}
                <Text style={Styles.overAllText}>{overAllCollectAmount}</Text>
              </Text>
            </View>
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
        )}
      </SafeAreaView>
      <ListViewModal
        visible={listModal}
        cancelOnPress={() => setListModal(false)}
        onPress={item => handleCollectionListAPI(item)}
        dataList={centerCollectionList}
        heading={'Select Any Center'}
      />
      <CustomAlert
        visible={toastAlertVisible}
        topIcon={
          alertType === 'Success'
            ? R.images.successIcon
            : R.images.cancelRedIcon
        }
        modalColor={
          alertType === 'Success' ? R.colors.appColor : R.colors.redColor
        }
        title={alertType === 'Success' ? 'Success' : 'Invalid Collected Amount'}
        subTitle={toastMessage}
        onPress={() => handleClosedAlert()}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.loanCollectionRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(PaymentScreen);
