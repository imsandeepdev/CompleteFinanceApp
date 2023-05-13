import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions,SafeAreaView,FlatList, Pressable} from 'react-native';
import {
  AppButton,
  CustomCardPress,
  CustomTextInput,
  Header,
  ListViewModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

import Toast from 'react-native-simple-toast';

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
];

const ListOne = [
  {
    id: '1',
    title: 'Saving Plan',
    url: 'https://cdn-icons-png.flaticon.com/512/2721/2721091.png',
  },
  {
    id: '2',
    title: 'Money Tree',
    url: 'https://cdn.iconscout.com/icon/free/png-256/free-agriculture-loan-1795547-1522752.png',
  },
  {
    id: '3',
    title: 'Home Loan',
    url: 'https://www.iconbunny.com/icons/media/catalog/product/cache/2/thumbnail/600x/1b89f2fc96fc819c2a7e15c7e545e8a9/1/0/106.9-home-loan-icon-iconbunny.jpg',
  },
  {
    id: '4',
    title: 'Family Plan',
    url: 'https://www.clipartmax.com/png/middle/455-4557434_areas-of-practice-logo-family-planning.png',
  },
];

const ListTwo = [
  {
    id: '1',
    title: 'Corporate Finance',
    url: 'https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-corporate-finance-icon-design-image_1170929.jpg',
  },
  {
    id: '2',
    title: 'Muntual fund',
    url: 'https://www.pngitem.com/pimgs/m/34-349175_mutual-fund-investment-icon-hd-png-download.png',
  },
  {
    id: '3',
    title: 'Public finance',
    url: 'https://img.freepik.com/premium-vector/ppp-public-private-partnership-online-market-safe-finance-investment-vector-stock-illustration_100456-9766.jpg?w=2000',
  },
  {
    id: '4',
    title: 'Family Plan',
    url: 'https://www.clipartmax.com/png/middle/455-4557434_areas-of-practice-logo-family-planning.png',
  },
];

const CustomCard = (props) => {
  return (
    <View style={{marginTop: R.fontSize.Size14}}>
      <View
        style={{
          marginVertical: R.fontSize.Size10,
          marginHorizontal: R.fontSize.Size20,
        }}>
        <Text
          style={{
            fontSize: R.fontSize.Size16,
            fontWeight: '500',
            color: R.colors.secAppColor,
          }}>
          {props.heading}
        </Text>
      </View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                key={index}
                style={{paddingLeft: index == 0 ? R.fontSize.Size14 : 0}}>
                <View
                  style={{
                    marginHorizontal: R.fontSize.Size6,
                    borderWidth: 1,
                    padding: R.fontSize.Size5,
                    width: R.fontSize.Size120,
                    height: R.fontSize.Size90,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: R.fontSize.Size4,
                    borderColor: R.colors.placeHolderColor,
                    backgroundColor: R.colors.white,
                    shadowColor: R.colors.lightBlack,
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 6,
                  }}>
                  <Image
                    source={{uri: item.url}}
                    resizeMode={'contain'}
                    style={{
                      height: R.fontSize.Size40,
                      width: R.fontSize.Size40,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: R.fontSize.Size14,
                      fontWeight: '500',
                      color: R.colors.secAppColor,
                      textAlign: 'center',
                      marginTop: R.fontSize.Size5,
                    }}
                    numberOfLines={1}>{`${item.title}`}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}


const HomeScreen = props => {

  const [showMore, setShowMore] = useState(false)
 

  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => props.navigation.navigate('LoginScreen')}
          leftSource={R.images.menuIcon}
          title={'Complete Finance Solution'}
        />

        <View style={{flex: 1}}>
          <View>
            <View
              style={{
                height: !showMore ? R.fontSize.Size160 : null,
                marginHorizontal: R.fontSize.Size10,
                marginTop: R.fontSize.Size10,
                borderRadius: R.fontSize.Size5,
                backgroundColor: R.colors.lightWhite,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <FlatList
                numColumns={2}
                data={HeaderList}
                keyExtractor={(item, index) => index}
                renderItem={({item, index}) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: screenWidth / 2.4,
                        height: screenWidth / 3,
                        marginHorizontal: R.fontSize.Size10,
                        backgroundColor: R.colors.lightWhite,
                        borderRadius: R.fontSize.Size8,
                        overflow: 'hidden',
                        borderWidth: 1,
                        marginVertical: R.fontSize.Size6,
                        marginTop: R.fontSize.Size8,
                      }}>
                      <Image
                        source={{uri: item.url}}
                        style={{
                          height: '100%',
                          width: '100%',
                        }}
                        resizeMode={'cover'}
                      />
                      <View
                      style={{
                        position:'absolute',
                        bottom:5,
                        right:0,
                      }}
                      >
                        <View
                        style={{
                          backgroundColor:R.colors.lightWhite,
                          padding:R.fontSize.Size4,
                          paddingHorizontal:R.fontSize.Size8,
                          opacity:0.8,
                          borderRadius:R.fontSize.Size4
                        }}
                        >
                          <Text>{item.title}</Text>
                        </View>  
                      </View>  
                    </View>
                  );
                }}
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Pressable
                onPress={() => {
                  setShowMore(!showMore);
                }}
                style={({pressed}) => [
                  {
                    padding: R.fontSize.Size10,
                    paddingHorizontal: R.fontSize.Size50,
                    borderBottomWidth: 1,
                    borderColor: R.colors.placeholderTextColor,
                    opacity: pressed ? 0.5 : 1,
                  },
                ]}>
                <Image
                  source={R.images.dropdownIcon}
                  resizeMode={'contain'}
                  style={{
                    height: R.fontSize.Size10,
                    width: R.fontSize.Size10,
                    transform: [{rotate: showMore ? '180deg' : '0deg'}],
                  }}
                />
              </Pressable>
            </View>
          </View>
          <CustomCard heading={'Loan List'} data={ListOne} />
          <CustomCard heading={'Finance List'} data={ListTwo} />
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default HomeScreen;
