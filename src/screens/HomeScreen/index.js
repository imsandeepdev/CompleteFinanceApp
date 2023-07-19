import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View, 
  Text, 
  StyleSheet,
   Image,
    Dimensions,
    SafeAreaView,
    FlatList, 
    Pressable,
    Animated,
    ScrollView
  } from 'react-native';
import {
  AppButton,
  CustomCardPress,
  CustomTextInput,
  Header,
  ListViewModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import {useDispatch,connect} from 'react-redux';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

import Toast from 'react-native-simple-toast';
import style from './style';
import { GetMenuListRequest } from '../../actions/role.action';

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
    icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721091.png',
    Url: 'ApplicantForm',
  },
  {
    id: 1,
    Title: 'Group Formation',
    icon: 'https://cdn.iconscout.com/icon/free/png-256/free-agriculture-loan-1795547-1522752.png',
    Url: 'GroupForm',
  },
  {
    id: 2,
    Title: 'Center Formation',
    icon: 'https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/0/106.9-home-loan-icon-iconbunny.jpg',
    Url: 'CenterForm',
  },
  {
    id: 3,
    Title: 'GRT',
    icon: 'https://www.clipartmax.com/png/middle/455-4557434_areas-of-practice-logo-family-planning.png',
    Url: 'GrtForm',
  },
  {
    id: 4,
    Title: 'Sub Master-2',
    icon: 'https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/0/106.9-home-loan-icon-iconbunny.jpg',
    Url: 'GrtForm',
  },
  {
    id: 5,
    Title: 'Assign Menu',
    icon: 'https://www.clipartmax.com/png/middle/455-4557434_areas-of-practice-logo-family-planning.png',
    Url: 'GrtForm',
  },
];

const ListTwo = [
  {
    id: '1',
    Title: 'Corporate Finance',
    icon: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-corporate-finance-icon-design-image_1170929.jpg',
    Url: 'ApplicantForm',
  },
  {
    id: '2',
    Title: 'Muntual fund',
    icon: 'https://www.pngitem.com/pimgs/m/34-349175_mutual-fund-investment-icon-hd-png-download.png',
    Url: 'GroupForm',
  },
  {
    id: '3',
    Title: 'Public finance',
    icon: 'https://img.freepik.com/premium-vector/ppp-public-private-partnership-online-market-safe-finance-investment-vector-stock-illustration_100456-9766.jpg?w=2000',
    Url: 'CenterForm',
  },
  {
    id: '4',
    Title: 'Family Plan',
    icon: 'https://www.clipartmax.com/png/middle/455-4557434_areas-of-practice-logo-family-planning.png',
    Url: 'GrtForm',
  },
];

const CustomCard = (props) => {
  return (
    <View style={style.customCardMainView}>
      <View style={style.customCardView}>
        <Text style={style.customCardHead}>{props.heading}</Text>
      </View>
      <View style={{flexDirection: 'row', flexWrap: 'wrap',alignItems:'center',justifyContent:'center'}}>
        {
        props.data.map((item,index)=>{
          return (
            <Pressable
              key={index}
              onPress={() => props.onPress(item.Url)}
              style={{marginVertical:R.fontSize.Size5}}>
              <View style={style.customCardFlatView}>
                <Image
                  source={{uri: item.icon}}
                  resizeMode={'contain'}
                  style={{
                    height: R.fontSize.Size45,
                    width: R.fontSize.Size45,
                  }}
                />
                <Text style={style.customCardTitleText} numberOfLines={1}>
                  {`${item.Title}`}
                </Text>
              </View>
            </Pressable>
          );
        })
        
        }
        
      </View>
    </View>
  );
}


const HomeScreen = props => {

  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false)
  const [fadeValue] = useState(new Animated.Value(0))
  const [menuList, setMenuList] = useState([]);


useEffect(()=>{
 const unsubscribe = props.navigation.addListener('focus', () => {
   screenFocus();
 });
 return unsubscribe;
},[props.navigation])

const screenFocus = () => {
  handleMenuListAPI();
}

 const handleMenuListAPI = () => {
  setLoading(true)
   dispatch(
     GetMenuListRequest(response => {
       console.log('Menu List Res==>', response);
       setMenuList(response.entity.entity);
        setLoading(false);

     }),
   );
 };
 
const _start = () => {
  if(!showMore)
  {

  setShowMore(!showMore);
  Animated.timing(fadeValue, {
    toValue: 3,
    duration: 3000,
    useNativeDriver:true
  }).start();

}
else
{
   Animated.timing(fadeValue, {
     toValue: 0,
     duration: 3000,
     useNativeDriver: true,
   }).start();
   setTimeout(() => {
     setShowMore(!showMore);
   }, 3000);
}
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
                  <Text style={style.topHeaderText}>{'Shyam Yadav'}</Text>
                  <Text
                    style={[
                      style.topHeaderText,
                      {fontSize: R.fontSize.Size12, color: R.colors.lightBlack},
                    ]}>
                    {'Master'}
                  </Text>
                </View>
                <View>
                  <View>
                    <Text style={style.topHeaderText}>{'Lucknow Branch'}</Text>
                    <Text
                      style={[
                        style.topHeaderText,
                        {
                          fontSize: R.fontSize.Size12,
                          color: R.colors.lightBlack,
                        },
                      ]}>
                      {'23rd June 2023'}
                    </Text>
                  </View>
                </View>
              </View>

              <Animated.View
                style={[
                  style.flatUpperView,
                  {
                    opacity: fadeValue,
                    height: !showMore ? 0 : null,
                    transform: [
                      {
                        translateY: fadeValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-10, -5], // 0 : 150, 0.5 : 75, 1 : 0
                        }),
                      },
                    ],
                  },
                ]}>
                  <View
                  style={{flexDirection:'row',flexWrap:'wrap'}}
                  >
                    {
                      HeaderList.map((item,index)=>{
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
                      })
                    }

                  </View>
                
                {/* <FlatList
                  style={style.mainView}
                  numColumns={2}
                  data={HeaderList}
                  keyExtractor={(item, index) => index}
                  renderItem={({item, index}) => {
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
                  }}
                /> */}
              </Animated.View>
              <View
                style={[
                  style.dropDownMainView,
                  {
                    position: !showMore ? 'absolute' : 'relative',
                  },
                ]}>
                <Pressable
                  onPress={() => {
                    _start(), console.log('Fade value==>', fadeValue._value);
                  }}
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

            <View>
              <CustomCard
                heading={'Loan List'}
                data={ListOne}
                onPress={item => props.navigation.navigate(item)}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default HomeScreen;
