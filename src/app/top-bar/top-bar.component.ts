import { Component,
         Input,
         OnInit
       }                        from '@angular/core'

@Component({
  selector    : 'app-top-bar',
  templateUrl : './top-bar.component.html',
  styleUrls   : ['./top-bar.component.scss']
})

export class TopBarComponent implements OnInit {

  @Input() isScrolling : boolean

  constructor() { }

  ngOnInit() {

  }

/*==============================================================================
                                HTML
==============================================================================*/

  onProductClick() {
    window.open("https://www.bankopen.co/", "_blank")
  }

  onSolutionsClick() {
    window.open("https://www.bankopen.co/", "_blank")
  }

  onPricingClick() {
    window.open("https://www.bankopen.co/", "_blank")
  }

  login() {
    window.open("https://www.bankopen.co/", "_blank")
  }

  onGetStarted() {
    window.open("https://www.bankopen.co/", "_blank")
  }

}
