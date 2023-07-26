import * as React from 'react';
import {useState, useEffect} from 'react';
import {View,Text, StyleSheet,SafeAreaView,Image,Pressable,FlatList,Dimensions} from 'react-native'
import StoryScreen from '../../components/StoryScreen';
import Styles from './styles';
import R from '../../res/R';
import { Header } from '../../components';
import {connect, useDispatch} from 'react-redux'
import { GetAllCustomerRequest } from '../../actions/role.action';

const dataList = [
  {
    id: 1,
    customer: 'customer1',
    center: 'center1',
  },
  {
    id: 2,
    customer: 'customer1',
    center: 'center1',
  },
  {
    id: 3,
    customer: 'customer1',
    center: 'center1',
  },
  {
    id: 4,
    customer: 'customer1',
    center: 'center1',
  },
];

const CardLayout = (props) => {
  return (
    <View style={Styles.cardView}>
      <View style={Styles.customerView}>
        <Text style={Styles.titleText}>{props.customer}</Text>
      </View>
      <View style={Styles.customerView}>
        <Text style={Styles.titleText}>{props.center}</Text>
      </View>

      
        <View
          style={{width: R.fontSize.Size60, alignItems: 'center'}}>
          <Text style={Styles.titleText}>{props.proceed}</Text>
        </View>
      
    </View>
  );
}

const CardLineLayout = props => {
  return (
    <View style={Styles.cardLineView}>
      <View style={Styles.customerLineView}>
        <Text style={Styles.titleLineText}>{props.customer}</Text>
      </View>
      <View style={Styles.customerLineView}>
        <Text style={Styles.titleLineText}>{props.center}</Text>
      </View>
      <Pressable
        onPress={props.onPress}
        style={({pressed})=>[{
          width: R.fontSize.Size60, 
          alignItems: 'center',
          opacity:pressed?0.5:1
        }]}>
        <Image
          source={R.images.darkPlaneIcon}
          style={{height: R.fontSize.Size20, width: R.fontSize.Size20}}
          resizeMode={'contain'}
        />
      </Pressable>
    </View>
  );
};

const CustomerList = (props) =>{

  const dispatch = useDispatch()
  const [customerList, setCustomerList] = useState([])

  useEffect(()=>{
    handleGetAllCustomer();
  },[props.navigation])

  const handleGetAllCustomer = () => {
    dispatch(
      GetAllCustomerRequest(response => {
        console.log('Get All Customer Response=>', response.entity.entity);
        let tempList = response.entity.entity;
        setCustomerList(tempList);
      }),
    );
  };

    const handleProceed = (item) => {

        console.log("ITEM=>",item)
        props.navigation.navigate('LoanProposal',
        {itemList:item});
    }

    return (
      <StoryScreen>
        <SafeAreaView style={Styles.mainSafeView}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftSource={R.images.backIcon}
            title={'Customer List'}
          />
          <CardLayout
            customer={'Customer Name'}
            center={'Center Name'}
            proceed={'Proceed'}
          />
          <View style={Styles.mainView}>
            <FlatList
              style={{flex: 1}}
              data={customerList}
              renderItem={({item, index}) => {
                return (
                  <CardLineLayout
                    key={index}
                    customer={item.ApplicantName}
                    center={item.Husbandname}
                    onPress={() => handleProceed(item)}
                  />
                );
              }}
            />
          </View>
        </SafeAreaView>
      </StoryScreen>
    );
}

export default CustomerList