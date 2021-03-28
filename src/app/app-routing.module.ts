import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DoAndDonotComponent } from './do-and-donot/do-and-donot.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'equipment', component: EquipmentsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'do_and_Donot', component: DoAndDonotComponent },

     // for redirect to home page
     { path: '', redirectTo: '/home', pathMatch: 'full' },
     
    // lazy loading
    {
        path: '',
        loadChildren: './forts/forts.module#FortsModule'
    },

    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }