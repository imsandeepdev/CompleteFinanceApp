import * as React from 'react';
import {useState, useEffect} from 'react';
import {Text, Image, View, Pressable, SafeAreaView, ScrollView,Dimensions,Platform} from 'react-native';
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
import { SaveCustomerRequest } from '../../actions/saveCustomer.action';
import Toast from 'react-native-simple-toast'
import CommonFunctions from '../../utils/CommonFunctions';

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
  const [nomaniAddress, setNomaniAddress] = useState('');
  const [coApplicantAddress, setCoApplicantAddress] = useState('');
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

  const [selectDocumentType, setSelectDocumentType] = useState('');
  const [selectNomaniKYCDocumentList, setSelectNomaniKYCDocumentList] = useState([]);
  const [selectNomaniKYCDocumentList2, setSelectNomaniKYCDocumentList2] =useState([]);
  const [selectCoApplicantKYCDocumentList, setSelectCoApplicantKYCDocumentList] = useState([]);
  const [selectCoApplicantKYCDocumentList2, setSelectCoApplicantKYCDocumentList2] = useState([]);





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
          setCoApplicantAddress(nomaniAddress),
          setCoApplicantDob(nomaniDob),
          setCoApplicantRelation(nomaniRelation),
          setCoApplicantKYPName(nomaniKYPName),
          setCoApplicantKYPMobNo(nomaniKYPMobNo),
          setCoApplicantKYPName2(nomaniKYPName2),
          setCoApplicantKYPMobNo2(nomaniKYPMobNo2),
          setSelectCoApplicantKYCDocumentList(selectNomaniKYCDocumentList),
          setSelectCoApplicantKYCDocumentList2(selectNomaniKYCDocumentList2))
        : (setCoApplicantName(''),
          setCoApplicantAddress(''),
          setCoApplicantDob(''),
          setCoApplicantRelation(''),
          setCoApplicantKYPName(''),
          setCoApplicantKYPMobNo(''),
          setCoApplicantKYPName2(''),
          setCoApplicantKYPMobNo2(''));
    }

    const handleNomaniDocPicker = (type) => {
      
      setSelectDocumentType(type);
       ImagePicker.openPicker({
         width: 400,
         height: 400,
         cropping: true,
       }).then(image => {
         console.log('Image===>', image);
         
         type =='nomineeKYCDoc1' && setSelectNomaniKYCDocumentList([
           ...selectNomaniKYCDocumentList,
           image.path,
         ]);
         type == 'nomineeKYCDoc2' &&
           setSelectNomaniKYCDocumentList2([
             ...selectNomaniKYCDocumentList2,
             image.path,
           ]);
          type == 'coApplicantKYCDoc1' &&
            setSelectCoApplicantKYCDocumentList([
              ...selectCoApplicantKYCDocumentList,
              image.path,
            ]);
          type == 'coApplicantKYCDoc2' &&
            setSelectCoApplicantKYCDocumentList2([
              ...selectCoApplicantKYCDocumentList2,
              image.path,
            ]);
          ;
       });
    }

    const handleRemoveNomKycDoc = (index,type) => {
      console.log("index=>",index)
      type == 'nomineeKYCDoc2' &&
        (selectNomaniKYCDocumentList2.splice(index, 1),
        setSelectNomaniKYCDocumentList2([...selectNomaniKYCDocumentList2]));
      type == 'nomineeKYCDoc1' &&
      (selectNomaniKYCDocumentList.splice(index, 1),
      setSelectNomaniKYCDocumentList([...selectNomaniKYCDocumentList]));
      type == 'coApplicantKYCDoc2' &&
        (selectCoApplicantKYCDocumentList2.splice(index, 1),
        setSelectCoApplicantKYCDocumentList2([...selectCoApplicantKYCDocumentList2]));
      type == 'coApplicantKYCDoc1' &&
        (selectCoApplicantKYCDocumentList.splice(index, 1),
        setSelectCoApplicantKYCDocumentList([...selectCoApplicantKYCDocumentList]));
    }

    const handleCustomerVerification = () => {
      return (
        CommonFunctions.isBlank(fname.trim(), 'pleasse enter first name') &&
        CommonFunctions.isBlank(mname.trim(), 'pleasse enter middle name') &&
        CommonFunctions.isBlank(lname.trim(), 'pleasse enter last name') &&
        CommonFunctions.isBlank(contactNo.trim(), 'pleasse enter contact no') &&
        CommonFunctions.isBlank(
          nomaniName.trim(),
          'pleasse enter nominee name',
        ) &&
        CommonFunctions.isBlank(bankName.trim(), 'pleasse enter bank name') &&
        CommonFunctions.isBlank(
          accountHolder.trim(),
          'pleasse account holder name',
        ) &&
        CommonFunctions.isBlank(
          accountNo.trim(),
          'pleasse account holder number',
        )
      );
    }

    const handleSaveCustomerAPI = () => {
      if(handleCustomerVerification())
      {
        handleSaveCustomer()
      }
    }

    const handleSaveCustomer = () => {

      let formData = new FormData()
      formData.append('mode', 'Save');
      formData.append('applicantId', 1);
      formData.append('applicantCode','ASSA121');
      formData.append('applicantName', 'ASSA121');
      formData.append('staffId',1)
      formData.append('branchId', 1);
      formData.append('firstName', 'fname');
      formData.append('middleName', 'mname');
      formData.append('lastName', 'lname');
      formData.append('husbandname', 'husbandName');
      formData.append('fatherName', 'fatherName');
      formData.append('applicantDateofbirth', '1997-07-24');
      formData.append('joinDate', moment().format('YYYY-MM-DD'));
      formData.append('applicantAddress', 'string');
      formData.append('houseNo', 1);
      formData.append('street', 'streetName');
      formData.append('stateId', 1);
      formData.append('districtId', 1);
      formData.append('contactNo', 'contactNo');
      formData.append('aContactNo', 'altContactNo');
      formData.append('email', 'sandeep@gmail.inn');
      formData.append('p_ApplicantAddress', 'string');
      formData.append('pHouseNo', 'perHouseNo');
      formData.append('pStreet', 'perStreetName');
      formData.append('pStateId', 'perStateName');
      formData.append('pDistrictId', 'string');
      formData.append('contactNo2', 'string');
      formData.append('acontactNo2', 'string');
      formData.append('emailID', 'sandeep@gmail.inn');
      formData.append('birthPlace', 'birthPlace');
      formData.append('photo','/fdfdf/ggfg'); 
      formData.append('gender', 1);
      formData.append('maritalstatus', 1);
      formData.append('kyCtype1', 1);
      formData.append('kyC_No', 1);
      formData.append('kyCtype2', 1);
      formData.append('kyC_No2', 'string');
      formData.append('loanproducttype', 1);
      formData.append('langitude', 1);
      formData.append('latitude', 1);
      formData.append('biometricReference','string');
      formData.append("isTransfered",1);
      formData.append("dropOutStatus",'kkkk1');
      formData.append('dropOutDate', '2023-06-17');
      formData.append('dropOutReason', 'string');
      formData.append('custOtherID', 0);
      formData.append('nomineeName', 'nomaniName');
      formData.append('nomineeRelation', 'jh');
      formData.append('dateofbirth', '1997-07-24');
      formData.append('nomineeKYPName1', 'ifffu');
      formData.append('nomineeKYCNo1', 'nomaniKYPMobNo');
      formData.append('nomineeKYCdoc', '/fdfdf/ggfg');
      formData.append('nomineeKYPName2', 'gfffh');
      formData.append('nomineeKYCNo2', 'nomaniKYPMobNo2');
      formData.append('nomineeKYCdoc2', '/fdfdf/ggfg');
      formData.append('houseStatus', 'hfffj');
      formData.append('natureOfBusiness', 'ghfffgh');
      formData.append('businessName', 'businessName');
      formData.append('businessAddress', 'businessAddress');
      formData.append('nomineeAddress', 'businessAddress');
      formData.append('nomineeID', 1);
      formData.append('religion', memberReligion.RuleID);
      formData.append('bankdetailId', 1);
      formData.append('boId', 1);
      formData.append('bankName', 'bankName');
      formData.append('accountNo', 'accountNo');
      formData.append('ifscCode', 'ifscCode');
      formData.append('accountHolderName', 'accountHolder');
      formData.append('accountType', 'bhfffh');
      formData.append('bankBranchName', 'branchName');
      formData.append('documenttype', 'string',);
      formData.append('imagedocument', 'string');
      formData.append('caste', 'hjdddd');
      formData.append('noOfMembers', 1);
      formData.append('dAgeabove18', 1);
      formData.append('sAgeabove18', 1);
      formData.append('totalArea', 'landArea');
      formData.append('assetDetail', 'assetDetail');
      formData.append('assetValue', 'assetValue');
      formData.append('residenceStatus', 1);
      formData.append('memberqualification', 1);
      formData.append('husbandqualification', 1);
      formData.append('coapplicantName', 'coApplicantName');
      formData.append('coapplicantAdress', 'coApplicantName');
      formData.append('adress', 'coApplicantName');
      formData.append('coapplicantKYPName1', 'hhdddgh');
      formData.append('coapplicantKYCNo1', 'hhhh');
      formData.append('coapplicantKYCdoc', '/fdfdf/ggfg');
      formData.append('kycFirstDoc', '/fdfdf/ggfg');
      formData.append('kycSecondDoc', '/fdfdf/ggfg');
      formData.append('coapplicantRelation', 0);
      formData.append('isDeleted', true);
      formData.append('usetid', 1);
      // formData.append('coapplicantID', 1);
      formData.append('createdDate', moment().format('YYYY-MM-DD'));
      formData.append('updatedBy', 1);
      formData.append('updatedDate', moment().format('YYYY-MM-DD'));
     

      const data = {
        mode: 'Save',
        applicantId: 1,
        applicantCode: 'trtr',
        staffId: 1,
        branchId: 1,
        applicantName: 'fhg',
        firstName: fname,
        middleName: mname,
        lastName: lname,
        husbandname: husbandName,
        fatherName: fatherName,
        applicantDateofbirth: '2023-06-21T15:38:57.261Z',
        joinDate: '2023-06-21T15:38:57.261Z',
        applicantAddress: 'ghjk',
        houseNo: houseNo,
        street: streetName,
        stateId: 1,
        districtId: 1,
        contactNo: contactNo,
        aContactNo: altContactNo,
        email: email,
        p_ApplicantAddress: 'ghjk',
        pHouseNo: perHouseNo,
        pStreet: perStreetName,
        pStateId: 'ghjk',
        pDistrictId: 'gjhk',
        contactNo2: contactNo,
        acontactNo2: altContactNo,
        emailID: email,
        birthPlace: birthPlace,
        photo: 'ghjk',
        gender: gender.RuleID,
        maritalstatus: 1,
        kyCtype1: 1,
        kyC_No: 1,
        kyCtype2: 1,
        kyC_No2: 'hj',
        loanproducttype: 1,
        langitude: 1,
        latitude: 1,
        biometricReference: 'ghj',
        isTransfered: 1,
        dropOutStatus: 'N',
        dropOutDate: '2023-06-21T15:38:57.261Z',
        dropOutReason: 'ghjk',
        custOtherID: 0,
        nomineeName: nomaniName,
        nomineeRelation: nomaniRelation.RoleName,
        dateofbirth: '2023-06-21T15:38:57.261Z',
        nomineeKYPName1: nomaniKYPName.RoleName,
        nomineeKYCNo1: nomaniKYPMobNo,
        nomineeKYCdoc: 'gjkl',
        nomineeKYPName2: nomaniKYPName2.RoleName,
        nomineeKYCNo2: nomaniKYPMobNo2,
        nomineeKYCdoc2: 'gjkl',
        houseStatus: houseStatus.RoleName,
        natureOfBusiness: natureBusiness.RoleName,
        businessName: businessName,
        businessAddress: businessAddress,
        namineeAdress: nomaniAddress,
        nomineeID: 1,
        religion: 1,
        bankdetailId: 1,
        boId: 1,
        bankName: bankName,
        accountNo: accountNo,
        ifscCode: ifscCode,
        accountHolderName: accountHolder,
        accountType: accountType.RoleName,
        bankBranchName: branchName,
        documenttype: 'ghjk',
        imagedocument: 'ghjk',
        caste: memberCaste.RoleName,
        noOfMembers: 1,
        dAgeabove18: 1,
        sAgeabove18: 1,
        totalArea: landArea,
        assetDetail: assetDetail,
        assetValue: assetValue,
        residenceStatus: 1,
        memberqualification: 1,
        husbandqualification: 1,
        coapplicantName: coApplicantName,
        coapplicantAdress: coApplicantAddress,
        adress: 'fghj',
        coapplicantKYPName1: coApplicantKYPName.RoleName,
        coapplicantKYCNo1: coApplicantKYPMobNo,
        coapplicantKYCdoc: 'fghjk',
        kycFirstDoc: 'fjk',
        kycSecondDoc: 'ghjk',
        coapplicantRelation: 0,
        isDeleted: true,
        usetid: 1,
        createdDate: '2023-06-21T15:38:57.262Z',
        updatedBy: 1,
        updatedDate: '2023-06-21T15:38:57.262Z',
      };

      console.log("FORMDATA=>",data)
      dispatch(SaveCustomerRequest(data,response=>{
        console.log('Save Customer Response==>', response);
        if(response.message == 'Success')
        {
          Toast.show('Successfully! save customer details',Toast.SHORT)
          props.navigation.goBack()
        }

      }))      
}

const handleSameResidentAddress = () => {
  setSameResidentStatus(!sameResidentStatus);
  !sameResidentStatus
    ? (setPerHouseNo(houseNo),
      setPerAddressArea(addressArea),
      setPerStreetName(streetName),
      setPerLandmark(landmark),
      setPerCityName(cityName),
      setPerStateName(stateName),
      setPerCountryName(countryName),
      setPerPinCode(pinCode))
    : (setPerHouseNo(''),
      setPerAddressArea(''),
      setPerStreetName(''),
      setPerLandmark(''),
      setPerCityName(''),
      setPerStateName(''),
      setPerCountryName(''),
      setPerPinCode(''));

}

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
                      onChange_email={text => setEmail(text)}
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
                      value_nomaniAddress={nomaniAddress}
                      onChange_nomaniAddress={text => setNomaniAddress(text)}
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
                      onPress_nomaniKYPDocument={() =>
                        handleNomaniDocPicker('nomineeKYCDoc1')
                      }
                      selectedNomineeKYCDoc1={selectNomaniKYCDocumentList}
                      handleRemoveNomineeKYCDoc1={index =>
                        handleRemoveNomKycDoc(index, 'nomineeKYCDoc1')
                      }
                      title_nomaniKYPDocument2={nomaniKYPDocument2}
                      onPress_nomaniKYPDocument2={() =>
                        handleNomaniDocPicker('nomineeKYCDoc2')
                      }
                      selectedNomineeKYCDoc2={selectNomaniKYCDocumentList2}
                      handleRemoveNomineeKYCDoc2={index =>
                        handleRemoveNomKycDoc(index, 'nomineeKYCDoc2')
                      }
                      value_coApplicantName={coApplicantName}
                      onChange_coApplicantName={text =>
                        setCoApplicantName(text)
                      }
                      value_coApplicantAddress={coApplicantAddress}
                      onChange_coApplicantAddress={text =>
                        setCoApplicantAddress(text)
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
                        handleNomaniDocPicker('coApplicantKYCDoc1')
                      }
                      selectedCoApplicantKYCDoc={
                        selectCoApplicantKYCDocumentList
                      }
                      handleRemoveCoApplicantKYCDoc={index =>
                        handleRemoveNomKycDoc(index, 'coApplicantKYCDoc1')
                      }
                      title_coApplicantKYPDocument2={coApplicantKYPDocument2}
                      onPress_coApplicantKYPDocument2={() =>
                        handleNomaniDocPicker('coApplicantKYCDoc2')
                      }
                      selectedCoApplicantKYCDoc2={
                        selectCoApplicantKYCDocumentList2
                      }
                      handleRemoveCoApplicantKYCDoc2={index =>
                        handleRemoveNomKycDoc(index, 'coApplicantKYCDoc2')
                      }
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
                      onPressSameAddress={() => handleSameResidentAddress()}
                      sameAddressBackgrounColor={
                        sameResidentStatus ? R.colors.appColor : R.colors.white
                      }
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
                      submitOnPress={() => handleSaveCustomerAPI()}
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