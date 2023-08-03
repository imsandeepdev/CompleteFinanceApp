import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable,SafeAreaView,Dimensions,ScrollView} from 'react-native';
import { Header, ListViewModal, StoryScreen } from '../../components';
import style from './style';
import AppContent from '../../utils/AppContent';
import R from '../../res/R';
import IncomeDetail from './IncomeDetail';
import MonthlyExpenses from './MonthlyExpenses';
import LoanProposalForm from './LoanProposal';
const screenWidth = Dimensions.get('screen').width;
import {useDispatch} from 'react-redux'
import { LoanProposalDropdownRequest, ProposeAmountRequest} from '../../actions/dropdown.action';
import moment from 'moment';
import { SaveLoanProposalRequest } from '../../actions/loanProposal.action';
import Toast from 'react-native-simple-toast';


const LoanProposal = (props) => {

    const dispatch = useDispatch()
    const [selectedHeader, setSelectedHeader] = useState(0);
    const [centerDetail,setCenterDetail] = useState({})
    const [customerOccupation, setCustomerOccupation] = useState('');
    const [customerSector, setCustomerSector] = useState('');
    const [customerSectorPurpose, setCustomerSectorPurpose] = useState('');
    const [customerMonthlyIncome, setCustomerMonthlyIncome] = useState('');
    const [spooseOccupation, setSpooseOccupation] = useState('');
    const [spooseSector, setSpooseSector] = useState('');
    const [spooseSectorPurpose, setSpooseSectorPurpose] = useState('');
    const [spooseMonthlyIncome, setSpooseMonthlyIncome] = useState(''); 
    const [unMarriedChildOccupation, setUnMarriedChildOccupation] = useState('')
    const [unMarriedChildSector, setUnMarriedChildSector] = useState('');
    const [unMarriedChildSectorPurpose, setUnMarriedChildSectorPurpose] = useState('');
    const [unMarriedChildMonthlyIncome, setUnMarriedChildMonthlyIncome] = useState('');
// Monthly Expenses
    const [monthlyRent, setMonthlyRent] = useState('');
    const [monthlyMedical, setMonthlyMedical] = useState('');
    const [monthlyEBLPG, setMonthlyEBLPG] = useState('');
    const [monthlyTransport, setMonthlyTransport] = useState('');
    const [monthlyFoodCloth, setMonthlyFoodCloth] = useState('');
    const [monthlyEducation, setMonthlyEducation] = useState('');
    const [monthlyOtherExpense, setMonthlyOtherExpense] = useState('');
// Loan Proposal
    const [proposalDate, setProposalDate] = useState('');
    const [proposalCode, setProposalCode] = useState('');
    const [loanCustomerName, setLoanCustomerName] = useState('');
    const [customerCode, setCustomerCode] = useState('');
    const [insuranceAmount, setInsuranceAmount] = useState('');
    const [maxAmountDisbursed, setMaxAmountDisbursed] = useState('');
    const [paymentFrequency, setPaymentFrequency] = useState('');
    const [loanTerms, setLoanTerms] = useState('');
    const [installmentAmount, setInstallmentAmount] = useState('');
    const [loanRemark, setLoanRemark] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productFrequency, setProductFrequency] = useState('');
    const [loanProduct, setLoanProduct] = useState('');
    const [proposedAmount, setProposedAmount] = useState('');
    const [loanProposeGroup, setLoanProposeGroup] = useState('');
    const [loanPropose, setLoanPropose] = useState('');
    const [monthlyIncome, setMonthlyIncome] = useState('')

    const [listModal,setListModal] = useState(false)
    const [listModalType, setListModalType] = useState('');
    const [listModalData, setListModalData] = useState([])

    useEffect(()=>{
        setCenterDetail(props.route.params?.itemList);
    },[props.navigation])


  const handleOpenListModal = (type,catType) => {

    dispatch(LoanProposalDropdownRequest(type,response=>{
      console.log("response==>",response.entity.entity)
      setListModalData(response.entity.entity);
    }))

    // type == 'customerOccupation' && setListModalData(AppContent.memberQualification);
    setListModal(true)
    setListModalType(catType);
  }

  const handleRoleSelect =(item)=>{
    listModalType == 'customerOccupation' && setCustomerOccupation(item);
    listModalType == 'customerSector' && setCustomerSector(item);
    listModalType == 'customerSectorPurpose' && setCustomerSectorPurpose(item);
    listModalType == 'spooseOccupation' && setSpooseOccupation(item);
    listModalType == 'spooseSector' && setSpooseSector(item);
    listModalType == 'spooseSectorPurpose' && setSpooseSectorPurpose(item);
    listModalType == 'unmarriedChildOccupation' && setUnMarriedChildOccupation(item);
    listModalType == 'unmarriedChildSector' && setUnMarriedChildSector(item);
    listModalType == 'unmarriedChildSectorPurpose' &&
      setUnMarriedChildSectorPurpose(item);
    listModalType == 'LoanProductCat' && setProductCategory(item);
    listModalType == 'PaymentFrequency' && setPaymentFrequency(item);
    listModalType == 'LoanPurposeGroup' && setLoanProposeGroup(item);
    listModalType == 'LoanPurpose' && setLoanPropose(item);
    listModalType == 'ProposedAmount' && setProposedAmount(item);

    setListModal(false)
  }

  const handleProposeAmount = (catType) => {
    setListModalType(catType)
    let data = {
      productId: productCategory.RuleID,
      frequencyId: paymentFrequency.RuleID,
    };
    dispatch(ProposeAmountRequest(data,response=>{
      console.log("RES=>",response)
      setListModalData(response.entity.entity);
    }))
    setListModal(true);
  }

  const handleSaveLoanProposalAPI = () =>{

    let data = {
      mode: 'string',
      proposalId: 0,
      groupId: 0,
      branchId: 0,
      customerInfoId: 0,
      staffId: 0,
      centerId: 0,
      proposalDate: moment().format('DD-MM-YYYY'),
      productID: 0,
      purposeID: 0,
      loanType: 0,
      loanAmount: 0,
      loanStatus: 0,
      processDate: 'string',
      productCategory: 0,
      productFreq: 0,
      proposalStatus: 'string',
      remark:loanRemark,
      isDeleted: true,
      createdDate: 'string',
      updatedDate: 'string',
      createdBy: 0,
      updatedBy: 0,
      incomeId: 0,
      sectorPurpose: customerSectorPurpose.RuleID,
      monthlyIncome: customerMonthlyIncome,
      occupation: customerOccupation.RuleID,
      sector: customerSector.RuleID,
      sectorPurpose1: spooseSectorPurpose.RuleID,
      monthlyIncome1: spooseMonthlyIncome,
      occupation1: spooseOccupation.RuleID,
      sector1: spooseSector.RuleID,
      sectorPurpose2: unMarriedChildSectorPurpose.RuleID,
      monthlyIncome2: unMarriedChildMonthlyIncome,
      occupation2: unMarriedChildOccupation.RuleID,
      sector2: unMarriedChildSector.RuleID,
      sectorPurpose3: 0,
      monthlyIncome3: 0,
      occupation3: 0,
      sector3: 0,
      sectorPurpose4: 0,
      monthlyIncome4: 0,
      occupation4: 0,
      sector4: 0,
      totalInxcome:
        Number(customerMonthlyIncome) +
        Number(spooseMonthlyIncome) +
        Number(unMarriedChildMonthlyIncome),
      monthlyRent: monthlyRent,
      monthlyMedical: monthlyMedical,
      monthly_EB_LPG: monthlyEBLPG,
      monthly_Transport: monthlyTransport,
      monthly_Food_Clothing: monthlyFoodCloth,
      monthly_Education: monthlyEducation,
      monthly_Other_Incidental_Expense: monthlyOtherExpense,
      monthly_total_Expense:
        Number(monthlyRent) +
        Number(monthlyMedical) +
        Number(monthlyEBLPG) +
        Number(monthlyTransport) +
        Number(monthlyFoodCloth) +
        Number(monthlyEducation) +
        Number(monthlyOtherExpense),
      assessment_Document_Upload: 'string',
    };

    dispatch(SaveLoanProposalRequest(data,response=>{
      console.log("save loan response=>",response)
       if (response.statusCode == 200) {
         Toast.show('Successfully! send loan proposal details', Toast.SHORT);
         props.navigation.replace('HomeMenu');
       }
      
    }))
  }


    return (
      <StoryScreen>
        <SafeAreaView style={style.mainView}>
          <Header
            onPress={() => props.navigation.goBack()}
            leftSource={R.images.backIcon}
            title={'Loan Proposal'}
          />
          <View style={style.mainView}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
              }}>
              {AppContent.LoanProposalHeader.map((item, index) => {
                return (
                  <Pressable
                    onPress={() => setSelectedHeader(index)}
                    key={index}
                    style={{
                      height: R.fontSize.Size40,
                      width: screenWidth / 3,
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
            <View style={style.mainView}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={{flex: 1, marginHorizontal: R.fontSize.Size20}}>
                  {selectedHeader == 0 && (
                    <View style={{flex: 1}}>
                      <IncomeDetail
                        centerName={centerDetail.CenterName}
                        customerName={centerDetail.ApplicantName}
                        nextOnPress={() => setSelectedHeader(1)}
                        onPress_customerOccupation={() => {
                          handleOpenListModal(
                            'Occupation',
                            'customerOccupation',
                          );
                        }}
                        title_customerOccupation={customerOccupation?.RoleName}
                        onPress_customerSector={() => {
                          handleOpenListModal('Sector', 'customerSector');
                        }}
                        visible_customerSector={
                          customerOccupation?.RoleName == 'Business'
                        }
                        title_customerSector={customerSector?.RoleName}
                        onPress_customerSectorPurpose={() => {
                          handleOpenListModal(
                            'SectorPurpose',
                            'customerSectorPurpose',
                          );
                        }}
                        title_customerSectorPurpose={
                          customerSectorPurpose?.RoleName
                        }
                        customermonthly_income={customerMonthlyIncome}
                        onChange_customermonthlyIncome={text =>
                          setCustomerMonthlyIncome(text)
                        }
                        onPress_spooseOccupation={() => {
                          handleOpenListModal('Occupation', 'spooseOccupation');
                        }}
                        title_spooseOccupation={spooseOccupation?.RoleName}
                        visible_spooseSector={
                          spooseOccupation?.RoleName == 'Business'
                        }
                        onPress_spooseSector={() => {
                          handleOpenListModal('Sector', 'spooseSector');
                        }}
                        title_spooseSector={spooseSector?.RoleName}
                        onPress_spooseSectorPurpose={() => {
                          handleOpenListModal(
                            'SectorPurpose',
                            'spooseSectorPurpose',
                          );
                        }}
                        title_spooseSectorPurpose={
                          spooseSectorPurpose?.RoleName
                        }
                        spoosemonthly_income={spooseMonthlyIncome}
                        onChange_spoosemonthlyIncome={text =>
                          setSpooseMonthlyIncome(text)
                        }
                        onPress_unmarriedChildOccupation={() => {
                          handleOpenListModal(
                            'Occupation',
                            'unmarriedChildOccupation',
                          );
                        }}
                        title_unmarriedChildOccupation={
                          unMarriedChildOccupation?.RoleName
                        }
                        visible_unmarriedChildSector={
                          unMarriedChildOccupation?.RoleName == 'Business'
                        }
                        onPress_unmarriedChildSector={() => {
                          handleOpenListModal('Sector', 'unmarriedChildSector');
                        }}
                        title_unmarriedChildSector={
                          unMarriedChildSector?.RoleName
                        }
                        onPress_unmarriedChildSectorPurpose={() => {
                          handleOpenListModal(
                            'SectorPurpose',
                            'unmarriedChildSectorPurpose',
                          );
                        }}
                        title_unmarriedChildSectorPurpose={
                          unMarriedChildSectorPurpose?.RoleName
                        }
                        unmarriedChildmonthly_income={
                          unMarriedChildMonthlyIncome
                        }
                        onChange_unmarriedChildmonthlyIncome={text =>
                          setUnMarriedChildMonthlyIncome(text)
                        }
                        overAllIncome={
                          Number(customerMonthlyIncome) +
                          Number(spooseMonthlyIncome) +
                          Number(unMarriedChildMonthlyIncome)
                        }
                      />
                    </View>
                  )}
                  {selectedHeader == 1 && (
                    <View style={{flex: 1}}>
                      <MonthlyExpenses
                        onChange_monthlyRent={text => setMonthlyRent(text)}
                        monthly_rent={monthlyRent}
                        onChange_monthlyMedical={text =>
                          setMonthlyMedical(text)
                        }
                        monthly_medical={monthlyMedical}
                        onChange_monthlyEB_LPG={text => setMonthlyEBLPG(text)}
                        monthly_EB_LPG={monthlyEBLPG}
                        onChange_monthlyTransport={text =>
                          setMonthlyTransport(text)
                        }
                        monthly_transport={monthlyTransport}
                        onChange_monthlyfood_clothing={text =>
                          setMonthlyFoodCloth(text)
                        }
                        monthly_food_clothing={monthlyFoodCloth}
                        onChange_monthlyeducation={text =>
                          setMonthlyEducation(text)
                        }
                        monthly_education={monthlyEducation}
                        onChange_monthlyother_expense={text =>
                          setMonthlyOtherExpense(text)
                        }
                        monthly_other_expense={monthlyOtherExpense}
                        overAllExpenses={
                          Number(monthlyRent) +
                          Number(monthlyMedical) +
                          Number(monthlyEBLPG) +
                          Number(monthlyTransport) +
                          Number(monthlyFoodCloth) +
                          Number(monthlyEducation) +
                          Number(monthlyOtherExpense)
                        }
                        nextOnPress={() => setSelectedHeader(2)}
                        backOnPress={() => setSelectedHeader(0)}
                      />
                    </View>
                  )}
                  {selectedHeader == 2 && (
                    <View style={{flex: 1}}>
                      <LoanProposalForm
                        backOnPress={() => setSelectedHeader(1)}
                        submitOnPress={() => handleSaveLoanProposalAPI()}
                        proposal_date={proposalDate}
                        onChange_proposalDate={text => setProposalDate(text)}
                        onChange_proposalCode={text => setProposalCode(text)}
                        proposal_code={proposalCode}
                        onChange_customerName={text =>
                          setLoanCustomerName(text)
                        }
                        customer_name={loanCustomerName}
                        onChange_customerCode={text => setCustomerCode(text)}
                        customer_code={customerCode}
                        onChange_insuranceAmount={text =>
                          setInsuranceAmount(text)
                        }
                        insurance_amount={insuranceAmount}
                        onChange_maxAmount={text => setMaxAmountDisbursed(text)}
                        maxAmount={maxAmountDisbursed}
                        onChange_paymentFre={text => setPaymentFrequency(text)}
                        payment_Fre={paymentFrequency}
                        onChange_terms={text => setLoanTerms(text)}
                        terms={loanTerms}
                        onChange_installmentAmount={text =>
                          setInstallmentAmount(text)
                        }
                        installment_amount={installmentAmount}
                        onChange_remarks={text => setLoanRemark(text)}
                        remarks={loanRemark}
                        onPress_productCategory={() => {
                          handleOpenListModal('Product', 'LoanProductCat');
                        }}
                        title_productCategory={productCategory.RoleName}
                        onPress_paymentFrequency={() => {
                          handleOpenListModal(
                            'paymentFrequency',
                            'PaymentFrequency',
                          );
                        }}
                        title_paymentFrequency={paymentFrequency.RoleName}
                        onPress_loanProduct={() => {
                          console.log('loan product');
                        }}
                        title_loanProduct={loanProduct}
                        onPress_proposedAmount={() => {
                          handleProposeAmount('ProposedAmount');
                        }}
                        title_proposedAmount={proposedAmount.RoleName}
                        onPress_loanPurposeGroup={() => {
                          handleOpenListModal(
                            'LoanPurpose',
                            'LoanPurposeGroup',
                          );
                        }}
                        title_loanPurposeGroup={loanProposeGroup.RoleName}
                        onPress_loanPurpose={() => {
                          handleOpenListModal('LoanPurpose', 'LoanPurpose');
                        }}
                        title_loanPurpose={loanPropose.RoleName}
                      />
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
        <ListViewModal
          visible={listModal}
          cancelOnPress={() => setListModal(false)}
          onPress={item => handleRoleSelect(item)}
          dataList={listModalData}
        />
      </StoryScreen>
    );
}
export default LoanProposal