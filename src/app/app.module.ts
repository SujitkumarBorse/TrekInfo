import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DoAndDonotComponent } from './do-and-donot/do-and-donot.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { FortService } from './fort.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

//Forts Module
// import { FortsModule } from './forts/forts.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EquipmentsComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    DoAndDonotComponent,
    NotfoundComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // FortsModule
  ],

  providers: [FortService],
  bootstrap: [AppComponent]
})
export class AppModule { }

