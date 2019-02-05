import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { WorkoutService } from './workout.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddOrUpdateContactComponent } from './add-or-update-contact/add-or-update-contact.component';
import * as _ from 'lodash';
import { MainpageComponent } from './mainpage/mainpage.component';
import { CorreosComponent } from './correos/correos.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AddOrUpdateContactComponent,
    MainpageComponent,
    CorreosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }