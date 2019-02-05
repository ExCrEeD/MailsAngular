import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {NgForm, FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-or-update-contact',
  templateUrl: './add-or-update-contact.component.html',
  styleUrls: ['./add-or-update-contact.component.css']
})
export class AddOrUpdateContactComponent implements OnInit {

  @Output() contactCreated = new EventEmitter<any>();
  @Input()  contactInfo:any;
  public buttonText  = "Guardar";
  public validar = "false";

  constructor() {
    this.clearContactInfo();
    
   }

  ngOnInit() {
  }

  private clearContactInfo = function()
  {
    // crear un objeto de contacto vacio
    this.contactInfo = { Id:undefined,Nombre:"",Correo:"",Estado:""}
  }
  

  public addOrUpdateContactRecord = function(event)
  {   
    this.validar = "false";
      if(this.contactInfo.Nombre==="" || this.contactInfo.Correo==="" || this.contactInfo.Estado==="")
      {
          this.validar = "true";
      } 
      else{
        this.contactCreated.emit(this.contactInfo);
        this.clearContactInfo();
      }  
  }  
  
}
