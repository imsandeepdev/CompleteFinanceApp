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
      <View style={Styles.customerLineWhite} />
      <View style={Styles.customerView}>
        <Text style={Styles.titleText}>{props.center}</Text>
      </View>
      <View style={Styles.customerLineWhite} />
      <View
        style={{
          width: R.fontSize.Size70,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
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
      <View style={Styles.customerLineNew} />
      <View style={Styles.customerLineView}>
        <Text style={Styles.titleLineText}>{props.center}</Text>
      </View>
      <View style={Styles.customerLineNew} />

      <Pressable
        onPress={props.onPress}
        style={({pressed}) => [
          Styles.customerLinePress,
          {opacity: pressed ? 0.5 : 1}
        ]}>
        <Text style={Styles.loanText}>
          {'Loan'}
        </Text>
      </Pressable>
    </View>
  );
};

const CustomerList = (props) =>{

  const dispatch = useDispatch()
  const [customerList, setCustomerList] = useState([])

  useEffect(()=>{
    handleGetAllCustomer(props.profile.entity[0].StaffID);
  },[props.navigation])

  const handleGetAllCustomer = (staffId) => {
    console.log("STAFFID",staffId)
    let tempUrl = `?mode=ApplicantForLoanProposal&LoginId=${staffId}`;
    dispatch(
      GetAllCustomerRequest(tempUrl,response => {
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
      <StoryScreen loading={props.loading}>
        <SafeAreaView style={Styles.mainSafeView}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftSource={R.images.backIcon}
            title={'Customer List'}
          />
          <CardLayout
            customer={'Center Name'}
            center={'Customer Name'}
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
                    customer={item.CenterName}
                    center={item.ApplicantName}
                    onPress={() => handleProceed(item)}
                  />
                );
              }}
              ListEmptyComponent={
                <View style={{flex:1,alignItems:'center',justifyContent:'center',marginTop:R.fontSize.Size100}}>
                <Text
                style={{
                  fontFamily:R.fonts.regular,
                  fontWeight:'600',
                  fontSize:R.fontSize.Size14,
                  color:R.colors.placeHolderColor
                }}
                >{'No found customer list'}</Text>
                </View>
              }
            />
          </View>
        </SafeAreaView>
      </StoryScreen>
    );
}

const mapStateToProps = (state, props) => ({
  loading: state.regGroupRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});
export default connect(mapStateToProps) (CustomerList)