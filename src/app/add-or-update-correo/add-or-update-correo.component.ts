import { Component,OnInit,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-add-or-update-correo',
  templateUrl: './add-or-update-correo.component.html',
  styleUrls: ['./add-or-update-correo.component.css']
})
export class AddOrUpdateCorreoComponent implements OnInit {

  @Output() correoCreated = new EventEmitter<any>();
  @Input()  correoInfo:any;
  public buttonText  = "Guardar";
  public validar = "false";
  constructor() {
    this.clearCorreoInfo();
   }

  ngOnInit() {
  }
  
  private clearCorreoInfo = function()
  {
    // crear un objeto de correoo vacio
    this.correoInfo = { Id:undefined,Nombre:"",Correo:"",Estado:""}
  }
  

  public addOrUpdateCorreoRecord = function(event)
  {   
    this.validar = "false";
      if(this.correoInfo.Nombre==="" || this.correoInfo.Correo==="" || this.correoInfo.Estado==="")
      {
          this.validar = "true";
      } 
      else{
        this.correoCreated.emit(this.correoInfo);
        this.clearCorreoInfo();
      }  
  }  
}
