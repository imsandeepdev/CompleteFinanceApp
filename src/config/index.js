export const Config = {
  // API_URL: 'http://ratneshyadav2407-001-site1.htempurl.com/api',
  API_URL: 'http://223.239.128.138:8090/api',

  LoginAPI: '/Account/Login',
  RegisterAPI: '/User/RegisterUser',
  roleAPI: '/Account/GetRoleList?UserId=',
  ProfileAPI: '/Account/UserProfile?UserId=',
  GetMenuListAPI: '/User/GetMenuList',
  dropDownAPI: '/User/GetCustomerMasterDropdown?mode=',
  saveCustomerAPI: '/User/SaveCustomer',
  regGroupAPI: '/Group/RegisterGroup',
  regCenterAPI: '/Center/RegisterCenter',
  getAllCustomerAPI: '/User/GetAllCustomer',
  getGroupDropDown: '/Group/GetgroupDropdown',
  getGroupWiseCustomerAPI: '/Group/GetgroupWiseCustomer',
  updateGRTAPI: '/Group/UpdateGRT',
  saveCustomerDocAPI: '/User/SaveCustomerDocument',
  loanProposalDropdownAPI: '/Loan/GetloanPurposalDropdown?mode=',
  saveLoanProposalAPI: '/Loan/SaveLoanProposal',
  proposeAmountAPI:'/Loan/GetLoanProposedAmount',
  loanProposalDetailAPI:'/Loan/GetLoanPurposalDetail',
  updateLoanApprovalAPI:'/Loan/UpdateLoanApproval'
};
