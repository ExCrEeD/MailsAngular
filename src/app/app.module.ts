import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { WorkoutService } from './Services/workout.service';
import { CorreosService  } from './Services/correos.service';
import { EnviarService } from './Services/enviar.service'

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddOrUpdateContactComponent } from './add-or-update-contact/add-or-update-contact.component';
import * as _ from 'lodash';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CorreosComponent } from './correos/correos.component';
import { HomeCorreoComponent } from './home-correo/home-correo.component';
import { AddOrUpdateCorreoComponent } from './add-or-update-correo/add-or-update-correo.component';
import { EnviarCorreoComponent } from './enviar-correo/enviar-correo.component';
import { HomeEnviarCorreoComponent } from './home-enviar-correo/home-enviar-correo.component';
import { SelectContactComponent } from './select-contact/select-contact.component';

import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AddOrUpdateContactComponent,
    MainpageComponent,
    CorreosComponent,
    HomeCorreoComponent,
    AddOrUpdateCorreoComponent,
    EnviarCorreoComponent,
    HomeEnviarCorreoComponent,
    SelectContactComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    WorkoutService,
    CorreosService,
    EnviarService
    ]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }