import * as React from 'react';
import {useState, createRef} from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import R from '../../res/R';
import {
  AppButton,
  AppCardPress,
  AppTextInput,
  ListViewModal,
} from '../../components';

const CustomCenterCard = (props) =>{
  return (
    <View
      style={{
        flexDirection: 'row',
        height: R.fontSize.Size40,
        borderTopLeftRadius: props.borderTopLeftRadius,
        borderTopRightRadius: props.borderTopRightRadius,
        borderBottomLeftRadius: props.borderBottomLeftRadius,
        borderBottomRightRadius: props.borderBottomRightRadius,
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : R.colors.darkGreenColor,
        overflow: 'hidden',
        borderWidth: R.fontSize.Size2,
        borderColor: R.colors.darkGreenColor,
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: R.fonts.regular,
            fontSize: R.fontSize.Size14,
            fontWeight: '600',
            color: props.textColor ? props.textColor : R.colors.lightWhite,
          }}>
          {props.centerName}
        </Text>
      </View>
      <View
        style={{
          height: '100%',
          width: R.fontSize.Size2,
          backgroundColor: props.middleBorderColor
            ? props.middleBorderColor
            : R.colors.lightWhite,
        }}
      />
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: R.fonts.regular,
            fontSize: R.fontSize.Size14,
            fontWeight: '600',
            color: props.textColor ? props.textColor : R.colors.lightWhite,
          }}>
          {props.customerName}
        </Text>
      </View>
    </View>
  );
}

const CustomTitle = (props) => {
  return (
    <View
      style={{
        marginVertical: R.fontSize.Size15,
      }}>
      <Text
        style={{
          fontFamily: R.fonts.regular,
          fontSize: R.fontSize.Size14,
          fontWeight: '700',
          color: R.colors.textPriColor,
        }}>
        {props.title}
      </Text>
    </View>
  );
}

const IncomeDetail = props => {


  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, paddingVertical: R.fontSize.Size10}}>
        <CustomCenterCard
          centerName={'Center name'}
          customerName={'Customer name'}
          borderTopLeftRadius={R.fontSize.Size5}
          borderTopRightRadius={R.fontSize.Size5}
        />
        <CustomCenterCard
          centerName={props.centerName}
          customerName={props.customerName}
          backgroundColor={R.colors.white}
          middleBorderColor={R.colors.darkGreenColor}
          textColor={R.colors.textPriColor}
        />

        <CustomTitle title={'Customer Detail'} />
        <AppCardPress
          onPress={props.onPress_customerOccupation}
          headTitle={'Occupation'}
          title={
            props.title_customerOccupation != null
              ? props.title_customerOccupation
              : 'Occupation'
          }
          TextColor={
            props.title_customerOccupation != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_customerOccupation != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        {props.visible_customerSector && (
          <AppCardPress
            onPress={props.onPress_customerSector}
            headTitle={'Sector'}
            title={
              props.title_customerSector != null
                ? props.title_customerSector
                : 'Sector'
            }
            TextColor={
              props.title_customerSector != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_customerSector != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        )}
        {props.visible_customerSector && (
          <AppCardPress
            onPress={props.onPress_customerSectorPurpose}
            headTitle={'Sector Purpose'}
            title={
              props.title_customerSectorPurpose != null
                ? props.title_customerSectorPurpose
                : 'Sector Purpose'
            }
            TextColor={
              props.title_customerSectorPurpose != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_customerSectorPurpose != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        )}
        <AppTextInput
          placeholder={'Monthly Income'}
          headTitle={'Monthly Income'}
          headTitleColor={
            props.customermonthly_income != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.customermonthly_income}
          onChangeText={props.onChange_customermonthlyIncome}
          keyboardType={'numeric'}
        />
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: R.colors.lightWhite,
          }}
        />

        <CustomTitle title={'Spoose Detail'} />
        <AppCardPress
          onPress={props.onPress_spooseOccupation}
          headTitle={'Occupation'}
          title={
            props.title_spooseOccupation != null
              ? props.title_spooseOccupation
              : 'Occupation'
          }
          TextColor={
            props.title_spooseOccupation != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_spooseOccupation != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        {props.visible_spooseSector && (
          <AppCardPress
            onPress={props.onPress_spooseSector}
            headTitle={'Sector'}
            title={
              props.title_spooseSector != null
                ? props.title_spooseSector
                : 'Sector'
            }
            TextColor={
              props.title_spooseSector != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_spooseSector != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        )}
        {props.visible_spooseSector && (
          <AppCardPress
            onPress={props.onPress_spooseSectorPurpose}
            headTitle={'Sector Purpose'}
            title={
              props.title_spooseSectorPurpose != null
                ? props.title_spooseSectorPurpose
                : 'Sector Purpose'
            }
            TextColor={
              props.title_spooseSectorPurpose != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_spooseSectorPurpose != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        )}
        <AppTextInput
          placeholder={'Monthly Income'}
          headTitle={'Monthly Income'}
          headTitleColor={
            props.spoosemonthly_income != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.spoosemonthly_income}
          onChangeText={props.onChange_spoosemonthlyIncome}
          returnKeyType={'done'}
        />

        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: R.colors.lightWhite,
          }}
        />
        <CustomTitle title={'Unmarried children detail'} />

        <AppCardPress
          onPress={props.onPress_unmarriedChildOccupation}
          headTitle={'Occupation'}
          title={
            props.title_unmarriedChildOccupation != null
              ? props.title_unmarriedChildOccupation
              : 'Occupation'
          }
          TextColor={
            props.title_unmarriedChildOccupation != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_unmarriedChildOccupation != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        {props.visible_unmarriedChildSector &&
        <AppCardPress
          onPress={props.onPress_unmarriedChildSector}
          headTitle={'Sector'}
          title={
            props.title_unmarriedChildSector != null
              ? props.title_unmarriedChildSector
              : 'Sector'
          }
          TextColor={
            props.title_unmarriedChildSector != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_unmarriedChildSector != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
}
 {props.visible_unmarriedChildSector &&
        <AppCardPress
          onPress={props.onPress_unmarriedChildSectorPurpose}
          headTitle={'Sector Purpose'}
          title={
            props.title_unmarriedChildSectorPurpose != null
              ? props.title_unmarriedChildSectorPurpose
              : 'Sector Purpose'
          }
          TextColor={
            props.title_unmarriedChildSectorPurpose != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_unmarriedChildSectorPurpose != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
}
        <AppTextInput
          placeholder={'Monthly Income'}
          headTitle={'Monthly Income'}
          headTitleColor={
            props.unmarriedChildmonthly_income != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.unmarriedChildmonthly_income}
          onChangeText={props.onChange_unmarriedChildmonthlyIncome}
          returnKeyType={'done'}
        />

        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: R.colors.lightWhite,
          }}
        />
        <CustomTitle title={'Total Income'} />

        <AppCardPress
          title={
            props.overAllIncome != null ? props.overAllIncome : 'Total Income'
          }
          TextColor={
            props.overAllIncome != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.overAllIncome != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        <AppButton
          onPress={props.nextOnPress}
          title={'Next'}
          buttonHeight={R.fontSize.Size45}
          paddingHorizontal={R.fontSize.Size25}
          marginHorizontal={R.fontSize.Size5}
        />
      </View>
    </View>
  );
};

export default IncomeDetail;
