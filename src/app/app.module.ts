import { NgModule }                       from '@angular/core'
import { BrowserModule }                  from '@angular/platform-browser'
import { AppRoutingModule }               from './app-routing.module'
import { AppComponent }                   from './app.component'
import { TopBarComponent }                from './top-bar/top-bar.component'
import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component'
import { StaticDetailComponent }          from './static-detail/static-detail.component'
import { LandingComponent }               from './landing/landing.component'
import { BrowserAnimationsModule }        from '@angular/platform-browser/animations'
import { MaterialModule }                 from './material.module'
import { ReactiveFormsModule }            from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    EligibilityCalculatorComponent,
    StaticDetailComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
