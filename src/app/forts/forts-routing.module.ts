import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessionalTrekkersComponent } from './professional-trekkers/professional-trekkers.component';
import { FirstTimeTrekkersComponent } from './first-time-trekkers/first-time-trekkers.component';
import { FortsComponent } from './forts.component';
import { FaqComponent } from './faq/faq.component';

const routes: Routes = [
    {
        path: 'forts',
        component: FortsComponent
    },
    {
        path: 'firstTime',
        component: FirstTimeTrekkersComponent
    },
    {
        path: 'professional',
        component: ProfessionalTrekkersComponent
    },
    {
        path: 'faq',
        component: FaqComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FortsRoutingModule { }