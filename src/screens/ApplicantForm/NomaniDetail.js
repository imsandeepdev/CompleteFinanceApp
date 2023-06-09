import * as React from 'react'
import {useState} from 'react'
import {View, Pressable,Text,Image} from 'react-native'
import R from '../../res/R';
import { AppButton, AppCardPress, AppTextInput, ListViewModal } from '../../components';


const NomaniDetail = (props) => {

  const [sameNomaniDetail, setSameNomaniDetail] = useState(false);


    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, paddingVertical: R.fontSize.Size20}}>
          <AppTextInput
            placeholder={'Nomani Name'}
            headTitle={'Nomani Name'}
            headTitleColor={
              props.value_nomaniName != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_nomaniName}
            onChangeText={props.onChange_nomaniName}
          />

          <View>
            <AppCardPress
              onPress={props.onPress_nomaniDob}
              headTitle={'Nomani DOB'}
              title={
                props.title_nomaniDob != ''
                  ? props.title_nomaniDob
                  : 'Nomani DOB'
              }
              TextColor={
                props.title_nomaniDob != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_nomaniDob != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
          </View>

          <AppCardPress
            onPress={props.onPress_nomaniRelation}
            headTitle={'Nomani Relation'}
            title={
              props.title_nomaniRelation != ''
                ? props.title_nomaniRelation
                : 'Nomani Relation'
            }
            TextColor={
              props.title_nomaniRelation != ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_nomaniRelation != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.dropdownIcon}
          />
          <AppTextInput
            placeholder={'Nomani KYP Name'}
            headTitle={'Nomani KYP Name'}
            headTitleColor={
              props.value_nomaniKYPName != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_nomaniKYPName}
            onChangeText={props.onChange_nomaniKYPName}
          />
          <AppTextInput
            placeholder={'Nomani KYP Mob No'}
            headTitle={'Nomani KYP Mob No'}
            headTitleColor={
              props.value_nomaniKYPMobNo != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_nomaniKYPMobNo}
            onChangeText={props.onChange_nomaniKYPMobNo}
          />
          <AppCardPress
            onPress={props.onPress_nomaniKYPDocument}
            headTitle={'Nomani KYP Document'}
            title={
              props.title_nomaniKYPDocument != ''
                ? props.title_nomaniKYPDocument
                : 'Nomani KYP Document'
            }
            TextColor={
              props.title_nomaniKYPDocument != ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_nomaniKYPDocument != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.documentIcon}
            borderStyle={'dashed'}
            Iconheight={R.fontSize.Size22}
            Iconwidth={R.fontSize.Size22}
          />
          <AppTextInput
            placeholder={'Nomani KYP Name2'}
            headTitle={'Nomani KYP Name2'}
            headTitleColor={
              props.value_nomaniKYPName2 != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_nomaniKYPName2}
            onChangeText={props.onChange_nomaniKYPName2}
          />
          <AppTextInput
            placeholder={'Nomani KYP Mob No2'}
            headTitle={'Nomani KYP Mob No2'}
            headTitleColor={
              props.value_nomaniKYPMobNo2 != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            value={props.value_nomaniKYPMobNo2}
            onChangeText={props.onChange_nomaniKYPMobNo2}
          />
          <AppCardPress
            onPress={props.onPress_nomaniKYPDocument2}
            headTitle={'Nomani KYP Document2'}
            title={
              props.title_nomaniKYPDocument2 != ''
                ? props.title_nomaniKYPDocument2
                : 'Nomani KYP Document2'
            }
            TextColor={
              props.title_nomaniKYPDocument2 != ''
                ? R.colors.secAppColor
                : R.colors.placeholderTextColor
            }
            headTitleColor={
              props.title_nomaniKYPDocument2 != ''
                ? R.colors.darkGreenColor
                : R.colors.textPriColor
            }
            rightIcon={R.images.documentIcon}
            borderStyle={'dashed'}
            Iconheight={R.fontSize.Size22}
            Iconwidth={R.fontSize.Size22}
          />

          <View
            style={{
              marginBottom: R.fontSize.Size20,
            }}>
            <View
              style={{
                paddingVertical: R.fontSize.Size10,
                borderBottomWidth: 2,
                borderColor: R.colors.placeholderTextColor,
                marginBottom: R.fontSize.Size10,
              }}>
              <Text
                style={{
                  fontFamily: R.fonts.regular,
                  fontSize: R.fontSize.Size15,
                  fontWeight: '600',
                  color: R.colors.textPriColor,
                }}>
                {'Coapplicant Details'}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Pressable
                onPress={() => setSameNomaniDetail(!sameNomaniDetail)}
                style={{
                  height: R.fontSize.Size25,
                  width: R.fontSize.Size25,
                  borderRadius: R.fontSize.Size4,
                  borderWidth: 1,
                  padding: R.fontSize.Size2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    height: '100%',
                    width: '100%',
                    backgroundColor: sameNomaniDetail
                      ? R.colors.appColor
                      : R.colors.white,
                  }}
                />
              </Pressable>
              <Text
                style={{
                  marginHorizontal: R.fontSize.Size10,
                  fontFamily: R.fonts.regular,
                  fontWeight: '600',
                  fontSize: R.fontSize.Size14,
                }}>
                {'Same as Nomani'}
              </Text>
            </View>
          </View>

          <View>
            <AppTextInput
              placeholder={'Coapplicant Name'}
              headTitle={'Coapplicant Name'}
              headTitleColor={
                props.value_coApplicantName != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              value={props.value_coApplicantName}
              onChangeText={props.onChange_coApplicantName}
            />

            <View>
              <AppCardPress
                onPress={props.onPress_coApplicantDob}
                headTitle={'CoApplicant DOB'}
                title={
                  props.title_coApplicantDob != ''
                    ? props.title_coApplicantDob
                    : 'CoApplicant DOB'
                }
                TextColor={
                  props.title_coApplicantDob != ''
                    ? R.colors.secAppColor
                    : R.colors.placeholderTextColor
                }
                headTitleColor={
                  props.title_coApplicantDob != ''
                    ? R.colors.darkGreenColor
                    : R.colors.textPriColor
                }
                rightIcon={R.images.dropdownIcon}
              />
            </View>

            <AppCardPress
              onPress={props.onPress_coApplicantRelation}
              headTitle={'CoApplicant Relation'}
              title={
                props.title_coApplicantRelation != ''
                  ? props.title_coApplicantRelation
                  : 'CoApplicant Relation'
              }
              TextColor={
                props.title_coApplicantRelation != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_coApplicantRelation != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.dropdownIcon}
            />
            <AppTextInput
              placeholder={'CoApplicant KYP Name'}
              headTitle={'CoApplicant KYP Name'}
              headTitleColor={
                props.value_coApplicantKYPName != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              value={props.value_coApplicantKYPName}
              onChangeText={props.onChange_coApplicantKYPName}
            />
            <AppTextInput
              placeholder={'CoApplicant KYP Mob No'}
              headTitle={'CoApplicant KYP Mob No'}
              headTitleColor={
                props.value_coApplicantKYPMobNo != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              value={props.value_coApplicantKYPMobNo}
              onChangeText={props.onChange_coApplicantKYPMobNo}
            />
            <AppCardPress
              onPress={props.onPress_coApplicantKYPDocument}
              headTitle={'CoApplicant KYP Document'}
              title={
                props.title_coApplicantKYPDocument != ''
                  ? props.title_coApplicantKYPDocument
                  : 'CoApplicant KYP Document'
              }
              TextColor={
                props.title_coApplicantKYPDocument != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_coApplicantKYPDocument != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.documentIcon}
              borderStyle={'dashed'}
              Iconheight={R.fontSize.Size22}
              Iconwidth={R.fontSize.Size22}
            />
            <AppTextInput
              placeholder={'CoApplicant KYP Name2'}
              headTitle={'CoApplicant KYP Name2'}
              headTitleColor={
                props.value_coApplicantKYPName2 != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              value={props.value_coApplicantKYPName2}
              onChangeText={props.onChange_coApplicantKYPName2}
            />
            <AppTextInput
              placeholder={'CoApplicant KYP Mob No2'}
              headTitle={'CoApplicant KYP Mob No2'}
              headTitleColor={
                props.value_coApplicantKYPMobNo2 != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              value={props.value_coApplicantKYPMobNo2}
              onChangeText={props.onChange_coApplicantKYPMobNo2}
            />
            <AppCardPress
              onPress={props.onPress_coApplicantKYPDocument2}
              headTitle={'CoApplicant KYP Document2'}
              title={
                props.title_coApplicantKYPDocument2 != ''
                  ? props.title_coApplicantKYPDocument2
                  : 'CoApplicant KYP Document2'
              }
              TextColor={
                props.title_coApplicantKYPDocument2 != ''
                  ? R.colors.secAppColor
                  : R.colors.placeholderTextColor
              }
              headTitleColor={
                props.title_coApplicantKYPDocument2 != ''
                  ? R.colors.darkGreenColor
                  : R.colors.textPriColor
              }
              rightIcon={R.images.documentIcon}
              borderStyle={'dashed'}
              Iconheight={R.fontSize.Size22}
              Iconwidth={R.fontSize.Size22}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <AppButton
            onPress={props.backOnPress}
            title={'Back'}
            buttonHeight={R.fontSize.Size45}
            paddingHorizontal={R.fontSize.Size25}
            backgroundColor={R.colors.white}
            borderWidth={2}
            borderColor={R.colors.appColor}
            marginHorizontal={R.fontSize.Size5}
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
}

export default NomaniDetail