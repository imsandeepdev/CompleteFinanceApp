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
} from 'react-native';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  Header,
  StoryScreen,
} from '../../components';
import Styles from './style';
import R from '../../res/R';
import {useDispatch, connect} from 'react-redux';
import {
  CenterCollectionRequest,
  LoanCollectionRequest,
} from '../../actions/loanCollection.action';

const PaymentScreen = props => {
  const dispatch = useDispatch();
  const [profileDetail, setProfileDetail] = useState();
  const [centerCollectionList, setCenterCollectionList] = useState([]);
  const [selectCollected, setSelectCollected] = useState([]);
  const [amount, setAmount] = useState('');

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

  const handleCollectionListAPI = center_id => {
    let data = {
      centerId: center_id,
      date: '2023-11-18T06:32:11.089Z',
      boId: profileDetail.BoId,
    };
    dispatch(
      LoanCollectionRequest(data, response => {
        console.log('Loan Collection Res==>', response);
        let selectData = [
          {
            id: 1,
            selectName: 'Name',
            selectValue: 'Sandeep Dev',
            selected: true,
          },
          {
            id: 2,
            selectName: 'Age',
            selectValue: '23',
            selected: true,
          },
          {
            id: 3,
            selectName: 'Address',
            selectValue: 'Gorahkpur',
            selected: true,
          },
        ];
        setSelectCollected(selectData);
      }),
    );
  };

  const handleSelectedCollected = item1 => {
    let tempData = selectCollected.map((item, index) => {
      if (item.id === item1.id) {
        item.selected = !item.selected;
      }
      return item;
    });
    setSelectCollected(tempData);
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
            {centerCollectionList.map((item, index) => {
              return (
                <View key={index}>
                  <Pressable
                    onPress={() => handleCollectionListAPI(item.centerId)}
                    style={({pressed}) => [
                      {
                        paddingVertical: 10,
                        borderBottomWidth: 2,
                        borderColor: R.colors.appColor,
                        opacity: pressed ? 0.5 : 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: R.colors.lightAppColor,
                        paddingHorizontal: R.fontSize.Size10,
                      },
                    ]}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Text
                        style={{
                          fontFamily: R.fonts.regular,
                          fontSize: R.fontSize.Size14,
                          fontWeight: '700',
                          color: R.colors.black,
                        }}>{`${item.centerName}`}</Text>
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
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                      }}>
                      {selectCollected.map((item, index) => {
                        return (
                          <View>
                            <Pressable
                              key={index}
                              onPress={() => handleSelectedCollected(item)}
                              style={({pressed}) => [
                                {
                                  opacity: pressed ? 0.5 : 1,
                                  borderWidth: R.fontSize.Size2,
                                  borderColor:
                                    item.selected !== true
                                      ? R.colors.placeHolderColor
                                      : R.colors.appColor,
                                  borderRadius: R.fontSize.Size5,
                                  width: R.fontSize.Size120,
                                  height: R.fontSize.Size80,
                                  padding: R.fontSize.Size8,
                                  marginHorizontal: R.fontSize.Size2,
                                  marginVertical: R.fontSize.Size5,
                                  backgroundColor:
                                    item.selected !== true
                                      ? R.colors.placeholderTextColor
                                      : R.colors.lightAppColor,
                                },
                              ]}>
                              <View
                                style={{
                                  borderBottomWidth: 1,
                                  borderColor: R.colors.placeHolderColor,
                                  paddingVertical: R.fontSize.Size2,
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'center',
                                    fontFamily: R.fonts.regular,
                                    fontSize: R.fontSize.Size12,
                                    fontWeight: '500',
                                    color: R.colors.black,
                                  }}>
                                  {item.selectName}
                                </Text>
                              </View>
                              <View
                                style={{
                                  flex: 1,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}>
                                <Text
                                  style={{
                                    textAlign: 'center',
                                    fontFamily: R.fonts.regular,
                                    fontSize: R.fontSize.Size14,
                                    fontWeight: '700',
                                    color: R.colors.black,
                                  }}>
                                  {item.selectValue}
                                </Text>
                              </View>
                            </Pressable>
                          </View>
                        );
                      })}
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: R.fontSize.Size10,
                      }}>
                      <View
                        style={{
                          marginHorizontal: R.fontSize.Size5,
                          width: 200,
                        }}>
                        <AppTextInput
                          placeholder={'Amount'}
                          headTitle={'Amount *'}
                          headTitleColor={
                            amount !== ''
                              ? R.colors.darkGreenColor
                              : R.colors.textPriColor
                          }
                          value={amount}
                          onChangeText={text => setAmount(text)}
                        />
                      </View>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <AppButton
                          onPress={() => {
                            console.log('onPress');
                          }}
                          marginHorizontal={R.fontSize.Size10}
                          buttonHeight={R.fontSize.Size45}
                          title={'Save'}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
          {/* <View style={Styles.mainView}>
            <AppCardPress
              disabled={true}
              headTitle={'Loan Account'}
              title={'loan account'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Applicant Name'}
              title={'Applicant Name'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Husband Name'}
              title={'Husband Name'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Balance Amount'}
              title={'Balance Amount'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Installment Pending'}
              title={'Installment Pending'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Principle Due Amount'}
              title={'Principle Due Amount'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Interest Due Amount'}
              title={'Interest Due Amount'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Total Due Amount'}
              title={'Total Due Amount'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
            <AppCardPress
              disabled={true}
              headTitle={'Total Collected Amount'}
              title={'Total Collected Amount'}
              TextColor={R.colors.secAppColor}
              headTitleColor={R.colors.darkGreenColor}
            />
          </View> */}
        </ScrollView>
        {/* <View
          style={{
            marginVertical: R.fontSize.Size10,
          }}>
          <AppButton
            onPress={() => {
              console.log('onPress');
            }}
            marginHorizontal={R.fontSize.Size30}
            title={'Submit'}
          />
        </View> */}
      </SafeAreaView>
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.loanCollectionRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(PaymentScreen);
