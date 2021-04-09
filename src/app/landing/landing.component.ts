import { Component,
         OnInit
       }                            from '@angular/core'
import { BankingService }           from '../banking.service'
import { GetLandingPageInfo,
         LoanEligibilityCriteria,
         LoanType
       }                            from '../landing-interface'

@Component({
  selector    : 'app-landing',
  templateUrl : './landing.component.html',
  styleUrls   : ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  eligibiltyCriteria  : LoanEligibilityCriteria
  leftLoanTypes       : LoanType[]
  rightLoanTypes      : LoanType[]
  isScrolling         : boolean = false
  isLoading           : boolean = false

  constructor(private bankingServ : BankingService) { }

  ngOnInit() {
    this.getLandingPageInfo()
  }

/*==============================================================================
                                Private
==============================================================================*/

  private async getLandingPageInfo() {
    this.isLoading = true
    const resp : GetLandingPageInfo.retval = await this.bankingServ.getLandingPageInfo()

    if (resp.loanCriteria && resp.loanTypes) {
      this.eligibiltyCriteria = resp.loanCriteria,
      this.leftLoanTypes      = resp.loanTypes.slice(0, 3)
      this.rightLoanTypes     = resp.loanTypes.slice(3)
      this.isLoading          = false
    }
  }

/*==============================================================================
                                HTML
==============================================================================*/

  createOpenAccount() {
    window.open("https://www.bankopen.co/", "_blank")
  }

  scrolling(event : any) {
    if (event.target.scrollTop === 0) {
      this.isScrolling = false
    } else {
      this.isScrolling = true
    }
  }
}
