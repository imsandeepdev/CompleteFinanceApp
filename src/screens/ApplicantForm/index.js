import * as React from 'react';
import {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  Pressable,
  SafeAreaView,
  ScrollView,
  Platform,
} from 'react-native';
import {
  AppCalender,
  CustomAlert,
  GalleryModal,
  Header,
  ListViewModal,
  StoryScreen,
} from '../../components';
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
import {useDispatch, connect} from 'react-redux';
import {
  GenderListRequest,
  GetBankNameRequest,
} from '../../actions/dropdown.action';
import {
  SaveCustomerDocumentRequest,
  SaveCustomerRequest,
} from '../../actions/saveCustomer.action';
import Toast from 'react-native-simple-toast';
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

const ApplicantForm = props => {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [listModal, setListModal] = useState(false);
  const [listModalData, setListModalData] = useState([]);
  const [listModalType, setListModalType] = useState('');
  const [profileDetail, setProfileDetail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [applicantStatus, setApplicantStatus] = useState(false);
  const [applicantStatusMsg, setApplicantStatusMsg] = useState('');

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
  const [nomaniName, setNomaniName] = useState('');
  const [nomaniAddress, setNomaniAddress] = useState('');
  const [coApplicantAddress, setCoApplicantAddress] = useState('');
  const [nomaniRelation, setNomaniRelation] = useState('');
  const [nomaniDob, setNomaniDob] = useState('');
  const [nomaniDisplayDate, setNomaniDisplayDate] = useState(false);
  const [nomaniKYPName, setNomaniKYPName] = useState('');
  const [nomaniKYPMobNo, setNomaniKYPMobNo] = useState('');
  const [nomaniKYPName2, setNomaniKYPName2] = useState('');
  const [nomaniKYPMobNo2, setNomaniKYPMobNo2] = useState('');
  const [coApplicantName, setCoApplicantName] = useState('');
  const [coApplicantRelation, setCoApplicantRelation] = useState('');
  const [coApplicantDob, setCoApplicantDob] = useState('');
  const [coApplicantDisplayDate, setCoApplicantDisplayDate] = useState(false);
  const [coApplicantKYPName, setCoApplicantKYPName] = useState('');
  const [coApplicantKYPMobNo, setCoApplicantKYPMobNo] = useState('');
  const [coApplicantKYPName2, setCoApplicantKYPName2] = useState('');
  const [coApplicantKYPMobNo2, setCoApplicantKYPMobNo2] = useState('');
  const [sameNomaniDetail, setSameNomaniDetail] = useState(false);
  const [selectNomaniKYCDocumentList, setSelectNomaniKYCDocumentList] =
    useState([]);
  const [selectNomaniKYCDocumentList2, setSelectNomaniKYCDocumentList2] =
    useState([]);
  const [
    selectCoApplicantKYCDocumentList,
    setSelectCoApplicantKYCDocumentList,
  ] = useState([]);
  const [
    selectCoApplicantKYCDocumentList2,
    setSelectCoApplicantKYCDocumentList2,
  ] = useState([]);

  // Bank Details
  const [bankName, setBankName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountHolder, setAccountHolder] = useState('');
  const [accountType, setAccountType] = useState('');
  const [branchName, setBranchName] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [applicantDocType1, setApplicantDocType1] = useState('');
  const [applicantKYCNo1, setApplicantKYCNo1] = useState('');
  const [applicantKYCDocList1, setApplicantKYCDocList1] = useState([]);
  const [applicantDocType2, setApplicantDocType2] = useState('');
  const [applicantKYCNo2, setApplicantKYCNo2] = useState('');
  const [applicantKYCDocList2, setApplicantKYCDocList2] = useState([]);

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

  useEffect(() => {
    handleProfile();
  }, [props.navigation]);

  const handleProfile = () => {
    console.log('PROPS PROFILE', props.profile.entity[0]);
    setProfileDetail(props.profile.entity[0]);
  };

  const onSelectPicker = params => {
    if (params === 'camera') {
      ImagePicker.openCamera({
        width: 400,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log('Image===>', image);
        setApplicantPic(image);
        setGalleryModalVisible(false);
      });
    } else if (params === 'gallery') {
      ImagePicker.openCamera({
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
  };

  const handleRoleSelect = item => {
    console.log('select Role==>', item);
    listModalType === 'Gender' && setGender(item);
    listModalType === 'MaritalStatus' && setMaritalStatus(item);
    listModalType === 'MemberQualification' && setMemberQualification(item);
    listModalType === 'Religion' && setMemberReligion(item);
    listModalType === 'Caste' && setMemberCaste(item);
    listModalType === 'houseStatus' && setHouseStatus(item);
    listModalType === 'NatureofBusiness' && setNatureBusiness(item);
    listModalType === 'noFamilyMember' && setNoOfFamilyMember(item.RoleName);
    listModalType === 'noOfDaughter' && setNoOfDaughter(item.RoleName);
    listModalType === 'noOfSon' && setNoOfSon(item.RoleName);
    listModalType === 'accountType' && setAccountType(item);
    listModalType === 'HusbandQualification' && setHusbandQualification(item);
    listModalType === 'NomaniRelation' && setNomaniRelation(item);
    listModalType === 'CoApplicantRelation' && setCoApplicantRelation(item);
    listModalType === 'NomaniKYCType' && setNomaniKYPName(item);
    listModalType === 'NomaniKYCType2' && setNomaniKYPName2(item);
    listModalType === 'coApplicantKycType' && setCoApplicantKYPName(item);
    listModalType === 'coApplicantKycType2' && setCoApplicantKYPName2(item);
    listModalType === 'ApplicantKYCType' && setApplicantDocType1(item);
    listModalType === 'ApplicantKYCType2' && setApplicantDocType2(item);
    listModalType === 'BankName' && setBankName(item);

    setListModalData([]);
    setListModal(false);
  };

  const handleListModal = type => {
    setListModalType(type);
    type === 'Gender' && handleDropDownList('Gender');
    type === 'MaritalStatus' && handleDropDownList('Marital Status');
    type === 'MemberQualification' && handleDropDownList('Qualification');
    type === 'Religion' && handleDropDownList('Religion');
    type === 'Caste' && handleDropDownList('Caste');
    type === 'houseStatus' && handleDropDownList('House Status');
    type === 'NatureofBusiness' && handleDropDownList('Nature O Business');
    type === 'noFamilyMember' &&
      (setListModalData(AppContent.noOfMember), setListModal(true));
    type === 'noOfDaughter' &&
      (setListModalData(AppContent.noOfMember), setListModal(true));
    type === 'noOfSon' &&
      (setListModalData(AppContent.noOfMember), setListModal(true));
    type === 'accountType' && handleDropDownList('Account Type');
    type === 'HusbandQualification' && handleDropDownList('Qualification');
    type === 'NomaniRelation' && handleDropDownList('Relation');
    type === 'CoApplicantRelation' && handleDropDownList('Relation');
    type === 'NomaniKYCType' && handleDropDownList('KYC');
    type === 'NomaniKYCType2' && handleDropDownList('KYC');
    type === 'coApplicantKycType' && handleDropDownList('KYC');
    type === 'coApplicantKycType2' && handleDropDownList('KYC');
    type === 'ApplicantKYCType' && handleDropDownList('KYC');
    type === 'ApplicantKYCType2' && handleDropDownList('KYC');
    type === 'BankName' && handleBankName();
    // setListModal(true);
  };

  const handleDropDownList = mode_type => {
    dispatch(
      GenderListRequest(mode_type, response => {
        console.log('Drop Down List Response===>', response);
        if (response.statusCode === 200) {
          setListModalData(response.entity.entity);
          setListModal(true);
        }
      }),
    );
  };

  const handleBankName = () => {
    dispatch(
      GetBankNameRequest(response => {
        console.log('response==>', response);
        if (response.statusCode == 200) {
          setListModalData(response.entity.entity);
          setListModal(true);
        }
      }),
    );
  };

  const handleSameNomani = () => {
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
  };

  const handleNomaniDocPicker = type => {
    ImagePicker.openCamera({
      width: 400,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log('Image===>', image);

      type === 'nomineeKYCDoc1' &&
        setSelectNomaniKYCDocumentList([
          ...selectNomaniKYCDocumentList,
          image.path,
        ]);
      type === 'nomineeKYCDoc2' &&
        setSelectNomaniKYCDocumentList2([
          ...selectNomaniKYCDocumentList2,
          image.path,
        ]);
      type === 'coApplicantKYCDoc1' &&
        setSelectCoApplicantKYCDocumentList([
          ...selectCoApplicantKYCDocumentList,
          image.path,
        ]);
      type === 'coApplicantKYCDoc2' &&
        setSelectCoApplicantKYCDocumentList2([
          ...selectCoApplicantKYCDocumentList2,
          image.path,
        ]);
      type === 'applicantKYCDoc1' &&
        setApplicantKYCDocList1([...applicantKYCDocList1, image.path]);
      type === 'applicantKYCDoc2' &&
        setApplicantKYCDocList2([...applicantKYCDocList2, image.path]);
    });
  };

  const handleRemoveNomKycDoc = (index, type) => {
    console.log('index=>', index);
    type === 'nomineeKYCDoc2' &&
      (selectNomaniKYCDocumentList2.splice(index, 1),
      setSelectNomaniKYCDocumentList2([...selectNomaniKYCDocumentList2]));
    type === 'nomineeKYCDoc1' &&
      (selectNomaniKYCDocumentList.splice(index, 1),
      setSelectNomaniKYCDocumentList([...selectNomaniKYCDocumentList]));
    type === 'coApplicantKYCDoc2' &&
      (selectCoApplicantKYCDocumentList2.splice(index, 1),
      setSelectCoApplicantKYCDocumentList2([
        ...selectCoApplicantKYCDocumentList2,
      ]));
    type === 'coApplicantKYCDoc1' &&
      (selectCoApplicantKYCDocumentList.splice(index, 1),
      setSelectCoApplicantKYCDocumentList([
        ...selectCoApplicantKYCDocumentList,
      ]));
    type === 'applicantKYCDoc1' &&
      (applicantKYCDocList1.splice(index, 1),
      setApplicantKYCDocList1([...applicantKYCDocList1])),
      type === 'applicantKYCDoc2' &&
        (applicantKYCDocList2.splice(index, 1),
        setApplicantKYCDocList2([...applicantKYCDocList2]));
  };

  const handleSaveCustomerAPI = () => {
    if (
      handleGenralValidation() &&
      handleNomineeValidation() &&
      handleAddressValidation() &&
      handleBusinessValidation() &&
      handleBankValidation()
    ) {
      handleSaveCustomer();
    }
  };

  const handleSaveCustomer = () => {
    const data = {
      mode: 'Save',
      applicantId: 1,
      applicantCode: 'trtr',
      staffId: profileDetail.StaffID,
      branchId: profileDetail.BoId,
      applicantName: fname,
      firstName: fname,
      middleName: mname,
      lastName: lname,
      husbandname: husbandName,
      fatherName: fatherName,
      applicantDateofbirth: birthDate,
      joinDate: moment().format('YYYY-MM-DD'),
      applicantAddress: 'jaipur',
      houseNo: houseNo,
      street: streetName,
      stateId: 1,
      districtId: 1,
      contactNo: contactNo,
      aContactNo: altContactNo,
      email: 'sandeep@gmail.com',
      p_ApplicantAddress: 'ghjk',
      pHouseNo: perHouseNo,
      pStreet: perStreetName,
      pStateId: 'ghjk',
      pDistrictId: 'gjhk',
      contactNo2: contactNo,
      acontactNo2: altContactNo,
      emailID: 'sandeep@gmail.com',
      birthPlace: birthPlace,
      photo: 'ghjk',
      gender: gender.RuleID,
      maritalstatus: 1,
      kyCtype1: 1,
      kyC_No: 1,
      kyCtype2: 1,
      kyC_No2: '1' /*{string rquired}*/,
      loanproducttype: 1,
      langitude: 1,
      latitude: 1,
      biometricReference: 'ghj',
      isTransfered: 1,
      dropOutStatus: 'N',
      dropOutDate: '2023-06-21',
      dropOutReason: 'ghjk',
      custOtherID: 0,
      nomineeName: nomaniName,
      nomineeRelation: nomaniRelation.RoleName,
      dateofbirth: '2023-06-21',
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
      religion: memberReligion.RuleID,
      bankdetailId: 1,
      boId: 1,
      bankName: bankName.BankName,
      accountNo: accountNo,
      ifscCode: ifscCode,
      accountHolderName: accountHolder,
      accountType: accountType.RoleName,
      bankBranchName: branchName,
      documenttype: 'ghjk',
      imagedocument: 'ghjk',
      caste: memberCaste.RoleName,
      noOfMembers: noOfFamilyMember,
      dAgeabove18: noOfDaughter,
      sAgeabove18: noOfSon,
      totalArea: landArea,
      assetDetail: assetDetail,
      assetValue: assetValue,
      residenceStatus: 1 /*{true rquired}*/,
      memberqualification: memberQualification.RuleID /*{true rquired}*/,
      husbandqualification: husbandQualification.RuleID /*{true rquired}*/,
      coapplicantName: coApplicantName,
      coapplicantAdress: coApplicantAddress,
      adress: 'fghj',
      coapplicantKYPName1: coApplicantKYPName.RoleName,
      coapplicantKYCNo1: coApplicantKYPMobNo,
      coapplicantKYCdoc: 'fghjk',
      kycFirstDoc: 'fjk',
      kycSecondDoc: 'ghjk',
      coapplicantRelation: coApplicantRelation.RuleID,
      isDeleted: true,
      usetid: 1,
      createdDate: moment().format('YYYY-MM-DD'),
      updatedBy: 1,
      updatedDate: moment().format('YYYY-MM-DD'),
      coapplicantID: 0,
    };

    console.log('DATA=>', data);
    dispatch(
      SaveCustomerRequest(data, response => {
        console.log('Save Customer Response ID==>', response.entity);
        if (response.entity.statusCode === 200) {
          handleApplicantDocument(response.entity.customerId);
        } else {
          setApplicantStatusMsg(response.entity.message);
          setModalVisible(true);
        }
      }),
    );
  };

  const handleApplicantDocument = customer_id => {
    let formData = new FormData();
    formData.append('customerId', customer_id);
    formData.append(
      'Applicant_ProfilePic',
      applicantPic?.path != null || applicantPic?.path !== undefined
        ? {
            uri:
              Platform.OS === 'android'
                ? applicantPic?.path
                : (applicantPic?.path).replace('file://', ''),
            type: 'image/png',
            name: 'image.jpeg',
          }
        : '',
    );
    // applicantKYCDocList1.forEach((item, index) => {
    //   formData.append('Applicant_ProfilePic', {
    //     uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
    //     type: 'image/png',
    //     name: `image${index}.jpeg`,
    //   });
    // });
    formData.append('Applicant_DocType1', applicantDocType1.RuleID);
    formData.append('Applicant_DocNo1', applicantKYCNo1);
    applicantKYCDocList1.forEach((item, index) => {
      formData.append('Applicant_Doc1', {
        uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
        type: 'image/png',
        name: `image${index}.jpeg`,
      });
    });

    formData.append('Applicant_DocType2', applicantDocType2.RuleID);
    formData.append('Applicant_DocNo2', applicantKYCNo2);
    applicantKYCDocList2.forEach((item, index) => {
      formData.append('Applicant_Doc2', {
        uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
        type: 'image/png',
        name: `image${index}.jpeg`,
      });
    });

    formData.append('Nomanee_DocType1', nomaniKYPName.RuleID);
    formData.append('Nomanee_DocNo1', nomaniKYPMobNo);
    selectNomaniKYCDocumentList.forEach((item, index) => {
      formData.append('Nomanee_Doc1', {
        uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
        type: 'image/png',
        name: `image${index}.jpeg`,
      });
    });

    formData.append('Nomanee_DocType2', nomaniKYPName2.RuleID);
    formData.append('Nomanee_DocNo2', nomaniKYPMobNo2);
    selectNomaniKYCDocumentList2.forEach((item, index) => {
      formData.append('Nomanee_Doc2', {
        uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
        type: 'image/png',
        name: `image${index}.jpeg`,
      });
    });

    formData.append('CoApplicant_DocType1', coApplicantKYPName.RuleID);
    formData.append('CoApplicant_DocNo1', coApplicantKYPMobNo);
    selectCoApplicantKYCDocumentList.forEach((item, index) => {
      formData.append('CoApplicant_Doc1', {
        uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
        type: 'image/png',
        name: `image${index}.jpeg`,
      });
    });

    formData.append('CoApplicant_DocType2', coApplicantKYPName2.RuleID);
    formData.append('CoApplicant_DocNo2', coApplicantKYPMobNo2);
    selectCoApplicantKYCDocumentList2.forEach((item, index) => {
      formData.append('CoApplicant_Doc2', {
        uri: Platform.OS === 'android' ? item : item.replace('file://', ''),
        type: 'image/png',
        name: `image${index}.jpeg`,
      });
    });

    console.log('FORMDATA=>', formData);

    dispatch(
      SaveCustomerDocumentRequest(formData, response => {
        console.log('Response With Photo=>', response);
        if (response.statusCode === 200) {
          setApplicantStatus(true);
          setApplicantStatusMsg('Successfully! save customer details');
          setModalVisible(true);
        } else {
          setApplicantStatusMsg(response.message);
          setModalVisible(true);
        }
      }),
    );
  };

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
  };

  const onPressTouch = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const handleHeaderValidation = index => {
    setSelectedHeader(index);
    onPressTouch();
  };

  const handleNextValidation = index => {
    index === 0 &&
      handleGenralValidation() &&
      (setSelectedHeader(1), onPressTouch());
    index === 1 &&
      handleNomineeValidation() &&
      (setSelectedHeader(2), onPressTouch());
    index === 2 &&
      handleAddressValidation() &&
      (setSelectedHeader(3), onPressTouch());
    index === 3 &&
      handleBusinessValidation() &&
      (setSelectedHeader(4), onPressTouch());
  };

  const handleGenralValidation = () => {
    return (
      CommonFunctions.isNull(
        applicantPic?.path,
        'please upload applicant photo',
      ) &&
      CommonFunctions.isBlank(fname.trim(), 'please enter first name') &&
      CommonFunctions.isBlank(contactNo.trim(), 'please enter contact no') &&
      CommonFunctions.isCheckValidLength(
        contactNo.trim(),
        10,
        'please enter valid mob no',
      ) &&
      CommonFunctions.isBlank(birthPlace.trim(), 'please enter birth place') &&
      CommonFunctions.isBlank(birthDate, 'please select date of birth') &&
      CommonFunctions.isBlank(gender, 'please select user gender') &&
      CommonFunctions.isBlank(maritalStatus, 'please select marital status') &&
      CommonFunctions.isBlank(
        memberQualification,
        'please select member qualification',
      ) &&
      CommonFunctions.isBlank(
        memberReligion,
        'please select member religion',
      ) &&
      CommonFunctions.isBlank(
        fatherName.trim(),
        'please enter member father name',
      )
    );
  };

  const handleNomineeValidation = () => {
    return (
      CommonFunctions.isBlank(nomaniName.trim(), 'please enter nominee name') &&
      CommonFunctions.isBlank(
        nomaniAddress.trim(),
        'please enter nominee address',
      ) &&
      CommonFunctions.isBlank(nomaniDob, 'please select nominee DOB') &&
      CommonFunctions.isBlank(
        nomaniRelation,
        'please select nominee relation',
      ) &&
      CommonFunctions.isBlank(
        nomaniKYPName,
        'please select first nominee KYC Type',
      ) &&
      CommonFunctions.isBlank(
        nomaniKYPMobNo.trim(),
        'please enter first nominee KYC No',
      ) &&
      CommonFunctions.isCheckValidLength(
        selectNomaniKYCDocumentList,
        1,
        'please select first nominee KYC Documents',
      ) &&
      CommonFunctions.isBlank(
        nomaniKYPName2,
        'please select second nominee KYC Type',
      ) &&
      CommonFunctions.isBlank(
        nomaniKYPMobNo2.trim(),
        'please enter second nominee KYC No',
      ) &&
      CommonFunctions.isCheckValidLength(
        selectNomaniKYCDocumentList2,
        1,
        'please select second nominee KYC Documents',
      )
    );
  };

  const handleAddressValidation = () => {
    return (
      CommonFunctions.isBlank(
        houseNo.trim(),
        'please enter residential house no',
      ) &&
      CommonFunctions.isBlank(
        addressArea.trim(),
        'please enter residential address area',
      ) &&
      CommonFunctions.isBlank(
        streetName.trim(),
        'please enter residential street name',
      ) &&
      CommonFunctions.isBlank(
        cityName.trim(),
        'please enter residential city name',
      ) &&
      CommonFunctions.isBlank(
        stateName.trim(),
        'please enter residential state name',
      ) &&
      CommonFunctions.isBlank(
        countryName.trim(),
        'please enter residential country name',
      ) &&
      CommonFunctions.isBlank(
        pinCode.trim(),
        'please enter residential pin code',
      ) &&
      CommonFunctions.isBlank(
        perHouseNo.trim(),
        'please enter permanent house no',
      ) &&
      CommonFunctions.isBlank(
        perAddressArea.trim(),
        'please enter permanent address area',
      ) &&
      CommonFunctions.isBlank(
        perStateName.trim(),
        'please enter permanent street name',
      ) &&
      CommonFunctions.isBlank(
        perCityName.trim(),
        'please enter permanent city name',
      ) &&
      CommonFunctions.isBlank(
        perStateName.trim(),
        'please enter permanent state name',
      ) &&
      CommonFunctions.isBlank(
        perCountryName.trim(),
        'please enter permanent country name',
      ) &&
      CommonFunctions.isBlank(
        perPinCode.trim(),
        'please enter permanent pin code',
      )
    );
  };

  const handleBusinessValidation = () => {
    return (
      CommonFunctions.isBlank(
        businessName.trim(),
        'please enter business name',
      ) &&
      CommonFunctions.isBlank(
        businessAddress.trim(),
        'please enter business address',
      ) &&
      CommonFunctions.isBlank(
        landArea.trim(),
        'please enter business land area',
      ) &&
      CommonFunctions.isBlank(
        assetDetail.trim(),
        'please enter business asset detail',
      ) &&
      CommonFunctions.isBlank(
        assetValue.trim(),
        'please enter business asset value',
      ) &&
      CommonFunctions.isBlank(
        houseStatus,
        'please select business house status',
      ) &&
      CommonFunctions.isBlank(
        natureBusiness,
        'please select business nature of business',
      )
    );
  };

  const handleBankValidation = () => {
    return (
      CommonFunctions.isBlank(
        accountHolder.trim(),
        'please enter account holder name',
      ) &&
      CommonFunctions.isBlank(
        accountNo.trim(),
        'please enter account number',
      ) &&
      CommonFunctions.isBlank(ifscCode.trim(), 'please enter IFSC code') &&
      CommonFunctions.isBlank(accountType, 'please select bank account type') &&
      CommonFunctions.isBlank(
        applicantDocType1,
        'please select applicant fisrt KYC type',
      ) &&
      CommonFunctions.isBlank(
        applicantKYCNo1.trim(),
        'please enter fisrt KYC number',
      ) &&
      CommonFunctions.isBlank(
        applicantKYCDocList1,
        'please select fisrt KYC documents',
      ) &&
      CommonFunctions.isBlank(
        applicantDocType2,
        'please select applicant second KYC type',
      ) &&
      CommonFunctions.isBlank(
        applicantKYCNo2.trim(),
        'please enter second KYC number',
      ) &&
      CommonFunctions.isBlank(
        applicantKYCDocList2,
        'please select second KYC documents',
      )
    );
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSuccessModalClose = () => {
    setModalVisible(false);
    setApplicantStatus(false);
    props.navigation.goBack();
  };

  return (
    <StoryScreen loading={props.loading}>
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Applicant Form'}
        />
        <View style={style.mainView}>
          <View style={style.flexWrap}>
            {headerList.map((item, index) => {
              return (
                <Pressable
                  onPress={() => {
                    handleHeaderValidation(index);
                  }}
                  key={index}
                  style={[
                    style.topHeaderPress,
                    // eslint-disable-next-line react-native/no-inline-styles
                    {
                      borderLeftWidth: index !== 0 ? 1.2 : 0,
                      backgroundColor:
                        index === selectedHeader
                          ? R.colors.appColor
                          : R.colors.placeHolderColor,
                    },
                  ]}>
                  <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                      fontFamily: R.fonts.regular,
                      fontSize: R.fontSize.Size12,
                      fontWeight: index === selectedHeader ? '700' : '400',
                      textAlign: 'center',
                      color:
                        index === selectedHeader
                          ? R.colors.lightWhite
                          : R.colors.lightWhite,
                    }}>
                    {item.title}
                  </Text>
                </Pressable>
              );
            })}
          </View>
          <ScrollView
            contentContainerStyle={style.scrollFlexGrow}
            ref={scrollRef}>
            <View style={style.screenMainView}>
              {selectedHeader === 0 && (
                <View style={style.mainView}>
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
                    // value_email={email}
                    // onChange_email={text => setEmail(text)}
                    value_birthPlace={birthPlace}
                    onChange_birthPlace={text => setBirthPlace(text)}
                    nextOnPress={() => handleNextValidation(0)}
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
                    onPress_noOfDaughter={() => handleListModal('noOfDaughter')}
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
                      setBirthDate(moment(date).format('YYYY-MM-DD'));
                    }}
                    onCancel={() => {
                      setIsDisplayDate(false);
                    }}
                  />
                </View>
              )}
              {selectedHeader === 1 && (
                <View style={style.mainView}>
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
                    onChange_nomaniKYPMobNo2={text => setNomaniKYPMobNo2(text)}
                    NomineeKYCList={selectNomaniKYCDocumentList.length}
                    onPress_nomaniKYPDocument={() =>
                      handleNomaniDocPicker('nomineeKYCDoc1')
                    }
                    selectedNomineeKYCDoc1={selectNomaniKYCDocumentList}
                    handleRemoveNomineeKYCDoc1={index =>
                      handleRemoveNomKycDoc(index, 'nomineeKYCDoc1')
                    }
                    NomineeKYC2List={selectNomaniKYCDocumentList2.length}
                    onPress_nomaniKYPDocument2={() =>
                      handleNomaniDocPicker('nomineeKYCDoc2')
                    }
                    selectedNomineeKYCDoc2={selectNomaniKYCDocumentList2}
                    handleRemoveNomineeKYCDoc2={index =>
                      handleRemoveNomKycDoc(index, 'nomineeKYCDoc2')
                    }
                    value_coApplicantName={coApplicantName}
                    onChange_coApplicantName={text => setCoApplicantName(text)}
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
                    coApplicantKYCList={selectCoApplicantKYCDocumentList.length}
                    onPress_coApplicantKYPDocument={() =>
                      handleNomaniDocPicker('coApplicantKYCDoc1')
                    }
                    selectedCoApplicantKYCDoc={selectCoApplicantKYCDocumentList}
                    handleRemoveCoApplicantKYCDoc={index =>
                      handleRemoveNomKycDoc(index, 'coApplicantKYCDoc1')
                    }
                    coApplicantKYCList2={
                      selectCoApplicantKYCDocumentList2.length
                    }
                    onPress_coApplicantKYPDocument2={() =>
                      handleNomaniDocPicker('coApplicantKYCDoc2')
                    }
                    selectedCoApplicantKYCDoc2={
                      selectCoApplicantKYCDocumentList2
                    }
                    handleRemoveCoApplicantKYCDoc2={index =>
                      handleRemoveNomKycDoc(index, 'coApplicantKYCDoc2')
                    }
                    nextOnPress={() => handleNextValidation(1)}
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
              {selectedHeader === 2 && (
                <View style={style.mainView}>
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
                    nextOnPress={() => {
                      handleNextValidation(2);
                    }}
                    backOnPress={() => setSelectedHeader(1)}
                    onPressSameAddress={() => handleSameResidentAddress()}
                    sameAddressBackgrounColor={
                      sameResidentStatus ? R.colors.appColor : R.colors.white
                    }
                  />
                </View>
              )}
              {selectedHeader === 4 && (
                <View style={style.mainView}>
                  <BankDetail
                    title_bankName={bankName.BankName}
                    onPress_BankName={() => {
                      handleListModal('BankName');
                    }}
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
                    onPress_applicantKycType={() => {
                      handleListModal('ApplicantKYCType');
                    }}
                    title_applicantKycType={applicantDocType1.RoleName}
                    value_applicantKYCNo={applicantKYCNo1}
                    onChange_applicantKYCNo={text => setApplicantKYCNo1(text)}
                    applicantKYCList={applicantKYCDocList1.length}
                    onPress_applicantKYCDoc={() =>
                      handleNomaniDocPicker('applicantKYCDoc1')
                    }
                    selectedApplicantKYCDoc1={applicantKYCDocList1}
                    handleRemoveApplicantKYCDoc1={index =>
                      handleRemoveNomKycDoc(index, 'applicantKYCDoc1')
                    }
                    onPress_applicantKycType2={() => {
                      handleListModal('ApplicantKYCType2');
                    }}
                    title_applicantKycType2={applicantDocType2.RoleName}
                    value_applicantKYCNo2={applicantKYCNo2}
                    onChange_applicantKYCNo2={text => setApplicantKYCNo2(text)}
                    applicantKYCList2={applicantKYCDocList2.length}
                    onPress_applicantKYCDoc2={() =>
                      handleNomaniDocPicker('applicantKYCDoc2')
                    }
                    selectedApplicantKYCDoc2={applicantKYCDocList2}
                    handleRemoveApplicantKYCDoc2={index =>
                      handleRemoveNomKycDoc(index, 'applicantKYCDoc2')
                    }
                    submitOnPress={() => handleSaveCustomerAPI()}
                    backOnPress={() => setSelectedHeader(3)}
                  />
                </View>
              )}
              {selectedHeader === 3 && (
                <View style={style.mainView}>
                  <BusinessDetail
                    value_businessName={businessName}
                    onChange_businessName={text => setBusinessName(text)}
                    value_businessAddress={businessAddress}
                    onChange_businessAddress={text => setBusinessAddress(text)}
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
                    nextOnPress={() => {
                      handleNextValidation(3);
                    }}
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
      <CustomAlert
        visible={modalVisible}
        topIcon={
          applicantStatus ? R.images.successIcon : R.images.cancelRedIcon
        }
        modalColor={applicantStatus ? R.colors.appColor : R.colors.redColor}
        title={applicantStatus ? 'Success' : 'Failed'}
        subTitle={applicantStatusMsg}
        onPress={() => {
          applicantStatus ? handleSuccessModalClose() : handleModalClose();
        }}
      />
      {/* <AppCalender
        visible={isDisplayDate}
        onDayPress={day => {
          console.log('ONDDDD', day.dateString);
          setIsDisplayDate(false);
          setBirthDate(moment(day.dateString).format('YYYY-MM-DD'));
        }}
      /> */}
      {/* <AppCalender
        visible={nomaniDisplayDate}
        onDayPress={day => {
          console.log('ONDDDD', day.dateString);
          setNomaniDisplayDate(false);
          setNomaniDob(moment(day.dateString).format('Do-MMM-YYYY'));
        }}
      />
      <AppCalender
        visible={coApplicantDisplayDate}
        onDayPress={day => {
          console.log('ONDDDD', day.dateString);
          setCoApplicantDisplayDate(false);
          setCoApplicantDob(moment(day.dateString).format('Do-MMM-YYYY'));
        }}
      /> */}
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.saveCustomerRoot.loading || state.profileRoot.loading,
  profile: state.profileRoot.userInit,
});

export default connect(mapStateToProps)(ApplicantForm);
