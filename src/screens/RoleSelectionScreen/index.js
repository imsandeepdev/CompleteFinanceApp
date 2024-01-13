import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {
  AppButton,
  CustomCardPress,
  GradientButton,
  ListViewModal,
  RoleSelectionModal,
  StoryScreen,
} from '../../components';
import R from '../../res/R';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {GetRoleRequest} from '../../actions/role.action';
import style from './style';
import {UserProfileRequest} from '../../actions/profile.action';

const RoleSelectionScreen = props => {
  const dispatch = useDispatch();
  const [roleModal, setRoleModal] = useState(false);
  const [roleList, setRoleList] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedRoleId, setSelectedRoleId] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    console.log('User Id==>', props.route.params?.user_id);
    setSelectedUserId(props.route.params?.user_id);
    handleRoleList(props.route.params?.user_id);
  }, [props.navigation]);

  const handleRoleList = user_id => {
    dispatch(
      GetRoleRequest(user_id, response => {
        console.log('Role List Response==>', response);
        setRoleList(response.entity);
      }),
    );
  };

  const handleRoleSelect = item => {
    console.log('select Role==>', item);
    setSelectedRoleId(item.RoleId);
    setSelectedRole(item.RoleName);
    setRoleModal(false);
  };

  const handleContinueValidation = () => {
    selectedRole !== ''
      ? handleRoleSelection()
      : Toast.show('Please select your role type', Toast.SHORT);
  };

  const handleRoleSelection = () => {
    let data = {
      userId: selectedUserId,
      roleId: selectedRoleId,
    };
    dispatch(
      UserProfileRequest(data, response => {
        console.log('user Profile res==>', response);
        if (response.statusCode === 200) {
          props.navigation.replace('HomeMenu');
        } else {
          Toast.show('please select valid role', Toast.SHORT);
        }
      }),
    );
  };

  return (
    <StoryScreen>
      <View style={style.mainView}>
        <View style={style.topImageView}>
          <Image
            source={R.images.appLogo}
            resizeMode={'contain'}
            style={style.appLogoIcon}
          />
          <View>
            <Text style={style.titleText}>
              {`Welcome to \nComplete Finance Solution`}
            </Text>
            <Text style={style.subTitleText}>
              {'Please select your role type to continue'}
            </Text>
          </View>
        </View>

        <View style={style.bodyView}>
          <CustomCardPress
            onPress={() => setRoleModal(true)}
            leftIcon={R.images.userIcon}
            title={selectedRole !== '' ? selectedRole : 'Select your role'}
            TextColor={
              selectedRole !== ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        </View>
        <View>
          <GradientButton
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
            textColor={R.colors.secAppColor}
          />
        </View>
      </View>

      <RoleSelectionModal
        visible={roleModal}
        cancelOnPress={() => setRoleModal(false)}
        onPress={item => handleRoleSelect(item)}
        dataList={roleList}
        heading={'Select Your Role'}
      />
    </StoryScreen>
  );
};

export default RoleSelectionScreen;
