import { Component,
         Input,
         OnInit
       }                            from '@angular/core'
import { FormGroup,
         FormBuilder,
         Validators
       }                            from '@angular/forms'
import { MatSliderChange }          from '@angular/material/slider'
import { BankingService }           from '../banking.service'
import { LoanDetail,
         LoanEligibilityCriteria
       }                            from '../landing-interface'

@Component({
  selector    : 'app-eligibility-calculator',
  templateUrl : './eligibility-calculator.component.html',
  styleUrls   : ['./eligibility-calculator.component.scss']
})

export class EligibilityCalculatorComponent implements OnInit {

  monthlySalary   : number
  monthlyExpense  : number
  loanForm        : FormGroup

  @Input() eligibilityCriteria : LoanEligibilityCriteria

  constructor(private bankingServ : BankingService,
    private formBuilder           : FormBuilder) { }

  ngOnInit() {
    this.loanForm  = this.formBuilder.group({
      monthlySal      : [null,  [Validators.required]],
      monthlyExp      : [null,  [Validators.required]],
      repaymentTenure : [null,  [Validators.required]],
      hasExistingLoan : [false],
      existingLoanEmi : [null]
    })

    this.monthlySalary  = this.eligibilityCriteria.minMonthSalary
    this.monthlyExpense = this.eligibilityCriteria.minMonthExpense
  }

/*==============================================================================
                                HTML
==============================================================================*/

  onMonthlySalaryChange(item : MatSliderChange) {
    this.monthlySalary = item.value
  }

  onMonthlyExpenditureChange(item : MatSliderChange) {
    this.monthlyExpense = item.value
  }

  getMoney() {
    this.loanForm.markAllAsTouched()

    if (this.loanForm.invalid) return

    const loanDetail : LoanDetail = {
      monthlySalary   : this.monthlySalary,
      monthlyExpense  : this.monthlyExpense,
      repaymentTenure : this.loanForm.controls['repaymentTenure'].value.id,
      existingLoan    : this.loanForm.controls['hasExistingLoan'].value,
      existingLoanEmi : this.loanForm.controls['existingLoanEmi'].value
    }

    this.bankingServ.getMoney(loanDetail)
  }

}
