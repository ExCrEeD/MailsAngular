import { Component, OnInit,EventEmitter } from '@angular/core';
import { CorreosService } from '../Services/correos.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.css']
})
export class CorreosComponent implements OnInit {
  
  public correoData: Array<any>;
  public currentCorreo: any;
  /* recordDeleted = new EventEmitter<any>();
  editClicked = new EventEmitter<any>();
  newClicked = new EventEmitter<any>(); */
  constructor(private correosService:CorreosService)
  {
      correosService.get().subscribe((data:any)=>this.correoData=data);
      this.currentCorreo = this.setInitialValuesForCorreoData();
  }

  ngOnInit() {
  }

  private setInitialValuesForCorreoData()
  {
    return {Id:undefined,Email:"",Password:""}
  }

  public deleteRecord(record)
  {
     const deleteIndex = _.findIndex(this.correoData, {Id: record.Id});
     this.correosService.remove(record).subscribe(
      result => this.correoData.splice(deleteIndex, 1) );
  }

  public editRecord(record)
  {
    /* const cloneRecord = Object.assign({},record);
    this.editClicked.emit(cloneRecord); */
  }
  
  public newRecord()
  {
    /* public currentCorreo */
  }
}
  
