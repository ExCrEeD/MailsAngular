import { Component, OnInit } from '@angular/core';
import { EnviarService } from '../Services/enviar.service';
import {saveAs} from "file-saver";

@Component({
  selector: 'app-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.css']
})
export class HomeReportComponent implements OnInit {
  public correoData: Array<any>;
  public currentMail:any;
  constructor(private enviarService:EnviarService)
  {
    enviarService.get().subscribe((data:any)=> this.correoData = data);
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
          Fecha: "",
          Formato:"",
          Estado:"",
          Evento:""
      }
   }
   
  public download(email)
  {
    this.enviarService.downloadFile(email).subscribe(blob=> {
      saveAs(blob,"email"+String(email.Id)+"."+email.Formato);
    });
  }
  public reportFilter(filters)
  {
       this.enviarService.getReportFilter(filters).subscribe((data:any)=> this.correoData = data); 
  }
}
