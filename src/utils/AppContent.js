import R from '../res/R';

const AppContent = {
  roleList: [
    'Engineer',
    'Machanic',
    'Doctor',
    'Driver',
    'Influencer',
    'Businessman',
    'ShopKeeper',
  ],
  genderList: [
    {
      id: '1',
      RoleName: 'Male',
    },
    {
      id: '2',
      RoleName: 'Female',
    },
    {
      id: '3',
      RoleName: 'Other',
    },
  ],
  maritalStatusList: [
    {
      id: '1',
      RoleName: 'Married',
    },
    {
      id: '2',
      RoleName: 'Unmarried',
    },
  ],

  memberQualification: [
    {
      id: '1',
      RoleName: 'HSC',
    },
    {
      id: '2',
      RoleName: 'SSC',
    },
    {
      id: '3',
      RoleName: 'Graduation',
    },
    {
      id: '4',
      RoleName: 'Post Graduation',
    },
    {
      id: '5',
      RoleName: 'Other Degree',
    },
  ],

  religionList: [
    {
      id: '1',
      RoleName: 'Hindu',
    },
    {
      id: '2',
      RoleName: 'Buddha',
    },
    {
      id: '3',
      RoleName: 'Islam',
    },
    {
      id: '4',
      RoleName: 'Sikhism',
    },
    {
      id: '5',
      RoleName: 'Other',
    },
  ],

  casteList: [
    {
      id: '1',
      RoleName: 'Genral',
    },
    {
      id: '2',
      RoleName: 'OBC',
    },
    {
      id: '3',
      RoleName: 'SC/ST',
    },
    {
      id: '4',
      RoleName: 'Other',
    },
  ],
  houseStatusList: [
    {
      id: '1',
      RoleName: 'houseStatus1',
    },
    {
      id: '2',
      RoleName: 'houseStatus12',
    },
    {
      id: '3',
      RoleName: 'houseStatus13',
    },
    {
      id: '4',
      RoleName: 'houseStatus14',
    },
  ],
  natureBusinessList: [
    {
      id: '1',
      RoleName: 'natureBusiness',
    },
    {
      id: '2',
      RoleName: 'natureBusiness2',
    },
    {
      id: '3',
      RoleName: 'natureBusiness3',
    },
    {
      id: '4',
      RoleName: 'natureBusiness4',
    },
  ],

  noOfMember: [
    {
      id: '1',
      RoleName: '1',
    },
    {
      id: '2',
      RoleName: '2',
    },
    {
      id: '3',
      RoleName: '3',
    },
    {
      id: '4',
      RoleName: '4',
    },
  ],
  NomanidataList: [
    {
      id: '1',
      RoleName: 'Father',
    },
    {
      id: '2',
      RoleName: 'Mother',
    },
    {
      id: '3',
      RoleName: 'Brother',
    },
    {
      id: '4',
      RoleName: 'Sister',
    },
    {
      id: '5',
      RoleName: 'GrandFather',
    },
    {
      id: '6',
      RoleName: 'GrandMother',
    },
    {
      id: '7',
      RoleName: 'Uncle',
    },
  ],
  accountType: [
    {
      id: '1',
      RoleName: 'Saving',
    },
    {
      id: '2',
      RoleName: 'Current',
    },
    {
      id: '3',
      RoleName: 'Saving',
    },
  ],

  LoanProposalHeader: [
    {
      id: '1',
      title: 'Income Details',
    },
    {
      id: '2',
      title: 'Monthly Expenses',
    },
    {
      id: '3',
      title: 'Loan Proposal',
    },
  ],

  ApprovedStatusGrt: [
    {
      id: 1,
      approvedTitile: 'Accept',
    },
    {
      id: 0,
      approvedTitile: 'Rejected',
    },
  ],

  HeaderCardList: [
    {
      id: '1',
      title: 'Applicant',
      subTitle: 'Report',
      url: 'https://cdn-icons-png.flaticon.com/128/3534/3534066.png',
      firstColor: '#6DD4CE',
      secondColor: R.colors.appColor,
      thirdColor: '#025A56',
      // firstColor: '#92d3f9',
      // secondColor: '#015485',
    },
    {
      id: '2',
      title: 'Branch',
      subTitle: 'Report',
      url: 'https://cdn-icons-png.flaticon.com/128/4435/4435114.png',
      firstColor: '#6DD4CE',
      secondColor: R.colors.appColor,
      thirdColor: '#025A56',
      // firstColor: '#69e2dc',
      // secondColor: '#01857e',
    },
    {
      id: '3',
      title: 'Collection',
      subTitle: 'Report',
      url: 'https://cdn-icons-png.flaticon.com/128/2691/2691758.png',
      firstColor: '#6DD4CE',
      secondColor: R.colors.appColor,
      thirdColor: '#025A56',
      // firstColor: '#F99c92',
      // secondColor: '#B7210f',
    },
    {
      id: '4',
      title: 'Performance',
      subTitle: 'Report',
      url: 'https://cdn-icons-png.flaticon.com/128/1170/1170616.png',
      firstColor: '#6DD4CE',
      secondColor: R.colors.appColor,
      thirdColor: '#025A56',
      // firstColor: '#Fbc576',
      // secondColor: '#C57703',
    },
  ],

  ListOne: [
    {
      id: 0,
      Title: 'Loan Application',
      // icon: 'https://poonawallafincorp.com/pfca/assets/og_image/og_image-what-is-loan-account-number-og.jpg',
      icon: 'https://img.freepik.com/free-vector/bank-loan-concept-illustration_114360-17863.jpg?size=626&ext=jpg&ga=GA1.2.445611540.1685551303&semt=sph',
      icon1: R.images.loanIcon,
      Url: 'ApplicantForm',
      For: 'LoanApplication',
    },
    {
      id: 1,
      Title: 'Group Formation',
      // icon: 'https://www.rhythmsystems.com/hubfs/16_RS_For_Blogs/iStock-504635632.jpg',
      icon: 'https://img.freepik.com/free-vector/teamwork-modern-office_23-2147677068.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.groupIcon,
      Url: 'GroupForm',
      For: 'GroupForm',
    },
    {
      id: 2,
      Title: 'Center Formation',
      // icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkXIuTb4aWlhWnAcTlikoXebE_77Dm1tKQvF1nhKxg&usqp=CAU&ec=48665699',
      icon: 'https://img.freepik.com/free-vector/setup-concept-illustration_114360-382.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.applicantFormIcon,
      Url: 'CenterForm',
      For: 'CenterForm',
    },
    {
      id: 3,
      Title: 'GRT',
      // icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfyoazwee-uSof7t911AQvvCtr_VUZFN0i3QUlPrtI0k29UzygLYgsBE4IqA_E8w049LrlhRdQlH0&usqp=CAU&ec=48665699',
      icon: 'https://img.freepik.com/free-vector/tiny-people-standing-near-big-checkmark-team-male-female-characters-finishing-work-with-list-good-job-sign-flat-vector-illustration-done-job-checklist-time-management-concept_74855-21019.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.grtScreen,
      Url: 'GrtForm',
      For: 'Grt',
    },
    {
      id: 4,
      Title: 'Loan Proposal',
      // icon: 'https://www.firstib.com/wp-content/uploads/2022/04/iStock-1322517295.jpg',
      icon: 'https://img.freepik.com/free-vector/manager-giving-document-female-boss-signing-leader-male-assistant-agreement-cartoon-illustration_74855-14450.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.applicantFormIcon,
      Url: 'LoanProposal',
      For: 'LoanProposal',
    },
    {
      id: 5,
      Title: 'Loan Approval',
      // icon: 'https://img.freepik.com/free-photo/corporate-business-handshake-partners_53876-102581.jpg',
      icon: 'https://img.freepik.com/free-vector/product-quality-control-abstract-concept-illustration-product-safety-standard-customer-feedback-warranty-certificate-production-line-business-success-inspection_335657-167.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.applicantFormIcon,
      Url: 'LoanApproval',
      For: 'LoanApproval',
    },
    {
      id: 6,
      Title: 'Pre Disbursement',
      // icon: 'https://www.nextprocess.com/wp-content/uploads/secure-digital-payment-disbursement-solution-1920x1280.jpg',
      icon: 'https://img.freepik.com/free-vector/signing-contract-official-document-agreement-deal-commitment-businessmen-cartoon-characters-shaking-hands-legal-contract-with-signature-concept-illustration_335657-2040.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.applicantFormIcon,
      Url: 'DisbursementScreen',
      For: 'DisbursementScreen',
    },
    {
      id: 6,
      Title: 'Payment Screen',
      // icon: 'https://www.chaserhq.com/hubfs/03%20BLOG/5benefits-of-payment-portals-for-smal-businesses.jpg',
      icon: 'https://img.freepik.com/premium-vector/hand-holding-phone-making-purchase-using-credit-card_74855-19801.jpg?size=626&ext=jpg&ga=GA1.1.445611540.1685551303&semt=ais',
      icon1: R.images.applicantFormIcon,
      Url: 'PaymentScreen',
      For: 'PaymentScreen',
    },
  ],

  LoanCardList: [
    {
      id: 0,
      Title: 'Loan',
      subTitle: 'Application',
      icon: 'https://cdn-icons-png.flaticon.com/128/9196/9196974.png',
      icon1: R.images.loanIcon,
      Url: 'ApplicantForm',
      For: 'LoanApplication',
      firstColor: '#69e2dc',
      secondColor: '#12B5AC',
      thirdColor: '#01857e',
    },
    {
      id: 1,
      Title: 'Group',
      subTitle: 'Formation',
      icon: 'https://cdn-icons-png.flaticon.com/128/1239/1239719.png',
      icon1: R.images.groupIcon,
      Url: 'GroupForm',
      For: 'GroupForm',
      firstColor: '#92d3f9',
      secondColor: '#1973A8',
      thirdColor: '#015485',
    },
    {
      id: 2,
      Title: 'Center',
      subTitle: 'Formation',
      icon: 'https://cdn-icons-png.flaticon.com/128/5718/5718761.png',
      // icon: 'https://cdn-icons-png.flaticon.com/128/8572/8572066.png',
      icon1: R.images.applicantFormIcon,
      Url: 'CenterForm',
      For: 'CenterForm',
      firstColor: '#F99c92',
      secondColor: '#B7210f',
      thirdColor: '#901102',
    },
    {
      id: 3,
      Title: 'GRT',
      subTitle: 'Formation',
      icon: 'https://cdn-icons-png.flaticon.com/128/10063/10063899.png',
      // icon: 'https://cdn-icons-png.flaticon.com/128/12626/12626809.png',
      icon1: R.images.grtScreen,
      Url: 'GrtForm',
      For: 'Grt',
      firstColor: '#FDCB9A',
      secondColor: '#C77421',
      thirdColor: '#AA5602',
    },
    {
      id: 4,
      Title: 'Loan',
      subTitle: 'Proposal',
      icon: 'https://cdn-icons-png.flaticon.com/128/2683/2683317.png',
      icon1: R.images.applicantFormIcon,
      Url: 'LoanProposal',
      For: 'LoanProposal',
      firstColor: '#92d3f9',
      secondColor: '#1973A8',
      thirdColor: '#015485',
    },
    {
      id: 5,
      Title: 'Loan',
      subTitle: 'Approval',
      icon: 'https://cdn-icons-png.flaticon.com/128/3188/3188129.png',
      icon1: R.images.applicantFormIcon,
      Url: 'LoanApproval',
      For: 'LoanApproval',
      firstColor: '#69e2dc',
      secondColor: '#12B5AC',
      thirdColor: '#01857e',
    },
    {
      id: 6,
      Title: 'Pre ',
      subTitle: 'Disbursement',
      icon: 'https://cdn-icons-png.flaticon.com/128/781/781760.png',
      icon1: R.images.applicantFormIcon,
      Url: 'DisbursementScreen',
      For: 'DisbursementScreen',
      firstColor: '#FDCB9A',
      secondColor: '#C77421',
      thirdColor: '#AA5602',
    },
    {
      id: 7,
      Title: 'Payment',
      subTitle: 'Collection',
      icon: 'https://cdn-icons-png.flaticon.com/128/4108/4108843.png',
      icon1: R.images.applicantFormIcon,
      Url: 'PaymentScreen',
      For: 'PaymentScreen',
      firstColor: '#ADEBFB',
      secondColor: '#1598B9',
      thirdColor: '#027A98',
    },
  ],
};

export default AppContent;
