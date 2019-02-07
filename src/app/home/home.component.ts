import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../Services/workout.service'
import * as _ from 'lodash';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public contactData: Array<any>;
  public currentContact: any;

  constructor(private workoutServices:WorkoutService)
  { 
      workoutServices.get().subscribe((data:any)=> this.contactData = data);
      this.currentContact = this.setInitialValuesForContactData();
  }

  ngOnInit() {
    /* if(this.contactData != undefined)
    {
      this.contactData.length = 0;
    }   */
    {this.workoutServices.get().subscribe((data:any)=> this.contactData = data)};
  }

  private setInitialValuesForContactData()
  {
    return{
          Id:undefined,Nombre:"",Correo:"",Estado:""
    }
  }

  public createOrUpdateContact = function(contact:any)
  {
    // si contacto esta presente en contactdata se asume un update si no es un create
    
    let contactWithId;
    contactWithId = _.find(this.contactData,(tempContact=> tempContact.Id === contact.Id));
    if (contactWithId)
    {
      if(contactWithId.Id===undefined)
      {
         this.addContact(contact);
      }
      else
      {
        const updateIndex = _.findIndex(this.contactData,{Id:contactWithId.Id});
        this.workoutServices.update(contact).subscribe(contactRecord=> this.contactData.splice(updateIndex,1,contact));
      }      
    }else{ 
      this.addContact(contact);
    }
    this.currentContact = this.setInitialValuesForContactData();
  }
   
  private addContact(contact:any)
  {
    //this.workoutServices.add(contact).subscribe(contactRecord=> this.contactData.push(contact))
    this.workoutServices.add(contact).subscribe();
    this.currentContact = this.setInitialValuesForContactData();  
    this.workoutServices.get().subscribe((data:any)=> this.contactData = data);
  }

  public editClicked = function(record) {
    this.currentContact = record;
  };

  public newClicked = function() {
    this.currentContact = this.setInitialValuesForContactData(); 
  };

  public deleteClicked(record) {
    /* this.workoutServices.remove(record); */
     /* console.log(record); */
     this.workoutServices.get().subscribe((data:any)=> this.contactData = data);
     const deleteIndex = _.findIndex(this.contactData, {Id: record.Id});
     this.workoutServices.remove(record).subscribe(result => this.contactData.splice(deleteIndex, 1)); 

  }
}
