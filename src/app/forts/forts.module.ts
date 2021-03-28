import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FortsRoutingModule } from './forts-routing.module';
import { FortsComponent } from './forts.component';
import { AgmCoreModule } from '@agm/core';
import { ProfessionalTrekkersComponent } from './professional-trekkers/professional-trekkers.component';
import { FirstTimeTrekkersComponent } from './first-time-trekkers/first-time-trekkers.component';
import { FaqComponent } from './faq/faq.component';
import { RatingModule } from 'ng-starrating';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    FortsComponent,
    FirstTimeTrekkersComponent,
    ProfessionalTrekkersComponent,
    FaqComponent
  ],

  imports: [
    CommonModule,
    FortsRoutingModule,
    RatingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      // apiKey: 'AIzaSyCjsuGYtCxdK7A9mR9lDMVzicQNx_ONnVo'
       apiKey: 'AIzaSyB9d2_RCmkp7peLF4XfpDvRpNgklVoWuAU'
     })
  ]
})

export class FortsModule { }
