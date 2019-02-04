import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-add-or-update-contact',
  templateUrl: './add-or-update-contact.component.html',
  styleUrls: ['./add-or-update-contact.component.css']
})
export class AddOrUpdateContactComponent implements OnInit {

  @Output() contactCreated = new EventEmitter<any>();
  @Input()  contactInfo:any;
  
  public buttonText  = "Guardar";

  constructor() {
    this.clearContactInfo();
   }

  ngOnInit() {
  }

  private clearContactInfo = function()
  {
    // crear un objeto de contacto vacio
    this.contactInfo = { id:undefined,Nombre:"",Correo:"",Estado:""}
  }
  
  public addOrUpdateContactRecord = function(event)
  {    
      this.contactCreated.emit(this.contactInfo);
      this.clearContactInfo();
  }  
  
  

}
