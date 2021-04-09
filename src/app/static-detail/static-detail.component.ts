import { Component,
         Input,
         OnInit
       }                      from '@angular/core'
import { LoanType }           from '../landing-interface'

@Component({
  selector    : 'app-static-detail',
  templateUrl : './static-detail.component.html',
  styleUrls   : ['./static-detail.component.scss']
})

export class StaticDetailComponent implements OnInit {

  showWhiteText : boolean = false

  @Input() loanType : LoanType

  constructor() { }

  ngOnInit() {

  }

/*==============================================================================
                                HTML
==============================================================================*/

  onCardClick() {
    window.open("https://www.bankopen.co/", "_blank")
  }

  // To change the text of message property white hovering

  onMouseOver() {
    this.showWhiteText = true
  }

  onMouseLeave() {
    this.showWhiteText = false
  }

}
