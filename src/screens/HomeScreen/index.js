/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  Animated,
  ScrollView,
} from 'react-native';
import {Header, StoryScreen} from '../../components';
import R from '../../res/R';
import {connect, useDispatch} from 'react-redux';
import style from './style';
import {GetMenuListRequest} from '../../actions/role.action';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import AppContent from '../../utils/AppContent';

const HeaderCard = props => {
  return (
    <View style={style.headerCardContainer}>
      {props.data.map((item, index) => {
        return (
          <View key={index}>
            <LinearGradient
              // colors={[item.firstColor, item.secondColor]}
              colors={[item.firstColor, item.secondColor, item.thirdColor]}
              start={{x: 0, y: 1}}
              end={{x: 1, y: 0}}
              style={style.headerCardGradient}>
              <View style={{justifyContent: 'flex-end'}}>
                <View style={style.headerCardRightView}>
                  <Image
                    source={{uri: item.url}}
                    style={{height: '100%', width: '100%'}}
                    resizeMode={'contain'}
                  />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                }}>
                <View>
                  <Text style={style.headerCardRightTitle}>{item.title}</Text>
                </View>
                <View>
                  <Text style={style.headerCardRightSubTitle}>
                    {item.subTitle}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
        );
      })}
    </View>
  );
};

const CustomCard = props => {
  return (
    <View style={style.customCardMainView}>
      <View style={style.customCardView}>
        <Text style={style.customCardHead}>{props.heading}</Text>
      </View>
      <View style={style.cuctomCardRowView}>
        {props.data.map((item, index) => {
          return (
            <Pressable key={index} onPress={() => props.onPress(item)}>
              <LinearGradient
                // colors={['#329691', '#266C87', '#266C87']}
                colors={[item.firstColor, item.secondColor, item.thirdColor]}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={style.cardViewLinearMainView}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <View>
                    <Text style={style.customCardLeftTitle}>{item.Title}</Text>
                  </View>
                  <View>
                    <Text style={style.customCardLeftSubTitle}>
                      {item.subTitle}
                    </Text>
                  </View>
                </View>
                <View style={style.customCardLeftInnerView}>
                  <Image
                    source={{uri: item.icon}}
                    style={style.customCardRightImage}
                    resizeMode={'contain'}
                  />
                </View>
              </LinearGradient>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const ManagerCustomCard = props => {
  return (
    <View style={style.customCardMainView}>
      <View style={style.customCardView}>
        <Text style={style.customCardHead}>{props.heading}</Text>
      </View>
      <View style={style.managerCuctomCardRowView}>
        {props.data.map((item, index) => {
          return (
            <Pressable key={index} onPress={() => props.onPress(item)}>
              <LinearGradient
                // colors={['#329691', '#266C87', '#266C87']}
                colors={[item.firstColor, item.secondColor, item.thirdColor]}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={style.managerCardViewLinearMainView}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                  }}>
                  <View>
                    <Text
                      style={[
                        style.customCardLeftTitle,
                        {fontSize: R.fontSize.Size24},
                      ]}>
                      {item.Title}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={[
                        style.customCardLeftSubTitle,
                        {fontSize: R.fontSize.Size18},
                      ]}>
                      {item.subTitle}
                    </Text>
                  </View>
                </View>
                <View style={style.customCardLeftInnerView}>
                  <Image
                    source={{uri: item.icon}}
                    style={style.customCardRightImage}
                    resizeMode={'contain'}
                  />
                </View>
              </LinearGradient>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const HomeScreen = props => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});
  const [showMore, setShowMore] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      screenFocus();
    });
    return unsubscribe;
  }, [props.navigation]);

  const screenFocus = async () => {
    handleMenuListAPI();
    setUserDetail(props.profile.entity[0]);
    console.log('USER Profile on Home', props.profile.entity[0]);
  };

  const handleMenuListAPI = () => {
    dispatch(
      GetMenuListRequest(response => {
        console.log('Menu List Res==>', response);
      }),
    );
  };

  const toggleCard = () => {
    Animated.timing(animatedValue, {
      toValue: animatedValue._value === 0 ? 1 : 0,
      duration: 300,
      useNativeDriver: false, // Set to true if you want to use the native driver (Android only)
    }).start();
    setShowMore(!showMore);
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.toggleDrawer()}
          leftSource={R.images.menuIcon}
          title={'Complete Finance Solution'}
        />
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={style.mainView}>
            <View>
              <View style={style.topHeaderView}>
                <View style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 2,
                    }}>
                    <Image
                      source={{
                        // uri: 'https://cdn-icons-png.flaticon.com/128/10313/10313079.png',
                        uri: 'https://cdn-icons-png.flaticon.com/128/3135/3135707.png',
                      }}
                      resizeMode={'contain'}
                      style={{height: 15, width: 15}}
                    />
                    <View
                      style={{
                        flex: 1,
                        marginLeft: 5,
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        style={[
                          style.topHeaderText,
                          {
                            textTransform: 'uppercase',
                          },
                        ]}
                        numberOfLines={1}>
                        {`${userDetail.StaffName}`}
                      </Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: 2}}>
                    <Image
                      source={{
                        // uri: 'https://cdn-icons-png.flaticon.com/128/3374/3374550.png',
                        uri: 'https://cdn-icons-png.flaticon.com/128/4654/4654577.png',
                      }}
                      resizeMode={'contain'}
                      style={{height: 15, width: 15}}
                    />
                    <View
                      style={{
                        flex: 1,
                        marginLeft: 5,
                        alignItems: 'flex-start',
                      }}>
                      <Text
                        style={[
                          style.topHeaderText,
                          {
                            fontSize: R.fontSize.Size12,
                            color: R.colors.lightBlack,
                          },
                        ]}>
                        {`${userDetail.RoleName}`}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 1,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: 2,
                    }}>
                    <View
                      style={{
                        flex: 1,
                        marginRight: 5,
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={[
                          style.topHeaderText,
                          {
                            textTransform: 'uppercase',
                          },
                        ]}
                        numberOfLines={1}>
                        {`${userDetail.businessofficeName}`}
                      </Text>
                    </View>
                    <Image
                      source={{
                        // uri: 'https://cdn-icons-png.flaticon.com/128/888/888917.png',
                        uri: 'https://cdn-icons-png.flaticon.com/128/3293/3293303.png',
                      }}
                      resizeMode={'contain'}
                      style={{height: 15, width: 15}}
                    />
                  </View>
                  <View style={{flexDirection: 'row', marginVertical: 2}}>
                    <View
                      style={{
                        flex: 1,
                        marginRight: 5,
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        style={[
                          style.topHeaderText,
                          {
                            fontSize: R.fontSize.Size12,
                            color: R.colors.lightBlack,
                          },
                        ]}>
                        {moment(userDetail.businessofficeJoinDate).format(
                          'Do MMM YY',
                        )}
                      </Text>
                    </View>
                    <Image
                      source={{
                        // uri: 'https://cdn-icons-png.flaticon.com/128/10541/10541929.png',
                        uri: 'https://cdn-icons-png.flaticon.com/128/10692/10692577.png',
                      }}
                      resizeMode={'contain'}
                      style={{height: 15, width: 15}}
                    />
                  </View>
                </View>
              </View>

              <Animated.View
                style={[
                  style.flatUpperView,
                  {
                    opacity: animatedValue,
                    height: !showMore ? 0 : null,
                    transform: [
                      {
                        translateY: animatedValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-10, -5], // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                      },
                    ],
                  },
                ]}>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                  <HeaderCard data={AppContent.HeaderCardList} />
                </View>
              </Animated.View>
              <View
                style={[
                  style.dropDownMainView,
                  {
                    position: !showMore ? 'absolute' : 'relative',
                  },
                ]}>
                <Pressable
                  onPress={toggleCard}
                  style={({pressed}) => [
                    style.dropDownPress,
                    {opacity: pressed ? 0.5 : 1},
                  ]}>
                  <Image
                    source={R.images.dropdownIcon}
                    resizeMode={'contain'}
                    style={[
                      style.dropDownIcon,
                      {transform: [{rotate: showMore ? '180deg' : '0deg'}]},
                    ]}
                  />
                </Pressable>
              </View>
            </View>

            <View style={{marginTop: R.fontSize.Size18}}>
              {/* <HomeCustomCard
                heading={'Loan List'}
                data={ListOne}
                onPress={item =>
                  props.navigation.navigate(item.Url, {
                    item,
                  })
                }
              /> */}
              {userDetail.isMobile === '2' ? (
                <ManagerCustomCard
                  heading={'Loan List'}
                  onPress={item =>
                    props.navigation.navigate(item.Url, {
                      item,
                    })
                  }
                  data={AppContent.ManagerLoanCardList}
                />
              ) : (
                <CustomCard
                  heading={'Loan List'}
                  onPress={item =>
                    props.navigation.navigate(item.Url, {
                      item,
                    })
                  }
                  data={
                    userDetail.isMobile === '1'
                      ? AppContent.BROLoanCardList
                      : AppContent.LoanCardList
                  }
                />
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(HomeScreen);
