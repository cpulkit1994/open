import { NgModule }               from '@angular/core'
import { RouterModule,
         Routes
       }                          from '@angular/router'
import { ComponentRoute }         from './app-ui-router-constants'
import { LandingComponent }       from './landing/landing.component'

const routes: Routes = [
  {
    path      : ComponentRoute.landing,
    component : LandingComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
