import * as React from 'react';
import {createRef} from 'react';
import {View, Pressable, Text} from 'react-native';
import R from '../../res/R';
import {AppButton, AppTextInput} from '../../components';
import style from './style';

const AddressDetail = props => {
  const houseNoRef = createRef();
  const addressAreaRef = createRef();
  const streetNameRef = createRef();
  const landmarkRef = createRef();
  const cityNameRef = createRef();
  const stateNameRef = createRef();
  const countryNameRef = createRef();
  const pinCodeRef = createRef();
  const perhouseNoRef = createRef();
  const peraddressAreaRef = createRef();
  const perstreetNameRef = createRef();
  const perlandmarkRef = createRef();
  const percityNameRef = createRef();
  const perstateNameRef = createRef();
  const percountryNameRef = createRef();
  const perpinCodeRef = createRef();

  return (
    <View style={style.mainView}>
      <View style={style.screenMainView}>
        <View style={style.addTopView}>
          <Text style={style.residentialText}>{'Residential Address'}</Text>
        </View>
        <AppTextInput
          ref={houseNoRef}
          placeholder={'House no'}
          headTitle={'House no *'}
          headTitleColor={
            props.value_houseNo != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_houseNo}
          onChangeText={props.onChange_houseNo}
          returnKeyType={'next'}
          onSubmitEditing={() => addressAreaRef.current?.focus()}
        />
        <AppTextInput
          ref={addressAreaRef}
          placeholder={'Address area'}
          headTitle={'Address area *'}
          headTitleColor={
            props.value_addressArea != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_addressArea}
          onChangeText={props.onChange_addressArea}
          returnKeyType={'next'}
          onSubmitEditing={() => streetNameRef.current?.focus()}
        />
        <AppTextInput
          ref={streetNameRef}
          placeholder={'Street name'}
          headTitle={'Street name *'}
          headTitleColor={
            props.value_streetName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_streetName}
          onChangeText={props.onChange_streetName}
          returnKeyType={'next'}
          onSubmitEditing={() => landmarkRef.current?.focus()}
        />
        <AppTextInput
          ref={landmarkRef}
          placeholder={'landMark'}
          headTitle={'landMark'}
          headTitleColor={
            props.value_landmark != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_landmark}
          onChangeText={props.onChange_landmark}
          returnKeyType={'next'}
          onSubmitEditing={() => cityNameRef.current?.focus()}
        />
        <AppTextInput
          ref={cityNameRef}
          placeholder={'City'}
          headTitle={'City *'}
          headTitleColor={
            props.value_cityName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_cityName}
          onChangeText={props.onChange_cityName}
          returnKeyType={'next'}
          onSubmitEditing={() => stateNameRef.current?.focus()}
        />
        <AppTextInput
          ref={stateNameRef}
          placeholder={'State'}
          headTitle={'State *'}
          headTitleColor={
            props.value_stateName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_stateName}
          onChangeText={props.onChange_stateName}
          returnKeyType={'next'}
          onSubmitEditing={() => countryNameRef.current?.focus()}
        />
        <AppTextInput
          ref={countryNameRef}
          placeholder={'Country'}
          headTitle={'Country *'}
          headTitleColor={
            props.value_countryName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_countryName}
          onChangeText={props.onChange_countryName}
          returnKeyType={'next'}
          onSubmitEditing={() => pinCodeRef.current?.focus()}
        />
        <AppTextInput
          ref={pinCodeRef}
          placeholder={'Pin code'}
          headTitle={'Pin code *'}
          headTitleColor={
            props.value_pinCode != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_pinCode}
          onChangeText={props.onChange_pinCode}
          returnKeyType={'done'}
        />

        <View
          style={{
            marginBottom: R.fontSize.Size20,
          }}>
          <View style={style.addTopView}>
            <Text style={style.residentialText}>{'Permanent Address'}</Text>
          </View>
          <View style={style.addRowView}>
            <Pressable
              onPress={props.onPressSameAddress}
              style={style.addPressCheck}>
              <View
                style={[
                  style.pressCheck,
                  {
                    backgroundColor: props.sameAddressBackgrounColor,
                  },
                ]}
              />
            </Pressable>
            <Text style={style.addSameAsResText}>
              {'Same as residential address'}
            </Text>
          </View>
        </View>

        <AppTextInput
          ref={perhouseNoRef}
          placeholder={'House no'}
          headTitle={'House no *'}
          headTitleColor={
            props.value_perhouseNo != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_perhouseNo}
          onChangeText={props.onChange_perhouseNo}
          returnKeyType={'next'}
          onSubmitEditing={() => peraddressAreaRef.current?.focus()}
        />
        <AppTextInput
          ref={peraddressAreaRef}
          placeholder={'Address area'}
          headTitle={'Address area *'}
          headTitleColor={
            props.value_peraddressArea != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_peraddressArea}
          onChangeText={props.onChange_peraddressArea}
          returnKeyType={'next'}
          onSubmitEditing={() => perstreetNameRef.current?.focus()}
        />
        <AppTextInput
          ref={perstreetNameRef}
          placeholder={'Street name'}
          headTitle={'Street name *'}
          headTitleColor={
            props.value_perstreetName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_perstreetName}
          onChangeText={props.onChange_perstreetName}
          returnKeyType={'next'}
          onSubmitEditing={() => perlandmarkRef.current?.focus()}
        />
        <AppTextInput
          ref={perlandmarkRef}
          placeholder={'landMark'}
          headTitle={'landMark'}
          headTitleColor={
            props.value_perlandmark != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_perlandmark}
          onChangeText={props.onChange_perlandmark}
          returnKeyType={'next'}
          onSubmitEditing={() => percityNameRef.current?.focus()}
        />
        <AppTextInput
          ref={percityNameRef}
          placeholder={'City'}
          headTitle={'City *'}
          headTitleColor={
            props.value_percityName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_percityName}
          onChangeText={props.onChange_percityName}
          returnKeyType={'next'}
          onSubmitEditing={() => perstateNameRef.current?.focus()}
        />
        <AppTextInput
          ref={perstateNameRef}
          placeholder={'State'}
          headTitle={'State *'}
          headTitleColor={
            props.value_perstateName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_perstateName}
          onChangeText={props.onChange_perstateName}
          returnKeyType={'next'}
          onSubmitEditing={() => percountryNameRef.current?.focus()}
        />
        <AppTextInput
          ref={percountryNameRef}
          placeholder={'Country'}
          headTitle={'Country *'}
          headTitleColor={
            props.value_percountryName != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_percountryName}
          onChangeText={props.onChange_percountryName}
          returnKeyType={'next'}
          onSubmitEditing={() => perpinCodeRef.current?.focus()}
        />
        <AppTextInput
          ref={perpinCodeRef}
          placeholder={'Pin code'}
          headTitle={'Pin code *'}
          headTitleColor={
            props.value_perpinCode != ''
              ? R.colors.darkGreenColor
              : R.colors.textPriColor
          }
          value={props.value_perpinCode}
          onChangeText={props.onChange_perpinCode}
          returnKeyType={'done'}
        />
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

export default AddressDetail;
