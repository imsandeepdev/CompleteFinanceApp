import * as React from 'react';
import {useState, createRef} from 'react';
import {View, Pressable, Text, Image} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput, CustomPhotoCard, GalleryModal, ListViewModal} from '../../components';

const GenralDetail = (props) => {

    let fnameRef = createRef()
    let mnameRef = createRef();
    let lnameRef = createRef();
    let emailRef = createRef();
    let contactNoRef = createRef();
    let altContactNoRef = createRef();
    let birthPlaceRef = createRef();

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: R.fontSize.Size30,
            }}>
            <CustomPhotoCard
              onPress={props.onPressPhotoCard}
              cardHeight={R.fontSize.Size140}
              cardWidth={R.fontSize.Size140}
              marginRight={R.fontSize.Size10}
              icon={R.images.galleryIcon}
              title={'Upload a photo *'}
              selectedPhoto={props.selectedPhoto}
            />
          </View>
          <AppTextInput
            ref={fnameRef}
            placeholder={'First Name'}
            headTitle={'First Name *'}
            headTitleColor={
              props.value_fname != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_fname}
            onChangeText={props.onChange_fname}
            returnKeyType={'next'}
            onSubmitEditing={() => mnameRef.current?.focus()}
          />
          <AppTextInput
            ref={mnameRef}
            placeholder={'Middle Name'}
            headTitle={'Middle Name *'}
            headTitleColor={
              props.value_mname != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_mname}
            onChangeText={props.onChange_mname}
            returnKeyType={'next'}
            onSubmitEditing={() => lnameRef.current?.focus()}
          />
          <AppTextInput
            ref={lnameRef}
            placeholder={'Last Name'}
            headTitle={'Last Name *'}
            headTitleColor={
              props.value_lname != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_lname}
            onChangeText={props.onChange_lname}
            returnKeyType={'next'}
            onSubmitEditing={() => contactNoRef.current?.focus()}
          />

          <AppTextInput
            ref={contactNoRef}
            placeholder={'Contact No'}
            headTitle={'Contact No *'}
            headTitleColor={
              props.value_contactNo != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_contactNo}
            onChangeText={props.onChange_contactNo}
            maxLength={13}
            keyboardType={'numeric'}
            returnKeyType={'next'}
            onSubmitEditing={() => altContactNoRef.current?.focus()}
          />
          <AppTextInput
            ref={altContactNoRef}
            placeholder={'Alternate Contact No'}
            headTitle={'Alternate Contact No *'}
            headTitleColor={
              props.value_altContactNo != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_altContactNo}
            onChangeText={props.onChange_altContactNo}
            maxLength={13}
            keyboardType={'numeric'}
            returnKeyType={'next'}
            onSubmitEditing={() => emailRef.current?.focus()}
          />
          <AppTextInput
            ref={emailRef}
            placeholder={'Email'}
            headTitle={'Email *'}
            headTitleColor={
              props.value_email != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_email}
            onChangeText={props.onChange_email}
            returnKeyType={'next'}
            onSubmitEditing={() => birthPlaceRef.current?.focus()}
          />
          <AppTextInput
            ref={birthPlaceRef}
            placeholder={'Birth Place'}
            headTitle={'Birth Place *'}
            headTitleColor={
              props.value_birthPlace != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_birthPlace}
            onChangeText={props.onChange_birthPlace}
            returnKeyType={'done'}
          />

          <View>
            <AppCardPress
              onPress={props.onPressBirthDate}
              headTitle={'Date of brith *'}
              title={
                props.title_birthDate != ''
                  ? props.title_birthDate
                  : 'Date of birth'
              }
              TextColor={
                props.title_birthDate != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_birthDate != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
          </View>
          <AppCardPress
            onPress={props.onPressGender}
            headTitle={'Gender *'}
            title={props.title_gender != null ? props.title_gender : 'Gender'}
            TextColor={
              props.title_gender != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_gender != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppCardPress
            onPress={props.onPressMaritalStatus}
            headTitle={'Marital Status *'}
            title={
              props.title_maritalStatus != null
                ? props.title_maritalStatus
                : 'Marital Status'
            }
            TextColor={
              props.title_maritalStatus != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_maritalStatus != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppCardPress
            onPress={props.onPressMemberQualification}
            headTitle={'Member Qualification *'}
            title={
              props.title_memberQualification != null
                ? props.title_memberQualification
                : 'Member Qualification'
            }
            TextColor={
              props.title_memberQualification != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_memberQualification != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppCardPress
            onPress={props.onPressMemberReligion}
            headTitle={'Religion *'}
            title={
              props.title_memberReligion != null
                ? props.title_memberReligion
                : 'Religion'
            }
            TextColor={
              props.title_memberReligion != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_memberReligion != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppCardPress
            onPress={props.onPressMemberCaste}
            headTitle={'Caste'}
            title={
              props.title_memberCaste != null
                ? props.title_memberCaste
                : 'Caste'
            }
            TextColor={
              props.title_memberCaste != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_memberCaste != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />

          <AppTextInput
            placeholder={'Father Name'}
            headTitle={'Father Name *'}
            headTitleColor={
              props.value_fatherName != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_fatherName}
            onChangeText={props.onChange_fatherName}
          />
          {/*<AppTextInput
            placeholder={'Mother Name'}
            headTitle={'Mother Name'}
            headTitleColor={
              props.value_motherName != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_motherName}
            onChangeText={props.onChange_motherName}
          />*/}
          <AppTextInput
            placeholder={'Husband/Wife Name'}
            headTitle={'Husband/Wife Name'}
            headTitleColor={
              props.value_husbandName != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_husbandName}
            onChangeText={props.onChange_husbandName}
          />
          <AppCardPress
            onPress={props.onPress_husbandQualification}
            headTitle={'Husband/Wife Qualification'}
            title={
              props.title_husbandQualification != null
                ? props.title_husbandQualification
                : 'Husband/Wife Qualification'
            }
            TextColor={
              props.title_husbandQualification != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_husbandQualification != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppCardPress
            onPress={props.onPress_noOfFamilyMember}
            headTitle={'Number of family member'}
            title={
              props.title_noOfFamilyMember != ''
                ? props.title_noOfFamilyMember
                : 'Number of family member'
            }
            TextColor={
              props.title_noOfFamilyMember != ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_noOfFamilyMember != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <AppCardPress
              flex={1}
              onPress={props.onPress_noOfDaughter}
              headTitle={'No of daughter(age > 18)'}
              title={
                props.title_noOfDaughter != ''
                  ? props.title_noOfDaughter
                  : 'No of daughter(age > 18)'
              }
              TextColor={
                props.title_noOfDaughter != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_noOfDaughter != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
            <AppCardPress
              flex={1}
              onPress={props.onPress_noOfSon}
              headTitle={'No of son(age > 18)'}
              title={
                props.title_noOfSon != ''
                  ? props.title_noOfSon
                  : 'No of son(age > 18)'
              }
              TextColor={
                props.title_noOfSon != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_noOfSon != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: 'flex-end',
          }}>
          <AppButton
            onPress={props.nextOnPress}
            title={'Next'}
            buttonHeight={R.fontSize.Size45}
            paddingHorizontal={R.fontSize.Size25}
          />
        </View>
      </View>
    );
}

export default GenralDetail