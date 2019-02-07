import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-enviar-correo',
  templateUrl: './enviar-correo.component.html',
  styleUrls: ['./enviar-correo.component.css']
})
export class EnviarCorreoComponent implements OnInit {

 /*  @Output() paraEvent = new EventEmitter<any>();
  @Output() ccEvent = new EventEmitter<any>(); */
  @Output() sendMail = new EventEmitter<any>(); 
  @Output() updateObject = new EventEmitter<any>();
  @Input() currentMail:any;
  @Input() correoData: Array<any>;
  @Input() contactData: Array<any>;
  constructor(){ }

  ngOnInit() {
  }

   public updateEvent(record,evento)
   {
      record.Evento= evento;
      this.updateObject.emit(record);
   }

   public clearEvent(record,propiedad)
   {
      if(propiedad==="para")
      {
        this.currentMail.Para = "";
      }
      else
      {
        if(propiedad==="bcc")
        {
          this.currentMail.Bcc = "";
        }
        else
        {
          this.currentMail.Cc = "";
        }
      }

      this.updateObject.emit(this.currentMail);
   }
   
   public sendEmail(event)
   {
       this.sendMail.emit(this.currentMail);
   }
  

}
