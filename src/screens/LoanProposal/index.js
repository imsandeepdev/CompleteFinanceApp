import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, Pressable,SafeAreaView,Dimensions,ScrollView} from 'react-native';
import { Header, StoryScreen } from '../../components';
import style from './style';
import AppContent from '../../utils/AppContent';
import R from '../../res/R';
import IncomeDetail from './IncomeDetail';
import MonthlyExpenses from './MonthlyExpenses';
import LoanProposalForm from './LoanProposal';
const screenWidth = Dimensions.get('screen').width;


const LoanProposal = (props) => {

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

    useEffect(()=>{
        setCenterDetail(props.route.params?.itemList);
    },[props.navigation])

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
                          console.log('pressed');
                        }}
                        title_customerOccupation={customerOccupation}
                        onPress_customerSector={() => {
                          console.log('customer sector');
                        }}
                        title_customerSector={customerSector}
                        onPress_customerSectorPurpose={() => {
                          console.log('customer sector purpose');
                        }}
                        title_customerSectorPurpose={customerSectorPurpose}
                        customermonthly_income={customerMonthlyIncome}
                        onChange_customermonthlyIncome={text =>
                          setCustomerMonthlyIncome(text)
                        }
                        onPress_spooseOccupation={() => {
                          console.log('pressed');
                        }}
                        title_spooseOccupation={spooseOccupation}
                        onPress_spooseSector={() => {
                          console.log('spoose sector');
                        }}
                        title_spooseSector={spooseSector}
                        onPress_spooseSectorPurpose={() => {
                          console.log('spoose sector purpose');
                        }}
                        title_spooseSectorPurpose={spooseSectorPurpose}
                        spoosemonthly_income={spooseMonthlyIncome}
                        onChange_spoosemonthlyIncome={text =>
                          setSpooseMonthlyIncome(text)
                        }
                        onPress_unmarriedChildOccupation={() => {
                          console.log('pressed');
                        }}
                        title_unmarriedChildOccupation={
                          unMarriedChildOccupation
                        }
                        onPress_unmarriedChildSector={() => {
                          console.log('unmarriedChild sector');
                        }}
                        title_unmarriedChildSector={unMarriedChildSector}
                        onPress_unmarriedChildSectorPurpose={() => {
                          console.log('unmarriedChild sector purpose');
                        }}
                        title_unmarriedChildSectorPurpose={
                          unMarriedChildSectorPurpose
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
                        nextOnPress={() => setSelectedHeader(2)}
                        backOnPress={() => setSelectedHeader(0)}
                      />
                    </View>
                  )}
                  {selectedHeader == 2 && (
                    <View style={{flex: 1}}>
                      <LoanProposalForm
                        backOnPress={() => setSelectedHeader(1)}
                        submitOnPress={() => console.log('Onsubmit')}
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
                          console.log('productCat');
                        }}
                        title_productCategory={productCategory}
                        onPress_productFrequency={() => {
                          console.log('productFre');
                        }}
                        title_productFrequency={productFrequency}
                        onPress_loanProduct={() => {
                          console.log('loan product');
                        }}
                        title_loanProduct={loanProduct}
                        onPress_proposedAmount={() => {
                          console.log('proposed amount');
                        }}
                        title_proposedAmount={proposedAmount}
                        onPress_loanPurposeGroup={() => {
                          console.log('loan purpose group');
                        }}
                        title_loanPurposeGroup={loanProposeGroup}
                        onPress_loanPurpose={() => {
                          console.log('loan purpose');
                        }}
                        title_loanPurpose={loanPropose}
                      />
                    </View>
                  )}
                </View>
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </StoryScreen>
    );
}
export default LoanProposal