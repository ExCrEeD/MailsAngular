import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-add-or-upadate-contact',
  templateUrl: './add-or-upadate-contact.component.html',
  styleUrls: ['./add-or-upadate-contact.component.css']
})
export class AddOrUpadateContactComponent implements OnInit {

  @Output() contactCreated = new EventEmitter<any>();
  @Input()  contactInfo:any;
  
  public buttonText  = "Guardar";

  constructor() {
    this.clearContactInfo();
    console.log(this.contactInfo.id);
   }

  ngOnInit() {
  }

  private clearContactInfo = function()
  {
    // crear un objeto de contacto vacio
    this.contactInfo = { id:undefined,Nombre:"",Correo:"",Estado:false}
  }
  
  public addOrUpdateContactRecord = function(event)
  {
      this.contactCreated.emit(this.contactInfo);
      this.clearContactInfo();
  }

  
}
