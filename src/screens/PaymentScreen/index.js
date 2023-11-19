import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
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
} from '../../actions/loanCollection.action';
const screenWidth = Dimensions.get('screen').width;

const CollectionTitle = [
  'LoanId',
  'Customer Name',
  'Husband Name',
  'Collected Amount',
  'Due Amount',
  'Outstanding Amount',
];

const PaymentScreen = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState();
  const [centerCollectionList, setCenterCollectionList] = useState([]);
  const [selectCollected, setSelectCollected] = useState([]);
  const [listModal, setListModal] = useState(false);
  const [overAllCollectAmount, setOverAllCollectAmount] = useState('');

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

  const handleCollectionListAPI = center_id => {
    let data = {
      centerId: center_id,
      date: '2023-11-18T06:32:11.089Z',
      boId: profileDetail.BoId,
    };
    dispatch(
      LoanCollectionRequest(data, response => {
        console.log('Loan Collection Res==>', response);
        handleCollectionListState(response.entity.entity);
        // setSelectCollected(response.entity.entity);
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
  };

  const handleOverAllCollected = tempData => {
    let tempFilter = tempData.filter(item => item.selected === true);
    console.log('tempFilter=>', tempFilter);
    tempFilter.forEach(item => {
      let tempAmount = Number(item.principleAmt) + Number(item.interestAmt);
      console.log('temp Amount', tempAmount);
      setOverAllCollectAmount(tempAmount);
    });
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
                  <View style={Styles.wrapView}>
                    {CollectionTitle.map((item, index) => {
                      return (
                        <View key={index} style={Styles.headView}>
                          <Text style={Styles.headTitle} numberOfLines={2}>
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
                            onPress={() => handleSelectedCollected(item, index)}
                            style={({pressed}) => [
                              {
                                opacity: pressed ? 0.5 : 1,
                                backgroundColor: item.selected
                                  ? R.colors.lightAppColor
                                  : R.colors.placeholderTextColor,
                              },
                            ]}>
                            <View style={Styles.wrapViewStyle}>
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
                              <View style={Styles.valueHeadView}>
                                <Text
                                  style={Styles.valueHeadTitle}
                                  numberOfLines={2}>
                                  {Number(item.principleAmt) +
                                    Number(item.interestAmt)}
                                </Text>
                              </View>
                              <View style={Styles.valueHeadView}>
                                <Text
                                  style={Styles.valueHeadTitle}
                                  numberOfLines={2}>
                                  {item.principleAmt}
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
        </ScrollView>
        <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <AppButton
            onPress={() => {
              console.log('press');
            }}
            marginHorizontal={R.fontSize.Size30}
            buttonBorderRadius={R.fontSize.Size4}
            buttonHeight={R.fontSize.Size45}
            title={'Save'}
          />
        </View>
      </SafeAreaView>
      <ListViewModal
        visible={listModal}
        cancelOnPress={() => setListModal(false)}
        onPress={item => handleCollectionListAPI(item.centerId)}
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
