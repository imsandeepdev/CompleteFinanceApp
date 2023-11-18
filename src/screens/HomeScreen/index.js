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
import {useDispatch, connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from './style';
import {GetMenuListRequest} from '../../actions/role.action';
import {UserProfileRequest} from '../../actions/profile.action';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';

const HeaderList = [
  {
    id: '1',
    title: 'Saving Plan',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmXA-Cn-ufWMIkgZrae82xfyQYfDdeGP2D0p9FF4oDsQ&usqp=CAU&ec=48665699',
  },
  {
    id: '2',
    title: 'Money Tree',
    url: 'https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-Financial-Management.jpg.optimal.jpg',
  },
  {
    id: '3',
    title: 'Home Loan',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyoazwee-uSof7t911AQvvCtr_VUZFN0i3QUlPrtI0k29UzygLYgsBE4IqA_E8w049LrlhRdQlH0&usqp=CAU&ec=48665699',
  },
  {
    id: '4',
    title: 'Family Plan',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkXIuTb4aWlhWnAcTlikoXebE_77Dm1tKQvF1nhKxg&usqp=CAU&ec=48665699',
  },
  {
    id: '5',
    title: 'Home Loan',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyoazwee-uSof7t911AQvvCtr_VUZFN0i3QUlPrtI0k29UzygLYgsBE4IqA_E8w049LrlhRdQlH0&usqp=CAU&ec=48665699',
  },
  {
    id: '6',
    title: 'Family Plan',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkXIuTb4aWlhWnAcTlikoXebE_77Dm1tKQvF1nhKxg&usqp=CAU&ec=48665699',
  },
];

const ListOne = [
  {
    id: 0,
    Title: 'Loan Application',
    icon: 'https://poonawallafincorp.com/pfca/assets/og_image/og_image-what-is-loan-account-number-og.jpg',
    icon1: R.images.applicantScreen,
    Url: 'ApplicantForm',
    For: 'LoanApplication',
  },
  {
    id: 1,
    Title: 'Group Formation',
    icon: 'https://www.rhythmsystems.com/hubfs/16_RS_For_Blogs/iStock-504635632.jpg',
    icon1: R.images.groupIcon,
    Url: 'GroupForm',
    For: 'GroupForm',
  },
  {
    id: 2,
    Title: 'Center Formation',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkXIuTb4aWlhWnAcTlikoXebE_77Dm1tKQvF1nhKxg&usqp=CAU&ec=48665699',
    icon1: R.images.applicantFormIcon,
    Url: 'CenterForm',
    For: 'CenterForm',
  },
  {
    id: 3,
    Title: 'GRT',
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyoazwee-uSof7t911AQvvCtr_VUZFN0i3QUlPrtI0k29UzygLYgsBE4IqA_E8w049LrlhRdQlH0&usqp=CAU&ec=48665699',
    icon1: R.images.grtScreen,
    Url: 'GrtForm',
    For: 'Grt',
  },
  {
    id: 4,
    Title: 'Loan Proposal',
    icon: 'https://www.firstib.com/wp-content/uploads/2022/04/iStock-1322517295.jpg',
    icon1: R.images.applicantFormIcon,
    Url: 'LoanProposal',
    For: 'LoanProposal',
  },
  {
    id: 5,
    Title: 'Loan Approval',
    icon: 'https://img.freepik.com/free-photo/corporate-business-handshake-partners_53876-102581.jpg',
    icon1: R.images.applicantFormIcon,
    Url: 'LoanApproval',
    For: 'LoanApproval',
  },
  {
    id: 6,
    Title: 'Pre Disbursement',
    icon: 'https://www.nextprocess.com/wp-content/uploads/secure-digital-payment-disbursement-solution-1920x1280.jpg',
    icon1: R.images.applicantFormIcon,
    Url: 'DisbursementScreen',
    For: 'DisbursementScreen',
  },
  {
    id: 6,
    Title: 'Payment Screen',
    icon: 'https://www.chaserhq.com/hubfs/03%20BLOG/5benefits-of-payment-portals-for-smal-businesses.jpg',
    icon1: R.images.applicantFormIcon,
    Url: 'PaymentScreen',
    For: 'PaymentScreen',
  },
];

const CustomCard = props => {
  return (
    <View style={style.customCardMainView}>
      <View style={style.customCardView}>
        <Text style={style.customCardHead}>{props.heading}</Text>
      </View>
      <View style={style.customCardBottomView}>
        {props.data.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => props.onPress(item)}
              style={style.flatMainView}>
              <Image
                source={{uri: item.icon}}
                style={style.customCardBottomIcon100}
                resizeMode={'cover'}
              />
              <View style={style.flatTitleMainView}>
                <View style={style.flatTitleView}>
                  <Text style={style.customCardBottomTitle}>{item.Title}</Text>
                </View>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

const HomeCustomCard = props => {
  return (
    <View style={style.customCardMainView}>
      <View style={style.customCardView}>
        <Text style={style.customCardHead}>{props.heading}</Text>
      </View>
      <View style={style.customCardBottomView}>
        {props.data.map((item, index) => {
          return (
            <Pressable
              key={index}
              onPress={() => props.onPress(item)}
              style={({pressed}) => [
                {
                  opacity: pressed ? 0.5 : 1,
                },
              ]}>
              <LinearGradient
                colors={['#329691', '#266C87', '#266C87']}
                style={style.linearMainView}>
                <View style={style.linearImageView}>
                  <Image
                    source={{uri: item.icon}}
                    style={style.customCardBottomIcon100}
                    resizeMode={'cover'}
                  />
                </View>
                <View style={style.linearTitleMainView}>
                  <View style={style.linearTitleView}>
                    <Text style={style.customCardBottomTitle} numberOfLines={1}>
                      {item.Title}
                    </Text>
                  </View>
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
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [selectedUser, setSelectedUser] = useState({});

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
    setSelectedUser(tempUser);
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
                      {fontSize: R.fontSize.Size12, color: R.colors.lightBlack},
                    ]}>
                    {`${selectedUser.RoleName}`}
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
                          color: R.colors.lightBlack,
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
                  {HeaderList.map((item, index) => {
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
                  })}
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
              <HomeCustomCard
                heading={'Loan List'}
                data={ListOne}
                onPress={item =>
                  props.navigation.navigate(item.Url, {
                    item,
                  })
                }
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default HomeScreen;
