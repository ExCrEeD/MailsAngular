import { Component, OnInit } from '@angular/core';
import { CorreosService } from '../Services/correos.service';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.css']
})
export class CorreosComponent implements OnInit {
  
  public correoData: Array<any>;
  public currentCorreo: any;
  constructor(private correosService:CorreosService)
  {
      correosService.get().subscribe((data:any)=>this.correoData=data);
      console.log(this.correoData);
  }

  ngOnInit() {
  }

}
