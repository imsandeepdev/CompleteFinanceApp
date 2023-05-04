import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions,SafeAreaView,FlatList} from 'react-native';
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
import Toast from 'react-native-simple-toast';

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
    <View style={{marginTop:R.fontSize.Size14}}>
      <View
        style={{
          marginVertical: R.fontSize.Size10,
          height: R.fontSize.Size30,
          borderBottomWidth: 2,
          borderColor: R.colors.placeHolderColor,
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
      <View >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={props.data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View key={index}
              style={{paddingLeft: index==0 ? R.fontSize.Size14: 0}}
              >
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
                      marginTop:R.fontSize.Size5
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
 

  return (
    <StoryScreen>
      <SafeAreaView style={{flex: 1}}>
        <Header
          onPress={() => props.navigation.navigate('LoginScreen')}
          leftSource={R.images.menuIcon}
          title={'Complete Finance Solution'}
        />

        <View style={{flex: 1}}>
          <View
            style={{
              height: R.fontSize.Size200,
              marginHorizontal: R.fontSize.Size20,
              borderWidth: 1,
              marginTop: R.fontSize.Size10,
              borderRadius: R.fontSize.Size5,
              backgroundColor: R.colors.lightWhite,
            }}>
            <Image
              source={{
                uri: 'https://i.pinimg.com/736x/dd/45/cb/dd45cb565575ea3808cdb3d68a02aade.jpg'
              }}
              resizeMode={'cover'}
              style={{
                height:'100%',
                width:'100%'
              }}
            />
          </View>
          <CustomCard heading={'Loan List'} data={ListOne} />
          <CustomCard heading={'Finance List'} data={ListTwo} />
        </View>
      </SafeAreaView>
    </StoryScreen>
  );
};

export default HomeScreen;
