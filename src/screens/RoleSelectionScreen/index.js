import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {AppButton, CustomCardPress, CustomTextInput, ListViewModal, StoryScreen} from '../../components';
import R from '../../res/R';
import AppContent from '../../utils/AppContent';
const screenHeight = Dimensions.get('screen').height;
import Toast from 'react-native-simple-toast'

const RoleSelectionScreen = (props) => {

const [roleModal, setRoleModal] = useState(false)
const [selectedRole, setSelectedRole] = useState('');


const handleRoleSelect = (item) => {
    console.log("select Role==>",item)
    setSelectedRole(item)
    setRoleModal(false)
}

const handleContinueValidation = () => {
    selectedRole != ''
      ? Toast.show('Valid', Toast.SHORT)
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
              height: R.fontSize.Size200,
              width: R.fontSize.Size200,
            }}
          />
          <View
            style={{
              position: 'absolute',
              bottom: R.fontSize.Size10,
            }}>
            <Text
              style={{
                fontSize: R.fontSize.Size16,
                color: R.colors.secAppColor,
                fontWeight: '700',
                textAlign: 'center',
              }}>
              {`Welcome to \nComplete Finance Solution`}
            </Text>
          </View>
        </View>
        <Text
          style={{
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
        dataList={AppContent.roleList}
      />
    </StoryScreen>
  );
};

export default RoleSelectionScreen;
