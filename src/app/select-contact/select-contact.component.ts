import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-select-contact',
  templateUrl: './select-contact.component.html',
  styleUrls: ['./select-contact.component.css']
})
export class SelectContactComponent implements OnInit {
    
   @Output() updateObject =new EventEmitter<any>();
   @Input() contactData:  Array<any>;
   @Input() currentMail:any;

  constructor() { }

  ngOnInit() {
  }

  public editRecord(record) 
  {
      if(this.currentMail.Evento==="para")
      {
        if(this.currentMail.Para.indexOf(record.Correo)===-1)
        {
          this.currentMail.Para += record.Correo+";";
        }       
      }
      else
      {
        if(this.currentMail.Evento==="bcc")
        {
          if(this.currentMail.Bcc.indexOf(record.Correo)===-1)
          {
            this.currentMail.Bcc += record.Correo+";";
          }          
        }
        else
        {
          if(this.currentMail.Cc.indexOf(record.Correo)===-1)
          {
           this.currentMail.Cc += record.Correo+";";
          }
        }
      }
      this.updateObject.emit(this.currentMail);
  }
  

}
