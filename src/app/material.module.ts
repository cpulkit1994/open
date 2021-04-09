import { NgModule }                                       from '@angular/core'
import { MatCardModule }                                  from '@angular/material/card'
import { MatRippleModule }                                from '@angular/material/core'
import { MatExpansionModule }                             from '@angular/material/expansion'
import { MatFormFieldModule }                             from '@angular/material/form-field'
import { MatInputModule }                                 from '@angular/material/input'
import { MatProgressSpinnerModule }                       from '@angular/material/progress-spinner'
import { MatSelectModule }                                from '@angular/material/select'
import { MatButtonToggleModule }                          from '@angular/material/button-toggle'
import { MatSlideToggleModule }                           from '@angular/material/slide-toggle'
import { MatSliderModule }                                from '@angular/material/slider'

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSliderModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatSelectModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSliderModule
  ],
  providers: [],

})

export class MaterialModule { }
