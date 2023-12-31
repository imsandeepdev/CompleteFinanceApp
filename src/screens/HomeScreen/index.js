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
  Alert,
} from 'react-native';
import {Header, StoryScreen} from '../../components';
import R from '../../res/R';
import {useDispatch, connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';
import {GetMenuListRequest} from '../../actions/role.action';
import {UserProfileRequest} from '../../actions/profile.action';
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

// const HomeCustomCard = props => {
//   return (
//     <View style={style.customCardMainView}>
//       <View style={style.customCardView}>
//         <Text style={style.customCardHead}>{props.heading}</Text>
//       </View>
//       <View style={style.customCardBottomView}>
//         {props.data.map((item, index) => {
//           return (
//             <Pressable
//               key={index}
//               onPress={() => props.onPress(item)}
//               style={({pressed}) => [
//                 {
//                   opacity: pressed ? 0.5 : 1,
//                 },
//               ]}>
//               <LinearGradient
//                 colors={['#329691', '#266C87', '#266C87']}
//                 style={style.linearMainView}>
//                 <View style={style.linearImageView}>
//                   <Image
//                     source={{uri: item.icon}}
//                     style={style.customCardBottomIcon100}
//                     resizeMode={'cover'}
//                   />
//                 </View>
//                 <View style={style.linearTitleMainView}>
//                   <View style={style.linearTitleView}>
//                     <Text style={style.customCardBottomTitle} numberOfLines={1}>
//                       {item.Title}
//                     </Text>
//                   </View>
//                 </View>
//               </LinearGradient>
//             </Pressable>
//           );
//         })}
//       </View>
//     </View>
//   );
// };

const HomeScreen = props => {
  const dispatch = useDispatch();
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [selectedUser, setSelectedUser] = useState({});
  const [selectedUserType, setSelectedUserType] = useState({});

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      screenFocus();
    });
    return unsubscribe;
  }, [props.navigation]);

  const screenFocus = async () => {
    handleMenuListAPI();
    let user_Data = await AsyncStorage.getItem('userData');
    console.log('Selected User List==>', JSON.parse(user_Data));
    let tempUser = JSON.parse(user_Data);
    let user_Type = await AsyncStorage.getItem('userTypeDetail');
    console.log('Selected User List==>', JSON.parse(user_Type));
    let tempUserType = JSON.parse(user_Type);
    setSelectedUserType(tempUserType);
    handleProfile(Number(tempUser.EmpID));
  };

  const handleProfile = userid => {
    dispatch(
      UserProfileRequest(userid, response => {
        console.log('user Profile res==>', response);
        setUserDetail(response.entity[0]);
      }),
    );
  };

  const handleMenuListAPI = () => {
    setLoading(true);
    dispatch(
      GetMenuListRequest(response => {
        console.log('Menu List Res==>', response);
        // eslint-disable-next-line no-undef
        setMenuList(response.entity.entity);
      }),
    );
    setLoading(false);
  };

  const toggleCard = () => {
    Animated.timing(animatedValue, {
      toValue: animatedValue._value === 0 ? 1 : 0, // Toggle between 0 and 1
      duration: 300, // Animation duration in milliseconds
      useNativeDriver: false, // Set to true if you want to use the native driver (Android only)
    }).start();
    setShowMore(!showMore);
  };

  return (
    <StoryScreen loading={loading}>
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
                <View>
                  <Text style={style.topHeaderText}>
                    {`${userDetail.StaffName}`}
                  </Text>
                  <Text
                    style={[
                      style.topHeaderText,
                      {fontSize: R.fontSize.Size12, color: R.colors.lightWhite},
                    ]}>
                    {`${selectedUserType.RoleName}`}
                  </Text>
                </View>
                <View>
                  <View>
                    <Text
                      style={
                        style.topHeaderText
                      }>{`${userDetail.businessofficeName}`}</Text>
                    <Text
                      style={[
                        style.topHeaderText,
                        {
                          fontSize: R.fontSize.Size12,
                          color: R.colors.lightWhite,
                        },
                      ]}>
                      {moment(userDetail.businessofficeJoinDate).format(
                        'Do MMM YY',
                      )}
                    </Text>
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

                  {/* {HeaderList.map((item, index) => {
                    return (
                      <View key={index} style={style.flatMainView}>
                        <Image
                          source={{uri: item.url}}
                          style={{height: '100%', width: '100%'}}
                          resizeMode={'cover'}
                        />
                        <View style={style.flatTitleMainView}>
                          <View style={style.flatTitleView}>
                            <Text>{item.title}</Text>
                          </View>
                        </View>
                      </View>
                    );
                  })} */}
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
              <CustomCard
                heading={'Loan List'}
                onPress={item =>
                  props.navigation.navigate(item.Url, {
                    item,
                  })
                }
                data={AppContent.LoanCardList}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default HomeScreen;
