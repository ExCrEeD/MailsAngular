import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service'
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
  }

  private setInitialValuesForContactData()
  {
    return{
          id:undefined,Nombre:"",Correo:"",Estado:""
    }
  }

  public createOrUpdateContact = function(contact:any)
  {
    // si contacto esta presente en contactdata se asume un update si no es un create
    let contactWithId;
    contactWithId = _.find(this.contactData,(tempContact=> tempContact.id === contact.id));
    if (typeof(contactWithId.Id)==="number")
    {
       const updateIndex = _.findIndex(this.contactData,{id:contactWithId.id});
       this.workoutServices.update(contact).subscribe(contactRecord=> this.contactData.splice(updateIndex,1,contact));
    }else{ 
       this.workoutServices.add(contact).subscribe(contactRecord=> this.contactData.push(contact))
    }
    this.currentContact = this.setInitialValuesForContactData();
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
   
     const deleteIndex = _.findIndex(this.contactData, {id: record.id});
     this.workoutServices.remove(record).subscribe(
      result => this.contactData.splice(deleteIndex, 1) 
      
    ); 
  }
}
