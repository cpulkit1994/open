import { Injectable }       from '@angular/core'
import { LoanType,
         LoanDetail,
         GetLandingPageInfo,
         LoanEligibilityCriteria,
         RepaymentTenure,
         REPAYMENT_TENURE
       }                    from './landing-interface'

@Injectable({
  providedIn: 'root'
})

export class BankingService {

  constructor() { }

  async getLandingPageInfo() : Promise<GetLandingPageInfo.retval> {
    const loanType : LoanType[] = [
      {
        imageUrl  : 'assets/images/paid-instantly.png',
        title     : 'Quick cash disbursement',
        message   : 'Get terms loan that your business needs within 72 hrs'
      },
      {
        imageUrl  : 'assets/images/low-interest-rate.png',
        title     : 'Low-interest rate',
        message   : 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'
      },
      {
        imageUrl  : 'assets/images/secure-payments.png',
        title     : 'Zero paperwork',
        message   : 'Get started instantly by submitting only your basic details and bank statements'
      },
      {
        imageUrl  : 'assets/images/freelancer-feature.png',
        title     : 'Ace your business finances',
        message   : 'Manage banking, accounting & everything in between, on one platform'
      },
      {
        imageUrl  : 'assets/images/covid.png',
        title     : 'Loans to fight Covid-19',
        message   : 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'
      }
    ]

    const repaymentTenure : RepaymentTenure[] = [
      {
        id    : REPAYMENT_TENURE.THREE_MONTH,
        value : '3 Months'
      },
      {
        id    : REPAYMENT_TENURE.SIX_MONTH,
        value : '6 Months'
      },
      {
        id    : REPAYMENT_TENURE.NINE_MONTH,
        value : '9 Months'
      },
      {
        id    : REPAYMENT_TENURE.TWELVE_MONTH,
        value : '12 Months'
      },
      {
        id    : REPAYMENT_TENURE.FIFTEEN_MONTH,
        value : '15 Months'
      }
    ]

    const loanCriteria : LoanEligibilityCriteria = {
      minMonthSalary  : 100000,
      maxMonthSalary  : 300000,
      salaryStep      : 1000,
      minMonthExpense : 0,
      maxMonthExpense : 100000,
      expenseStep     : 1000,
      repayTenure     : repaymentTenure
    }

    const retval : GetLandingPageInfo.retval = {
      loanCriteria  : loanCriteria,
      loanTypes     : loanType
    }

    return retval
  }

  getMoney(loanDetail : LoanDetail) {
    window.open("https://www.bankopen.co/", "_blank")
  }
}
