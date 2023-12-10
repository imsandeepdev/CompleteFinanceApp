import * as React from 'react';
import {View, Pressable, Text} from 'react-native';
import R from '../../res/R';
import {AppButton, AppCardPress, AppTextInput} from '../../components';
import style from './style';

const NomaniDetail = props => {
  return (
    <View style={style.mainView}>
      <View style={style.screenMainView}>
        <AppTextInput
          placeholder={'Nominee Name'}
          headTitle={'Nominee Name *'}
          headTitleColor={
            props.value_nomaniName !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_nomaniName}
          onChangeText={props.onChange_nomaniName}
        />
        <AppTextInput
          placeholder={'Nominee Address'}
          headTitle={'Nominee Address *'}
          headTitleColor={
            props.value_nomaniAddress !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_nomaniAddress}
          onChangeText={props.onChange_nomaniAddress}
        />

        <View>
          <AppCardPress
            onPress={props.onPress_nomaniDob}
            headTitle={'Nominee DOB *'}
            title={
              props.title_nomaniDob !== ''
                ? props.title_nomaniDob
                : 'Nominee DOB'
            }
            TextColor={
              props.title_nomaniDob !== ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_nomaniDob !== ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
        </View>

        <AppCardPress
          onPress={props.onPress_nomaniRelation}
          headTitle={'Nominee Relation *'}
          title={
            props.title_nomaniRelation != null
              ? props.title_nomaniRelation
              : 'Nominee Relation'
          }
          TextColor={
            props.title_nomaniRelation != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_nomaniRelation != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppCardPress
          onPress={props.onPress_nomaniKycType}
          headTitle={'Nominee KYC Type *'}
          title={
            props.title_nomaniKycType != null
              ? props.title_nomaniKycType
              : 'Nominee KYC Type'
          }
          TextColor={
            props.title_nomaniKycType != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_nomaniKycType != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />

        <AppTextInput
          placeholder={'Nominee KYC No'}
          headTitle={'Nominee KYC No *'}
          headTitleColor={
            props.value_nomaniKYPMobNo !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_nomaniKYPMobNo}
          onChangeText={props.onChange_nomaniKYPMobNo}
        />
        <AppCardPress
          onPress={props.onPress_nomaniKYPDocument}
          headTitle={'Nominee KYC Document *'}
          title={
            props.NomineeKYCList >= 1
              ? 'Selected documents'
              : 'Select nominee KYC document'
          }
          TextColor={
            props.NomineeKYCList >= 1
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={R.colors.darkGreenColor}
          rightIcon={R.images.cameraIcon1}
          borderStyle={'dashed'}
          Iconheight={R.fontSize.Size22}
          Iconwidth={R.fontSize.Size22}
          selectedDoc={props.selectedNomineeKYCDoc1}
          handleRemove={props.handleRemoveNomineeKYCDoc1}
        />
        <AppCardPress
          onPress={props.onPress_nomaniKycType2}
          headTitle={'Nominee KYC Type 2 *'}
          title={
            props.title_nomaniKycType2 != null
              ? props.title_nomaniKycType2
              : 'Nominee KYC Type 2'
          }
          TextColor={
            props.title_nomaniKycType2 != null
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={
            props.title_nomaniKycType2 != null
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          rightIcon={R.images.dropdownIcon}
        />
        <AppTextInput
          placeholder={'Nominee KYC No2'}
          headTitle={'Nominee KYC No2 *'}
          headTitleColor={
            props.value_nomaniKYPMobNo2 !== ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_nomaniKYPMobNo2}
          onChangeText={props.onChange_nomaniKYPMobNo2}
        />
        <AppCardPress
          onPress={props.onPress_nomaniKYPDocument2}
          headTitle={'Nominee KYC Document2 *'}
          title={
            props.NomineeKYC2List >= 1
              ? 'Selected documents'
              : 'Select nominee KYC document2'
          }
          TextColor={
            props.NomineeKYC2List >= 1
              ? R.colors.secAppColor
              : R.colors.placeholderTextColor
          }
          headTitleColor={R.colors.darkGreenColor}
          rightIcon={R.images.cameraIcon1}
          borderStyle={'dashed'}
          Iconheight={R.fontSize.Size22}
          Iconwidth={R.fontSize.Size22}
          selectedDoc={props.selectedNomineeKYCDoc2}
          handleRemove={props.handleRemoveNomineeKYCDoc2}
        />

        <View
          style={{
            marginBottom: R.fontSize.Size20,
          }}>
          <View style={style.addTopView}>
            <Text style={style.residentialText}>{'Coapplicant Details'}</Text>
          </View>
          <View style={style.addRowView}>
            <Pressable
              onPress={props.sameNomaniOnPress}
              style={style.addPressCheck}>
              <View
                style={[
                  style.pressCheck,
                  {
                    backgroundColor: props.sameNomaniBackgroundColor,
                  },
                ]}
              />
            </Pressable>
            <Text style={style.addSameAsResText}>{'Same as Nominee'}</Text>
          </View>
        </View>

        <View>
          <AppTextInput
            placeholder={'Coapplicant Name'}
            headTitle={'Coapplicant Name *'}
            headTitleColor={
              props.value_coApplicantName !== ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_coApplicantName}
            onChangeText={props.onChange_coApplicantName}
          />
          <AppTextInput
            placeholder={'CoApplicant Address'}
            headTitle={'CoApplicant Address *'}
            headTitleColor={
              props.value_coApplicantAddress !== ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_coApplicantAddress}
            onChangeText={props.onChange_coApplicantAddress}
          />

          <View>
            <AppCardPress
              onPress={props.onPress_coApplicantDob}
              headTitle={'CoApplicant DOB *'}
              title={
                props.title_coApplicantDob !== ''
                  ? props.title_coApplicantDob
                  : 'CoApplicant DOB'
              }
              TextColor={
                props.title_coApplicantDob !== ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_coApplicantDob !== ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
          </View>

          <AppCardPress
            onPress={props.onPress_coApplicantRelation}
            headTitle={'CoApplicant Relation *'}
            title={
              props.title_coApplicantRelation != null
                ? props.title_coApplicantRelation
                : 'CoApplicant Relation'
            }
            TextColor={
              props.title_coApplicantRelation != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_coApplicantRelation != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppCardPress
            onPress={props.onPress_coApplicantKycType}
            headTitle={'CoApplicant KYC Type *'}
            title={
              props.title_coApplicantKycType != null
                ? props.title_coApplicantKycType
                : 'CoApplicant KYC Type'
            }
            TextColor={
              props.title_coApplicantKycType != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_coApplicantKycType != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />

          <AppTextInput
            placeholder={'CoApplicant KYC No'}
            headTitle={'CoApplicant KYC No *'}
            headTitleColor={
              props.value_coApplicantKYPMobNo !== ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_coApplicantKYPMobNo}
            onChangeText={props.onChange_coApplicantKYPMobNo}
          />
          <AppCardPress
            onPress={props.onPress_coApplicantKYPDocument}
            headTitle={'CoApplicant KYC Document *'}
            title={
              props.coApplicantKYCList >= 1
                ? 'Selected documents'
                : 'Select CoApplicant KYC document'
            }
            TextColor={
              props.coApplicantKYCList >= 1
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={R.colors.darkGreenColor}
            rightIcon={R.images.cameraIcon1}
            borderStyle={'dashed'}
            Iconheight={R.fontSize.Size22}
            Iconwidth={R.fontSize.Size22}
            selectedDoc={props.selectedCoApplicantKYCDoc}
            handleRemove={props.handleRemoveCoApplicantKYCDoc}
          />

          <AppCardPress
            onPress={props.onPress_coApplicantKycType2}
            headTitle={'CoApplicant KYC Type2 *'}
            title={
              props.title_coApplicantKycType2 != null
                ? props.title_coApplicantKycType2
                : 'CoApplicant KYC Type2'
            }
            TextColor={
              props.title_coApplicantKycType2 != null
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_coApplicantKycType2 != null
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppTextInput
            placeholder={'CoApplicant KYC No 2'}
            headTitle={'CoApplicant KYC No 2 *'}
            headTitleColor={
              props.value_coApplicantKYPMobNo2 !== ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_coApplicantKYPMobNo2}
            onChangeText={props.onChange_coApplicantKYPMobNo2}
          />
          <AppCardPress
            onPress={props.onPress_coApplicantKYPDocument2}
            headTitle={'CoApplicant KYC Document 2 *'}
            title={
              props.coApplicantKYCList2 >= 1
                ? 'Selected documents'
                : 'Select CoApplicant KYC document 2'
            }
            TextColor={
              props.coApplicantKYCList2 >= 1
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={R.colors.darkGreenColor}
            rightIcon={R.images.cameraIcon1}
            borderStyle={'dashed'}
            Iconheight={R.fontSize.Size22}
            Iconwidth={R.fontSize.Size22}
            selectedDoc={props.selectedCoApplicantKYCDoc2}
            handleRemove={props.handleRemoveCoApplicantKYCDoc2}
          />
        </View>
      </View>
      <View style={style.rowFlexEnd}>
        <AppButton
          onPress={props.backOnPress}
          title={'Back'}
          buttonHeight={R.fontSize.Size45}
          paddingHorizontal={R.fontSize.Size25}
          backgroundColor={R.colors.white}
          borderWidth={2}
          borderColor={R.colors.appColor}
          marginHorizontal={R.fontSize.Size5}
          textColor={R.colors.secAppColor}
        />
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

export default NomaniDetail;
