import { Component }  from '@angular/core'
import { Router }         from '@angular/router'
import { ComponentRoute } from './app-ui-router-constants'

@Component({
  selector    : 'app-root',
  templateUrl : './app.component.html',
  styleUrls   : ['./app.component.scss']
})

export class AppComponent {

  constructor(private router : Router) {
    this.init()
  }

/*==============================================================================
                                Private
==============================================================================*/

  private init() {
    this.router.navigate([ComponentRoute.landing])
  }

  title = 'open';
}
