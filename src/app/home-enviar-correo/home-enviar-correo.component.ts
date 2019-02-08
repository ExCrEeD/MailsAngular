import { Component, OnInit,ViewContainerRef } from '@angular/core';
import { CorreosService } from '../Services/correos.service';
import { WorkoutService } from '../Services/workout.service';
import { EnviarService } from '../Services/enviar.service';
import { ToastrService } from 'ngx-toastr';

import * as _ from 'lodash';

@Component({
  selector: 'app-home-enviar-correo',
  templateUrl: './home-enviar-correo.component.html',
  styleUrls: ['./home-enviar-correo.component.css']
})
export class HomeEnviarCorreoComponent implements OnInit {
  public correoData: Array<any>;
  public contactData: Array<any>;
  public currentMail:any;

  constructor(private correosService:CorreosService,
    private workoutServices:WorkoutService,
    private enviarService:EnviarService,
    private toastr: ToastrService, vcr: ViewContainerRef
    ) 
  {
       correosService.get().subscribe((data:any)=>this.correoData=data);
       workoutServices.get().subscribe((data:any)=> this.contactData = data);
       this.currentMail = this.setInitialValuesForMail();
  }

  ngOnInit() {
  }
  
  private setInitialValuesForMail()
   {
     
      return{
          Id:undefined,
          De:"",
          Para:"",
          Asunto:"",
          Cc:"",
          Bcc:"",
          Mensaje:"",
          Fecha:  new Date(),
          Formato:"",
          Estado:"Enviado",
          RutaArchivo:"",
          Evento:"none"

      }
   }
  
   public updateObject(record)
   {
        this.currentMail = record;
   }
   
   public sendMail(record)
   {
     console.log(record);
     this.enviarService.add(record).subscribe();
     this.currentMail = this.setInitialValuesForMail();
     this.showSuccess();
   }

   showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
