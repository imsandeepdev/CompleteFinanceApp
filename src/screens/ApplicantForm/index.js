import * as React from 'react';
import {useState, useEffect} from 'react';
import {Text, Image, View, Pressable, SafeAreaView, ScrollView,Dimensions} from 'react-native';
import { AppCardPress, AppTextInput, CustomCardPress, CustomPhotoCard, CustomTextInput, GalleryModal, Header, ListViewModal, StoryScreen } from '../../components';
import style from './style';
import R from '../../res/R';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import AppContent from '../../utils/AppContent';
import NomaniDetail from './NomaniDetail';
import GenralDetail from './GenralDetail';
import AddressDetail from './AddressDetail';
import BankDetail from './BankDetail';
import BusinessDetail from './BusinessDetail';
const screenWidth = Dimensions.get('screen').width;
import {useDispatch,connect} from 'react-redux';
import { GenderListRequest } from '../../actions/dropdown.action';

const headerList = [
  {
    id: '1',
    title: 'Genral Details',
  },
  {
    id: '2',
    title: 'Nomani Details',
  },
  {
    id: '3',
    title: 'Address Details',
  },
  {
    id: '4',
    title: 'Business Details',
  },
  {
    id: '5',
    title: 'Bank Details',
  },
];

const ApplicantForm = (props) => {

    const dispatch = useDispatch()
    const [selectedHeader, setSelectedHeader] = useState(0)
    const [listModal, setListModal] = useState(false);
    const [listModalData, setListModalData] = useState([]);
    const [listModalType, setListModalType] = useState('');

// Genral Detail

  const [applicantPic, setApplicantPic] = useState({});
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [altContactNo, setAltContactNo] = useState('');
  const [birthPlace, setBirthPlace] = useState('');
  const [gender, setGender] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [memberQualification, setMemberQualification] = useState('');
  const [memberReligion, setMemberReligion] = useState('');
  const [memberCaste, setMemberCaste] = useState('');
  const [isDisplayDate, setIsDisplayDate] = useState(false);
  const [husbandName, setHusbandName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [husbandQualification, setHusbandQualification] = useState('');
  const [noOfFamilyMember, setNoOfFamilyMember] = useState('');
  const [noOfDaughter, setNoOfDaughter] = useState('');
  const [noOfSon, setNoOfSon] = useState('');

// Business Detail
  const [houseStatus, setHouseStatus] = useState('');
  const [natureBusiness, setNatureBusiness] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [landArea, setLandArea] = useState('');
  const [assetDetail, setAssetDetail] = useState('');
  const [assetValue, setAssetValue] = useState('');

// Nomani State
  const [nomaniName, setNomaniName] = useState('')
  const [nomaniRelation, setNomaniRelation] = useState('');
  const [nomaniDob, setNomaniDob] = useState('');
  const [nomaniDisplayDate, setNomaniDisplayDate] = useState(false);
  const [nomaniKYPName, setNomaniKYPName] = useState('')
  const [nomaniKYPMobNo, setNomaniKYPMobNo] = useState('');
  const [nomaniKYPDocument, setNomaniKYPDocument] = useState('');
  const [nomaniKYPName2, setNomaniKYPName2] = useState('');
  const [nomaniKYPMobNo2, setNomaniKYPMobNo2] = useState('');
  const [nomaniKYPDocument2, setNomaniKYPDocument2] = useState('');
  const [coApplicantName, setCoApplicantName] = useState('');
  const [coApplicantRelation, setCoApplicantRelation] = useState('');
  const [coApplicantDob, setCoApplicantDob] = useState('');
  const [coApplicantDisplayDate, setCoApplicantDisplayDate] = useState(false);
  const [coApplicantKYPName, setCoApplicantKYPName] = useState('');
  const [coApplicantKYPMobNo, setCoApplicantKYPMobNo] = useState('');
  const [coApplicantKYPDocument, setCoApplicantKYPDocument] = useState('');
  const [coApplicantKYPName2, setCoApplicantKYPName2] = useState('');
  const [coApplicantKYPMobNo2, setCoApplicantKYPMobNo2] = useState('');
  const [coApplicantKYPDocument2, setCoApplicantKYPDocument2] = useState('');
  const [sameNomaniDetail, setSameNomaniDetail] = useState(false);

  const [selectNomaniKYPDocument, setSelectNomaniKYPDocument] = useState({});



// Bank Details
   const [bankName, setBankName] = useState('');
   const [accountNo, setAccountNo] = useState('');
   const [accountHolder, setAccountHolder] = useState('');
   const [accountType, setAccountType] = useState('');
   const [branchName, setBranchName] = useState('');
   const [ifscCode, setIfscCode] = useState('');

// Address Details
  const [houseNo, setHouseNo] = useState('');
  const [addressArea, setAddressArea] = useState('');
  const [streetName, setStreetName] = useState('');
  const [landmark, setLandmark] = useState('');
  const [cityName, setCityName] = useState('');
  const [stateName, setStateName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [perHouseNo, setPerHouseNo] = useState('');
  const [perAddressArea, setPerAddressArea] = useState('');
  const [perStreetName, setPerStreetName] = useState('');
  const [perLandmark, setPerLandmark] = useState('');
  const [perCityName, setPerCityName] = useState('');
  const [perStateName, setPerStateName] = useState('');
  const [perCountryName, setPerCountryName] = useState('');
  const [perPinCode, setPerPinCode] = useState('');
  const [sameResidentStatus, setSameResidentStatus] = useState(false);


  const [galleryModalVisible, setGalleryModalVisible] = useState(false);

    const onSelectPicker =  params => {
     
          if (params == 'camera') {
            ImagePicker.openCamera({
              width: 400,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log("Image===>", image)
              setApplicantPic(image);
              setGalleryModalVisible(false);
            });
          } else if (params == 'gallery') {
            ImagePicker.openPicker({
              width: 400,
              height: 400,
              cropping: true,
            }).then(image => {
              console.log('Image===>', image);
             
            });
          }
     
    };

    const onHandleCameraPicker = () => {
        ImagePicker.openCamera({
          width: 400,
          height: 400,
          cropping: true,
        }).then(image => {
          console.log('Image===>', image);
          setApplicantPic(image);
          setGalleryModalVisible(false);
        });
    }

    const handleRoleSelect = item => {
      console.log('select Role==>', item);
      listModalType == 'Gender' && setGender(item)
      listModalType == 'MaritalStatus' && setMaritalStatus(item);
      listModalType == 'MemberQualification' && setMemberQualification(item);
      listModalType == 'Religion' && setMemberReligion(item);
      listModalType == 'Caste' && setMemberCaste(item);
      listModalType == 'houseStatus' && setHouseStatus(item);
      listModalType == 'NatureofBusiness' && setNatureBusiness(item);
      listModalType == 'noFamilyMember' && setNoOfFamilyMember(item.RoleName);
      listModalType == 'noOfDaughter' && setNoOfDaughter(item.RoleName);
      listModalType == 'noOfSon' && setNoOfSon(item.RoleName);
      listModalType == 'accountType' && setAccountType(item);
      listModalType == 'HusbandQualification' &&
        setHusbandQualification(item);
      listModalType == 'NomaniRelation' && setNomaniRelation(item);
      listModalType == 'CoApplicantRelation' &&
        setCoApplicantRelation(item);
      listModalType == 'NomaniKYCType' && setNomaniKYPName(item);
      listModalType == 'NomaniKYCType2' && setNomaniKYPName2(item);
      listModalType == 'coApplicantKycType' && setCoApplicantKYPName(item);
      listModalType == 'coApplicantKycType2' && setCoApplicantKYPName2(item);

      setListModalData([])
      setListModal(false);
    };

    const handleListModal = (type) => {
      setListModalType(type)
      type == 'Gender' && handleDropDownList('Gender')
      type == 'MaritalStatus' && handleDropDownList('Marital Status');
      type == 'MemberQualification' && handleDropDownList('Qualification');
      type == 'Religion' && handleDropDownList('Religion');
      type == 'Caste' && handleDropDownList('Caste');
      type == 'houseStatus' && handleDropDownList('House Status');
      type == 'NatureofBusiness' && handleDropDownList('Nature O Business');
      type == 'noFamilyMember' && setListModalData(AppContent.noOfMember);
      type == 'noOfDaughter' && setListModalData(AppContent.noOfMember);
      type == 'noOfSon' && setListModalData(AppContent.noOfMember);
      type == 'accountType' && handleDropDownList('Account Type');
      type == 'HusbandQualification' && handleDropDownList('Qualification');
      type == 'NomaniRelation' && handleDropDownList('Relation');
      type == 'CoApplicantRelation' && handleDropDownList('Relation');
      type == 'NomaniKYCType' && handleDropDownList('KYC');
      type == 'NomaniKYCType2' && handleDropDownList('KYC');
      type == 'coApplicantKycType' && handleDropDownList('KYC');
      type == 'coApplicantKycType2' && handleDropDownList('KYC');


        setListModal(true);
    
    }

    const handleDropDownList = (mode_type) => {
      dispatch(GenderListRequest(mode_type, response =>{
        console.log("Drop Down List Response==>", response)
        if (response.statusCode==200)
        {
        setListModalData(response.entity.entity);
        }
      }))
    }

    const handleSameNomani = ()=>{
      setSameNomaniDetail(!sameNomaniDetail);
      !sameNomaniDetail
        ? (setCoApplicantName(nomaniName),
          setCoApplicantDob(nomaniDob),
          setCoApplicantRelation(nomaniRelation),
          setCoApplicantKYPName(nomaniKYPName),
          setCoApplicantKYPMobNo(nomaniKYPMobNo),
          setCoApplicantKYPName2(nomaniKYPName2),
          setCoApplicantKYPMobNo2(nomaniKYPMobNo2))
        : (setCoApplicantName(''),
          setCoApplicantDob(''),
          setCoApplicantRelation(''),
          setCoApplicantKYPName(''),
          setCoApplicantKYPMobNo(''),
          setCoApplicantKYPName2(''),
          setCoApplicantKYPMobNo2(''));
    }

    const handleNomaniDocPicker = () => {
      console.log("PICKER")
       ImagePicker.openPicker({
         width: 400,
         height: 400,
         cropping: true,
       }).then(image => {
         console.log('Image===>', image);
         let tempDoc = []
         tempDoc.push(image)
         setSelectNomaniKYPDocument(image);
       });
    }

    const handleSubmitData = {
      staffId: 0,
      branchId: 0,
      firstName: fname,
      middleName: mname,
      lastName: lname,
      husbandname: husbandName,
      fatherName: fatherName,
      applicantDateofbirth: birthDate,
      joinDate: '2023-06-17T07:27:54.007Z',
      applicantAddress: 'string',
      houseNo: houseNo,
      street: streetName,
      stateId: stateName,
      districtId: 0,
      contactNo: contactNo,
      aContactNo: altContactNo,
      email: email,
      p_ApplicantAddress: 'string',
      pHouseNo: perHouseNo,
      pStreet: perStreetName,
      pStateId: perStateName,
      pDistrictId: 'string',
      contactNo2: 'string',
      acontactNo2: 'string',
      emailID: email,
      birthPlace: birthPlace,
      photo: applicantPic.path,
      gender: gender,
      maritalstatus: maritalStatus,
      kyCtype1: 0,
      kyC_No: 0,
      kyCtype2: 0,
      kyC_No2: 'string',
      loanproducttype: 0,
      langitude: 0,
      latitude: 0,
      biometricReference: 'string',
      isTransfered: 0,
      dropOutStatus: 'string',
      dropOutDate: '2023-06-17T07:27:54.007Z',
      dropOutReason: 'string',
      custOtherID: 0,
      nomineeName: nomaniName,
      nomineeRelation: nomaniRelation,
      dateofbirth: nomaniDob,
      nomineeKYPName1: nomaniKYPName,
      nomineeKYCNo1: nomaniKYPMobNo,
      nomineeKYCdoc: nomaniKYPDocument,
      nomineeKYPName2: nomaniKYPName2,
      nomineeKYCNo2: nomaniKYPMobNo2,
      nomineeKYCdoc2: nomaniKYPDocument2,
      houseStatus: houseStatus.RuleID,
      natureOfBusiness: natureBusiness.RuleID,
      businessName: businessName,
      businessAddress: businessAddress,
      nomineeID: 0,
      religion: memberReligion,
      bankdetailId: 0,
      boId: 0,
      bankName: bankName,
      accountNo: accountNo,
      ifscCode: ifscCode,
      accountHolderName: accountHolder,
      accountType: accountType.RuleID,
      bankBranchName: branchName,
      documenttype: 'string',
      imagedocument: 'string',
      caste: memberCaste,
      noOfMembers: noOfFamilyMember,
      dAgeabove18: noOfDaughter,
      sAgeabove18: noOfSon,
      totalArea: landArea,
      assetDetail: assetDetail,
      assetValue: assetValue,
      residenceStatus: true,
      memberqualification: true,
      husbandqualification: true,
      coapplicantName: coApplicantName,
      coapplicantKYPName1: coApplicantKYPName,
      coapplicantKYCNo1: coApplicantKYPMobNo,
      coapplicantKYCdoc: coApplicantKYPDocument,
      coapplicantRelation: coApplicantRelation,
      isDeleted: false,
      usetid: 0,
      coapplicantID: 0,
      createdDate: new Date(),
      updatedBy: 0,
      updatedDate: new Date(),
    };

    return (
      <StoryScreen>
        <SafeAreaView style={style.mainView}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftSource={R.images.backIcon}
            title={'Applicant Form'}
          />
          <View style={style.mainView}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {headerList.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => setSelectedHeader(index)}
                    key={index}
                    style={{
                      height: R.fontSize.Size40,
                      width: screenWidth / 5,
                      backgroundColor:
                        index == selectedHeader
                          ? R.colors.appColor
                          : R.colors.placeHolderColor,
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingHorizontal: R.fontSize.Size4,
                      borderLeftWidth: index != 0 ? 1.2 : 0,
                      borderColor: R.colors.lightWhite,
                    }}>
                    <Text
                      style={{
                        fontFamily: R.fonts.regular,
                        fontSize: R.fontSize.Size12,
                        fontWeight: '600',
                        textAlign: 'center',
                        color:
                          index == selectedHeader
                            ? R.colors.textPriColor
                            : R.colors.lightWhite,
                      }}>
                      {item.title}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={{flex: 1, marginHorizontal: R.fontSize.Size20}}>
                {selectedHeader == 0 && (
                  <View style={{flex: 1}}>
                    <GenralDetail
                      onPressPhotoCard={() => onHandleCameraPicker()}
                      selectedPhoto={applicantPic.path}
                      value_fname={fname}
                      onChange_fname={text => setFname(text)}
                      value_mname={mname}
                      onChange_mname={text => setMname(text)}
                      value_lname={lname}
                      onChange_lname={text => setLname(text)}
                      value_contactNo={contactNo}
                      onChange_contactNo={text => setContactNo(text)}
                      value_altContactNo={altContactNo}
                      onChange_altContactNo={text => setAltContactNo(text)}
                      value_email={email}
                      onChange_Email={text => setEmail(text)}
                      value_birthPlace={birthPlace}
                      onChange_birthPlace={text => setBirthPlace(text)}
                      nextOnPress={() => setSelectedHeader(1)}
                      title_birthDate={birthDate}
                      onPressBirthDate={() => setIsDisplayDate(true)}
                      title_gender={gender.RoleName}
                      onPressGender={() => handleListModal('Gender')}
                      title_maritalStatus={maritalStatus.RoleName}
                      onPressMaritalStatus={() =>
                        handleListModal('MaritalStatus')
                      }
                      title_memberQualification={memberQualification.RoleName}
                      onPressMemberQualification={() =>
                        handleListModal('MemberQualification')
                      }
                      title_memberReligion={memberReligion.RoleName}
                      onPressMemberReligion={() => handleListModal('Religion')}
                      title_memberCaste={memberCaste.RoleName}
                      onPressMemberCaste={() => handleListModal('Caste')}
                      value_fatherName={fatherName}
                      onChange_fatherName={text => setFatherName(text)}
                      value_motherName={motherName}
                      onChange_motherName={text => setMotherName(text)}
                      value_husbandName={husbandName}
                      onChange_husbandName={text => setHusbandName(text)}
                      title_husbandQualification={husbandQualification.RoleName}
                      onPress_husbandQualification={() =>
                        handleListModal('HusbandQualification')
                      }
                      title_noOfFamilyMember={noOfFamilyMember}
                      onPress_noOfFamilyMember={() =>
                        handleListModal('noFamilyMember')
                      }
                      title_noOfDaughter={noOfDaughter}
                      onPress_noOfDaughter={() =>
                        handleListModal('noOfDaughter')
                      }
                      title_noOfSon={noOfSon}
                      onPress_noOfSon={() => handleListModal('noOfSon')}
                    />
                    <DatePicker
                      modal
                      maximumDate={new Date()}
                      minimumDate={new Date('1940-01-01')}
                      open={isDisplayDate}
                      date={new Date('2000-01-01')}
                      mode="date"
                      onConfirm={date => {
                        setIsDisplayDate(false);
                        console.log('DATE', date);
                        setBirthDate(moment(date).format('Do-MMM-YYYY'));
                      }}
                      onCancel={() => {
                        setIsDisplayDate(false);
                      }}
                    />
                  </View>
                )}
                {selectedHeader == 1 && (
                  <View style={{flex: 1}}>
                    <NomaniDetail
                      value_nomaniName={nomaniName}
                      onChange_nomaniName={text => setNomaniName(text)}
                      title_nomaniDob={nomaniDob}
                      onPress_nomaniDob={() => setNomaniDisplayDate(true)}
                      title_nomaniRelation={nomaniRelation.RoleName}
                      onPress_nomaniRelation={() =>
                        handleListModal('NomaniRelation')
                      }
                      onPress_nomaniKycType={() => {
                        handleListModal('NomaniKYCType');
                      }}
                      title_nomaniKycType={nomaniKYPName.RoleName}
                      value_nomaniKYPMobNo={nomaniKYPMobNo}
                      onChange_nomaniKYPMobNo={text => setNomaniKYPMobNo(text)}
                      onPress_nomaniKycType2={() => {
                        handleListModal('NomaniKYCType2');
                      }}
                      title_nomaniKycType2={nomaniKYPName2.RoleName}
                      value_nomaniKYPMobNo2={nomaniKYPMobNo2}
                      onChange_nomaniKYPMobNo2={text =>
                        setNomaniKYPMobNo2(text)
                      }
                      title_nomaniKYPDocument={nomaniKYPDocument}
                      onPress_nomaniKYPDocument={() => handleNomaniDocPicker()}
                      selectedDoc={
                        <Pressable
                          style={{
                            height: 70,
                            width: 80,
                            marginTop: R.fontSize.Size2,
                            borderRadius: R.fontSize.Size4,
                            overflow: 'hidden',
                          }}>
                          <Image
                            source={{uri: selectNomaniKYPDocument.path}}
                            style={{
                              height: '100%',
                              width: '100%',
                            }}
                            resizeMode={'cover'}
                          />
                        </Pressable>
                      }
                      title_nomaniKYPDocument2={nomaniKYPDocument2}
                      onPress_nomaniKYPDocument2={() => console.log('KYP')}
                      value_coApplicantName={coApplicantName}
                      onChange_coApplicantName={text =>
                        setCoApplicantName(text)
                      }
                      sameNomaniOnPress={() => handleSameNomani()}
                      sameNomaniBackgroundColor={
                        sameNomaniDetail ? R.colors.appColor : R.colors.white
                      }
                      title_coApplicantDob={coApplicantDob}
                      onPress_coApplicantDob={() =>
                        setCoApplicantDisplayDate(true)
                      }
                      title_coApplicantRelation={coApplicantRelation.RoleName}
                      onPress_coApplicantRelation={() =>
                        handleListModal('CoApplicantRelation')
                      }
                      onPress_coApplicantKycType={() => {
                        handleListModal('coApplicantKycType');
                      }}
                      title_coApplicantKycType={coApplicantKYPName.RoleName}
                      value_coApplicantKYPMobNo={coApplicantKYPMobNo}
                      onChange_coApplicantKYPMobNo={text =>
                        setCoApplicantKYPMobNo(text)
                      }
                      onPress_coApplicantKycType2={() => {
                        handleListModal('coApplicantKycType2');
                      }}
                      title_coApplicantKycType2={coApplicantKYPName2.RoleName}
                      value_coApplicantKYPMobNo2={coApplicantKYPMobNo2}
                      onChange_coApplicantKYPMobNo2={text =>
                        setCoApplicantKYPMobNo2(text)
                      }
                      title_coApplicantKYPDocument={coApplicantKYPDocument}
                      onPress_coApplicantKYPDocument={() =>
                        handleNomaniDocPicker()
                      }
                      title_coApplicantKYPDocument2={coApplicantKYPDocument2}
                      onPress_coApplicantKYPDocument2={() => console.log('KYP')}
                      nextOnPress={() => setSelectedHeader(2)}
                      backOnPress={() => setSelectedHeader(0)}
                    />
                    <DatePicker
                      modal
                      maximumDate={new Date()}
                      minimumDate={new Date('1940-01-01')}
                      open={nomaniDisplayDate}
                      date={new Date('2000-01-01')}
                      mode="date"
                      onConfirm={date => {
                        setNomaniDisplayDate(false);
                        console.log('DATE', date);
                        setNomaniDob(moment(date).format('Do-MMM-YYYY'));
                      }}
                      onCancel={() => {
                        setNomaniDisplayDate(false);
                      }}
                    />
                    <DatePicker
                      modal
                      maximumDate={new Date()}
                      minimumDate={new Date('1940-01-01')}
                      open={coApplicantDisplayDate}
                      date={new Date('2000-01-01')}
                      mode="date"
                      onConfirm={date => {
                        setCoApplicantDisplayDate(false);
                        console.log('DATE', date);
                        setCoApplicantDob(moment(date).format('Do-MMM-YYYY'));
                      }}
                      onCancel={() => {
                        setCoApplicantDisplayDate(false);
                      }}
                    />
                  </View>
                )}
                {selectedHeader == 2 && (
                  <View style={{flex: 1}}>
                    <AddressDetail
                      value_houseNo={houseNo}
                      onChange_houseNo={text => setHouseNo(text)}
                      value_addressArea={addressArea}
                      onChange_addressArea={text => setAddressArea(text)}
                      value_streetName={streetName}
                      onChange_streetName={text => setStreetName(text)}
                      value_landmark={landmark}
                      onChange_landmark={text => setLandmark(text)}
                      value_cityName={cityName}
                      onChange_cityName={text => setCityName(text)}
                      value_stateName={stateName}
                      onChange_stateName={text => setStateName(text)}
                      value_countryName={countryName}
                      onChange_countryName={text => setCountryName(text)}
                      value_pinCode={pinCode}
                      onChange_pinCode={text => setPinCode(text)}
                      value_perhouseNo={perHouseNo}
                      onChange_perhouseNo={text => setPerHouseNo(text)}
                      value_peraddressArea={perAddressArea}
                      onChange_peraddressArea={text => setPerAddressArea(text)}
                      value_perstreetName={perStreetName}
                      onChange_perstreetName={text => setPerStreetName(text)}
                      value_perlandmark={perLandmark}
                      onChange_perlandmark={text => setPerLandmark(text)}
                      value_percityName={perCityName}
                      onChange_percityName={text => setPerCityName(text)}
                      value_perstateName={perStateName}
                      onChange_perstateName={text => setPerStateName(text)}
                      value_percountryName={perCountryName}
                      onChange_percountryName={text => setPerCountryName(text)}
                      value_perpinCode={perPinCode}
                      onChange_perpinCode={text => setPerPinCode(text)}
                      nextOnPress={() => setSelectedHeader(3)}
                      backOnPress={() => setSelectedHeader(1)}
                    />
                  </View>
                )}
                {selectedHeader == 4 && (
                  <View style={{flex: 1}}>
                    <BankDetail
                      value_bankName={bankName}
                      onChange_bankName={text => setBankName(text)}
                      value_accountHolder={accountHolder}
                      onChange_accountHolder={text => setAccountHolder(text)}
                      value_accountNo={accountNo}
                      onChange_accountNo={text => setAccountNo(text)}
                      value_ifscCode={ifscCode}
                      onChange_ifscCode={text => setIfscCode(text)}
                      value_branchName={branchName}
                      onChange_branchName={text => setBranchName(text)}
                      title_accountType={accountType.RoleName}
                      onPress_AccountType={() => handleListModal('accountType')}
                      submitOnPress={() => console.log('ONSUBMIT')}
                      backOnPress={() => setSelectedHeader(3)}
                    />
                  </View>
                )}
                {selectedHeader == 3 && (
                  <View style={{flex: 1}}>
                    <BusinessDetail
                      value_businessName={businessName}
                      onChange_businessName={text => setBusinessName(text)}
                      value_businessAddress={businessAddress}
                      onChange_businessAddress={text =>
                        setBusinessAddress(text)
                      }
                      value_landArea={landArea}
                      onChange_landArea={text => setLandArea(text)}
                      value_assetDetail={assetDetail}
                      onChange_assetDetail={text => setAssetDetail(text)}
                      value_assetValue={assetValue}
                      onChange_assetValue={text => setAssetValue(text)}
                      title_houseStatus={houseStatus.RoleName}
                      onPress_houseStatus={() => handleListModal('houseStatus')}
                      title_natureBusiness={natureBusiness.RoleName}
                      onPress_natureBusiness={() =>
                        handleListModal('NatureofBusiness')
                      }
                      nextOnPress={() => setSelectedHeader(4)}
                      backOnPress={() => setSelectedHeader(2)}
                    />
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
        <GalleryModal
          visible={galleryModalVisible}
          onRequestClose={() => setGalleryModalVisible(false)}
          modelTitle={'Pickup photo from gallery / camera'}
          galleryButton={() => onSelectPicker('gallery')}
          cameraButton={() => onSelectPicker('camera')}
          cancelButton={() => setGalleryModalVisible(false)}
          galleryText={'Gallery'}
          cameraText={'Camera'}
          cancelText={'Cancel'}
        />
        <ListViewModal
          visible={listModal}
          cancelOnPress={() => setListModal(false)}
          onPress={item => handleRoleSelect(item)}
          dataList={listModalData}
        />
      </StoryScreen>
    );
}

export default ApplicantForm