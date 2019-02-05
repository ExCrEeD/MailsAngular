import { Component, OnInit } from '@angular/core';
import { CorreosService } from '../Services/correos.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-home-correo',
  templateUrl: './home-correo.component.html',
  styleUrls: ['./home-correo.component.css']
})
export class HomeCorreoComponent implements OnInit {
  public correoData: Array<any>;
  public currentCorreo: any;

  constructor(private correosService:CorreosService)
  {
      correosService.get().subscribe((data:any)=>this.correoData=data);
      this.currentCorreo = this.setInitialValuesForCorreoData();
  }
  
  private setInitialValuesForCorreoData()
  {
    return {Id:undefined,Email:"",Password:""}
  }

  ngOnInit() {
  }

  public createOrUpdateCorreo = function(correo:any)
  {
    // si correoo esta presente en correodata se asume un update si no es un create
    let correoWithId;
    correoWithId = _.find(this.correoData,(tempCorreo=> tempCorreo.Id === correo.Id));
    if (correoWithId)
    {
       const updateIndex = _.findIndex(this.correoData,{Id:correoWithId.Id});
       this.correosService.update(correo).subscribe(correoRecord=> this.correoData.splice(updateIndex,1,correo));
    }else{ 
       this.correosService.add(correo).subscribe(correoRecord=> this.correoData.push(correo))
       this.currentCorreo = this.setInitialValuesForCorreoData();
    }
    this.currentCorreo = this.setInitialValuesForCorreoData();
  }
   
  public editClicked = function(record) {
    this.currentCorreo = record;
  };

  public newClicked = function() {
    this.currentCorreo = this.setInitialValuesForCorreoData(); 
  };

  public deleteClicked(record) {
    /* this.workoutServices.remove(record); */
     /* console.log(record); */
   
     const deleteIndex = _.findIndex(this.correoData, {Id: record.Id});
     this.correosService.remove(record).subscribe(
      result => this.correoData.splice(deleteIndex, 1) 
      
    ); 
  }

}
