import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {AppButton, CustomCardPress, CustomTextInput, ListViewModal, StoryScreen} from '../../components';
import R from '../../res/R';
import AppContent from '../../utils/AppContent';
const screenHeight = Dimensions.get('screen').height;
import Toast from 'react-native-simple-toast';
import {useDispatch, connect} from 'react-redux';
import { GetRoleRequest } from '../../actions/role.action';

const RoleSelectionScreen = (props) => {

const dispatch = useDispatch();
const [roleModal, setRoleModal] = useState(false)
const [roleList, setRoleList] = useState([]);
const [selectedRole, setSelectedRole] = useState('');
const [userId, setUserId] = useState('');


useEffect(()=>{
 console.log('User Id==>', props.route.params?.user_id);
 setUserId(props.route.params?.user_id);
 handleRoleList(props.route.params?.user_id);
},[props.navigation])

const handleRoleList = (user_id) => {

    dispatch(GetRoleRequest(user_id, response => {
      console.log("Role List Response==>", response)
      setRoleList(response.entity);
    }))
}


const handleRoleSelect = (item) => {
    console.log("select Role==>",item)
    setSelectedRole(item.RoleName);
    setRoleModal(false)
}

const handleContinueValidation = () => {
    selectedRole != ''
      ? props.navigation.replace('HomeMenu')
      : Toast.show('Please select your role type', Toast.SHORT);

}


  return (
    <StoryScreen>
      <View style={{flex: 1, paddingHorizontal: R.fontSize.Size20}}>
        <View
          style={{
            height: screenHeight / 4,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={R.images.appLogo}
            resizeMode={'contain'}
            style={{
              height: R.fontSize.Size160,
              width: R.fontSize.Size160,
            }}
          />
          <View>
            <Text
              style={{
                fontFamily:R.fonts.extraBold,
                fontSize: R.fontSize.Size16,
                color: R.colors.secAppColor,
                textAlign: 'center',
              }}>
              {`Welcome to \nComplete Finance Solution`}
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily:R.fonts.regular,
            fontSize: R.fontSize.Size16,
            color: R.colors.placeHolderColor,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          {`Please select your role type to continue`}
        </Text>
        <View style={{flex: 1, paddingTop: R.fontSize.Size50}}>
          <CustomCardPress
            onPress={() => setRoleModal(true)}
            leftIcon={R.images.userIcon}
            title={selectedRole != '' ? selectedRole : 'Select your role'}
            TextColor={
              selectedRole != ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        </View>
        <View>
          <AppButton
            onPress={() => handleContinueValidation()}
            title={'Continue'}
          />
          <AppButton
            onPress={() => props.navigation.goBack()}
            title={'Cancel'}
            backgroundColor={R.colors.white}
            borderWidth={R.fontSize.Size2}
            borderColor={R.colors.appColor}
            marginTop={R.fontSize.Size8}
          />
        </View>
      </View>

      <ListViewModal
        visible={roleModal}
        cancelOnPress={() => setRoleModal(false)}
        onPress={item => handleRoleSelect(item)}
        dataList={roleList}
      />
    </StoryScreen>
  );
};

export default RoleSelectionScreen;
