import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

import { WorkoutService } from './workout.service';
import { HttpClientModule } from '@angular/common/http';
import { AddOrUpadateContactComponent } from './add-or-upadate-contact/add-or-upadate-contact.component';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HomeComponent,
    AddOrUpadateContactComponent
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