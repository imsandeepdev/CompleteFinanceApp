/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from 'react-native';
import {
  AlertModal,
  CustomerListModal,
  Header,
  ListViewModal,
  StoryScreen,
} from '../../components';
import style from './style';
import AppContent from '../../utils/AppContent';
import R from '../../res/R';
import IncomeDetail from './IncomeDetail';
import MonthlyExpenses from './MonthlyExpenses';
import LoanProposalForm from './LoanProposal';
const screenWidth = Dimensions.get('screen').width;
import {connect, useDispatch} from 'react-redux';
import {
  LoanProposalDropdownRequest,
  ProposeAmountRequest,
} from '../../actions/dropdown.action';
import moment from 'moment';
import {SaveLoanProposalRequest} from '../../actions/loanProposal.action';
import Toast from 'react-native-simple-toast';
import CommonFunctions from '../../utils/CommonFunctions';
import {GetAllCustomerRequest} from '../../actions/role.action';

const LoanProposal = props => {
  const dispatch = useDispatch();
  const [customerListModal, setCustomerListModal] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  const [selectedHeader, setSelectedHeader] = useState(0);
  const [centerDetail, setCenterDetail] = useState({});
  const [customerOccupation, setCustomerOccupation] = useState('');
  const [customerSector, setCustomerSector] = useState('');
  const [customerSectorPurpose, setCustomerSectorPurpose] = useState('');
  const [customerMonthlyIncome, setCustomerMonthlyIncome] = useState('');
  const [spooseOccupation, setSpooseOccupation] = useState('');
  const [spooseSector, setSpooseSector] = useState('');
  const [spooseSectorPurpose, setSpooseSectorPurpose] = useState('');
  const [spooseMonthlyIncome, setSpooseMonthlyIncome] = useState('');
  const [unMarriedChildOccupation, setUnMarriedChildOccupation] = useState('');
  const [unMarriedChildSector, setUnMarriedChildSector] = useState('');
  const [unMarriedChildSectorPurpose, setUnMarriedChildSectorPurpose] =
    useState('');
  const [unMarriedChildMonthlyIncome, setUnMarriedChildMonthlyIncome] =
    useState('');
  const [totalLoanInstallment, setTotalLoanInstallment] = useState('00');
  // const [overAllIncome, setOverAllIncome] = useState('');
  const [alertModal, setAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loanProductDetail, setLoanProductDetail] = useState('');
  // const [loanProductList, setLoanProductList] = useState([]);

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
  const [maxAmountDisbursed, setMaxAmountDisbursed] = useState('');
  const [paymentFrequency, setPaymentFrequency] = useState('');
  const [loanRemark, setLoanRemark] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [proposedAmount, setProposedAmount] = useState('');
  const [loanProposeGroup, setLoanProposeGroup] = useState('');
  const [loanPropose, setLoanPropose] = useState('');

  const [listModal, setListModal] = useState(false);
  const [listModalType, setListModalType] = useState('');
  const [listModalData, setListModalData] = useState([]);

  useEffect(() => {
    handleGetAllCustomer(props.profile.entity[0].StaffID);
  }, [props.navigation]);

  const handleGetAllCustomer = staffId => {
    console.log('STAFFID', staffId);
    let tempUrl = `?mode=ApplicantForLoanProposal&LoginId=${staffId}`;
    dispatch(
      GetAllCustomerRequest(tempUrl, response => {
        console.log('Get All Customer Response=>', response.entity.entity);
        let tempList = response.entity.entity;
        setCustomerList(tempList);
      }),
    );
  };

  const handleOpenListModal = (type, catType) => {
    dispatch(
      LoanProposalDropdownRequest(type, response => {
        console.log('response==>', response.entity.entity);
        setListModalData(response.entity.entity);
      }),
    );
    setListModal(true);
    setListModalType(catType);
  };

  const handleRoleSelect = item => {
    listModalType === 'customerOccupation' && setCustomerOccupation(item);
    listModalType === 'customerSector' && setCustomerSector(item);
    listModalType === 'customerSectorPurpose' && setCustomerSectorPurpose(item);
    listModalType === 'spooseOccupation' && setSpooseOccupation(item);
    listModalType === 'spooseSector' && setSpooseSector(item);
    listModalType === 'spooseSectorPurpose' && setSpooseSectorPurpose(item);
    listModalType === 'unmarriedChildOccupation' &&
      setUnMarriedChildOccupation(item);
    listModalType === 'unmarriedChildSector' && setUnMarriedChildSector(item);
    listModalType === 'unmarriedChildSectorPurpose' &&
      setUnMarriedChildSectorPurpose(item);
    listModalType === 'LoanProductCat' && setProductCategory(item);
    listModalType === 'PaymentFrequency' && handleLoanProductandFrequency(item);
    listModalType === 'LoanPurposeGroup' && setLoanProposeGroup(item);
    listModalType === 'LoanPurpose' && setLoanPropose(item);
    // listModalType === 'ProposedAmount' && setProposedAmount(item);
    setListModal(false);
  };

  const handleLoanProductandFrequency = item => {
    console.log('ITEM', item);
    setPaymentFrequency(item);
    let tempType = `Product&filterId=${item.RuleID}`;

    dispatch(
      LoanProposalDropdownRequest(tempType, response => {
        console.log('response of product==>', response.entity.entity[0]);
        setLoanProductDetail(response.entity.entity[0]);
        // setLoanProductList(response.entity.entity);
      }),
    );
  };

  // const handleProposeAmount = catType => {
  //   setListModalType(catType);
  //   let data = {
  //     productId: productCategory.RuleID,
  //     frequencyId: paymentFrequency.RuleID,
  //   };
  //   dispatch(
  //     ProposeAmountRequest(data, response => {
  //       console.log('RES=>', response);
  //       setListModalData(response.entity.entity);
  //     }),
  //   );
  //   setListModal(true);
  // };

  const handleIncomeValidation = () => {
    return (
      CommonFunctions.isBlank(
        customerOccupation,
        'please select customer occupation',
      ) &&
      CommonFunctions.isBlank(
        customerMonthlyIncome,
        'please enter customer monthly income',
      ) &&
      handleMonthlyIncome() &&
      handleMonthlyIncomeValidation() &&
      handleLoanInstallment()
    );
  };

  const handleMonthlyExpensesValidation = () => {
    return (
      CommonFunctions.isBlank(
        monthlyRent.trim(),
        'please enter monthly rent',
      ) &&
      // CommonFunctions.isBlank(
      //   monthlyMedical.trim(),
      //   'please enter monthly medical',
      // ) &&
      // CommonFunctions.isBlank(
      //   monthlyEBLPG.trim(),
      //   'please enter monthly EB & LPG',
      // ) &&
      // CommonFunctions.isBlank(
      //   monthlyTransport.trim(),
      //   'please enter monthly transport',
      // ) &&
      // CommonFunctions.isBlank(
      //   monthlyFoodCloth.trim(),
      //   'please enter monthly food & clothing',
      // ) &&
      // CommonFunctions.isBlank(
      //   monthlyEducation.trim(),
      //   'please enter monthly education',
      // ) &&
      // CommonFunctions.isBlank(
      //   monthlyOtherExpense.trim(),
      //   'please enter monthly other incidental expenses',
      // )
      // &&
      handleMonthlyTotalExpValidation()
    );
  };

  const handleMonthlyTotalExpValidation = () => {
    let tempMonthExp =
      Number(monthlyRent) +
      Number(monthlyMedical) +
      Number(monthlyEBLPG) +
      Number(monthlyTransport) +
      Number(monthlyFoodCloth) +
      Number(monthlyEducation) +
      Number(monthlyOtherExpense);
    let tempTotalIncome =
      Number(customerMonthlyIncome) +
      Number(spooseMonthlyIncome) +
      Number(unMarriedChildMonthlyIncome);
    if (tempMonthExp >= tempTotalIncome) {
      setAlertModal(true);
      setAlertMessage(
        `Monthly total expenses is not a valid\nMonthly total expenses amount not be greater then Total Income`,
      );
      return false;
    } else return true;
  };

  const handleLoanProposalValidation = () => {
    return (
      CommonFunctions.isBlank(
        productCategory,
        'please select product category',
      ) &&
      CommonFunctions.isBlank(
        paymentFrequency,
        'please select payment frequency',
      ) &&
      CommonFunctions.isBlank(loanPropose, 'please select loan purpose') &&
      CommonFunctions.isBlank(
        loanProposeGroup,
        'please select loan purpose group',
      )
    );
  };

  const handleLoanInstallment = () => {
    if (
      Number(totalLoanInstallment) >=
      Number(customerMonthlyIncome) +
        Number(spooseMonthlyIncome) +
        Number(unMarriedChildMonthlyIncome)
    ) {
      setAlertModal(true);
      setAlertMessage(
        `Please enter valid total loan installment amount\nLoan Installment amount not be greater then Total Income`,
      );
      return false;
    } else return true;
  };

  const handleMonthlyIncomeValidation = () => {
    if (
      Number(customerMonthlyIncome) +
        Number(spooseMonthlyIncome) +
        Number(unMarriedChildMonthlyIncome) >
      25000
    ) {
      setAlertModal(true);
      setAlertMessage(`Total income should be required less then 25,000`);

      return false;
    } else return true;
  };

  const handleSaveLoanProposal = () => {
    if (
      handleIncomeValidation() &&
      handleMonthlyExpensesValidation() &&
      handleLoanProposalValidation()
    ) {
      handleSaveLoanProposalAPI();
    }
  };

  const handleSaveLoanProposalAPI = () => {
    let data = {
      mode: 'Save',
      proposalId: 0,
      claId: 0,
      groupId: 0,
      branchId: 1,
      customerInfoId: centerDetail.ApplicantId,
      staffId: 1,
      centerId: 1,
      proposalDate: moment().format('YYYY-MM-DD'),
      productID: loanProductDetail.ProductId,
      purposeID: 1,
      loanType: 1,
      loanAmount: loanProductDetail.receivedAmt,
      loanStatus: 1,
      processDate: moment().format('YYYY-MM-DD'),
      productCategory: productCategory.RuleID,
      productFreq: 1,
      proposalStatus: '1',
      remark: loanRemark,
      isDeleted: true,
      createdDate: moment().format('YYYY-MM-DD'),
      updatedDate: moment().format('YYYY-MM-DD'),
      createdBy: 1,
      updatedBy: 1,
      incomeId: 1,
      sectorPurpose:
        customerSectorPurpose !== '' ? customerSectorPurpose.RuleID : 0,
      monthlyIncome: Number(customerMonthlyIncome),
      occupation: customerOccupation.RuleID,
      sector: customerSector !== '' ? customerSector.RuleID : 0,
      sectorPurpose1:
        spooseSectorPurpose !== '' ? spooseSectorPurpose.RuleID : 0,
      monthlyIncome1:
        spooseMonthlyIncome !== '' ? Number(spooseMonthlyIncome) : 0,
      occupation1: spooseOccupation !== '' ? spooseOccupation.RuleID : 0,
      sector1: spooseSector !== '' ? spooseSector.RuleID : 0,
      sectorPurpose2:
        unMarriedChildSectorPurpose !== ''
          ? unMarriedChildSectorPurpose.RuleID
          : 0,
      monthlyIncome2:
        unMarriedChildMonthlyIncome !== ''
          ? Number(unMarriedChildMonthlyIncome)
          : 0,
      occupation2:
        unMarriedChildOccupation !== '' ? unMarriedChildOccupation.RuleID : 0,
      sector2: unMarriedChildSector !== '' ? unMarriedChildSector.RuleID : 0,
      totalInxcome:
        Number(customerMonthlyIncome) +
        Number(spooseMonthlyIncome) +
        Number(unMarriedChildMonthlyIncome),
      monthlyRent: monthlyRent !== '' ? Number(monthlyRent) : 0,
      monthlyMedical: monthlyMedical !== '' ? monthlyMedical : 0,
      monthly_EB_LPG: monthlyEBLPG !== '' ? monthlyEBLPG : 0,
      monthly_Transport: monthlyTransport !== '' ? monthlyTransport : 0,
      monthly_Food_Clothing: monthlyFoodCloth !== '' ? monthlyFoodCloth : 0,
      monthly_Education: monthlyEducation !== '' ? monthlyEducation : 0,
      monthly_Other_Incidental_Expense:
        monthlyOtherExpense !== '' ? monthlyOtherExpense : 0,
      monthly_total_Expense:
        Number(monthlyRent) +
        Number(monthlyMedical) +
        Number(monthlyEBLPG) +
        Number(monthlyTransport) +
        Number(monthlyFoodCloth) +
        Number(monthlyEducation) +
        Number(monthlyOtherExpense),
    };

    console.log('data=>', data);
    dispatch(
      SaveLoanProposalRequest(data, response => {
        console.log('save loan response=>', response);
        if (response.statusCode == 200) {
          Toast.show('Successfully! send loan proposal details', Toast.SHORT);
          props.navigation.goBack();
        }
      }),
    );
  };

  // const handleTotalIncome = () => {
  //   let tempIncome =
  //     Number(customerMonthlyIncome) +
  //     Number(spooseMonthlyIncome) +
  //     Number(unMarriedChildMonthlyIncome);
  //   setOverAllIncome(tempIncome);
  // };

  const handleMonthlyIncome = () => {
    if (customerMonthlyIncome < 5000 || customerMonthlyIncome > 25000) {
      setAlertModal(true);
      setAlertMessage(
        `monthly income amount accepted between 5,000/- to 25,000/- `,
      );
      return false;
    } else return true;
  };

  const handleNextIncome = () => {
    if (handleIncomeValidation()) {
      setSelectedHeader(1);
    }
  };

  const handleNextMonthlyExpenses = () => {
    if (handleMonthlyExpensesValidation()) {
      setSelectedHeader(2);
    }
  };

  const handleProceed = item => {
    console.log('ITEM=>', item);
    setCenterDetail(item);
    setCustomerListModal(false);
  };

  return (
    <StoryScreen>
      <SafeAreaView style={style.mainView}>
        <Header
          onPress={() => props.navigation.goBack()}
          leftSource={R.images.backIcon}
          title={'Loan Proposal'}
        />
        <View style={style.mainView}>
          <View style={style.rowWrap}>
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
                  <View style={style.mainView}>
                    <IncomeDetail
                      centerName={centerDetail.CenterName}
                      customerName={centerDetail.ApplicantName}
                      nextOnPress={() => handleNextIncome()}
                      onPress_customerOccupation={() => {
                        handleOpenListModal('Occupation', 'customerOccupation');
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
                        // handleTotalIncome(text, 'customerIncome')
                        setCustomerMonthlyIncome(text)
                      }
                      customerOnBlur={() => handleMonthlyIncome()}
                      onPress_spooseOccupation={() => {
                        handleOpenListModal('Occupation', 'spooseOccupation');
                      }}
                      title_spooseOccupation={spooseOccupation?.RoleName}
                      visible_spooseSector={
                        spooseOccupation?.RoleName === 'Business'
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
                      title_spooseSectorPurpose={spooseSectorPurpose?.RoleName}
                      spoosemonthly_income={spooseMonthlyIncome}
                      onChange_spoosemonthlyIncome={text =>
                        // handleTotalIncome(text, 'spooseIncome')
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
                        unMarriedChildOccupation?.RoleName === 'Business'
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
                      unmarriedChildmonthly_income={unMarriedChildMonthlyIncome}
                      onChange_unmarriedChildmonthlyIncome={text =>
                        // handleTotalIncome(text, 'childIncome')
                        setUnMarriedChildMonthlyIncome(text)
                      }
                      overAllIncome={
                        Number(customerMonthlyIncome) +
                        Number(spooseMonthlyIncome) +
                        Number(unMarriedChildMonthlyIncome)
                      }
                      totalLoanInstallment={totalLoanInstallment}
                      onChange_totalLoanInstallment={text =>
                        setTotalLoanInstallment(text)
                      }
                      totalEmiEligibility={
                        Number(customerMonthlyIncome) +
                        Number(spooseMonthlyIncome) +
                        Number(unMarriedChildMonthlyIncome) -
                        Number(totalLoanInstallment)
                      }
                    />
                  </View>
                )}
                {selectedHeader === 1 && (
                  <View style={style.mainView}>
                    <MonthlyExpenses
                      onChange_monthlyRent={text => setMonthlyRent(text)}
                      monthly_rent={monthlyRent}
                      onChange_monthlyMedical={text => setMonthlyMedical(text)}
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
                      nextOnPress={() => handleNextMonthlyExpenses()}
                      backOnPress={() => setSelectedHeader(0)}
                    />
                  </View>
                )}
                {selectedHeader === 2 && (
                  <View style={style.mainView}>
                    <LoanProposalForm
                      backOnPress={() => setSelectedHeader(1)}
                      submitOnPress={() => handleSaveLoanProposal()}
                      proposal_date={proposalDate}
                      customer_code={centerDetail.ApplicantId}
                      customer_name={centerDetail.ApplicantName}
                      onChange_proposalDate={text => setProposalDate(text)}
                      onChange_proposalCode={text => setProposalCode(text)}
                      proposal_code={proposalCode}
                      onChange_maxAmount={text => setMaxAmountDisbursed(text)}
                      maxAmount={maxAmountDisbursed}
                      onChange_remarks={text => setLoanRemark(text)}
                      remarks={loanRemark}
                      onPress_productCategory={() => {
                        handleOpenListModal(
                          'ProductCategory',
                          'LoanProductCat',
                        );
                      }}
                      title_productCategory={productCategory.RoleName}
                      onPress_paymentFrequency={() => {
                        handleOpenListModal(
                          'paymentFrequency',
                          'PaymentFrequency',
                        );
                      }}
                      title_paymentFrequency={paymentFrequency.RoleName}
                      loanProductList={loanProductDetail}
                      title_loanProduct={loanProductDetail?.ProductName}
                      terms={loanProductDetail?.TermPeriod}
                      installment_amount={loanProductDetail?.TotalInstAmt}
                      interestRate={loanProductDetail?.InterestRate}
                      disbursedAmount={loanProductDetail?.DisbursedAmount}
                      processFee={loanProductDetail?.ProcessFee}
                      serviceTax={loanProductDetail?.ServiceTax}
                      receivedAmount={loanProductDetail?.receivedAmt}
                      // onPress_proposedAmount={() => {
                      //   handleProposeAmount('ProposedAmount');
                      // }}
                      // title_proposedAmount={proposedAmount.RoleName}
                      onPress_loanPurposeGroup={() => {
                        handleOpenListModal('LoanPurpose', 'LoanPurposeGroup');
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
      <AlertModal
        visible={alertModal}
        title={alertMessage}
        onPress={() => setAlertModal(false)}
      />
      <CustomerListModal
        backOnPress={() => props.navigation.goBack()}
        visible={customerListModal}
        data={customerList}
        onPress={item => handleProceed(item)}
      />
    </StoryScreen>
  );
};

const mapStateToProps = (state, props) => ({
  loading: state.loanProposalDetailRoot.loading,
  profile: state.profileRoot.userInit,
});
export default connect(mapStateToProps)(LoanProposal);
