export enum REPAYMENT_TENURE {
  THREE_MONTH   = 'THREE_MONTH',
  SIX_MONTH     = 'SIX_MONTH',
  NINE_MONTH    = 'NINE_MONTH',
  TWELVE_MONTH  = 'TWELVE_MONTH',
  FIFTEEN_MONTH = 'FIFTEEN_MONTH'
}

export interface RepaymentTenure {
  id    : REPAYMENT_TENURE
  value : string
}

export interface LoanType {
  title     : string
  imageUrl  : string
  message   : string
}

export interface LoanEligibilityCriteria {
  minMonthSalary  : number
  maxMonthSalary  : number
  salaryStep      : number
  minMonthExpense : number
  maxMonthExpense : number
  expenseStep     : number
  repayTenure     : RepaymentTenure[]
}

export interface LoanDetail {
  monthlySalary     : number
  monthlyExpense    : number
  repaymentTenure   : REPAYMENT_TENURE
  existingLoan      : boolean
  existingLoanEmi  ?: number
}

export namespace GetLandingPageInfo {

  export type params = {}

  export type retval = {
    loanCriteria  : LoanEligibilityCriteria
    loanTypes     : LoanType[]
  }
}
