import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';


@Component({
  selector: 'app-correos',
  templateUrl: './correos.component.html',
  styleUrls: ['./correos.component.css']
})
export class CorreosComponent implements OnInit {
  
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Input() correoData: Array<any>;
  constructor(){ }

  ngOnInit() {
  }


  public deleteRecord(record)
  {
     this.recordDeleted.emit(record);
  }

  public editRecord(record)
  {
    const cloneRecord = Object.assign({},record);
    this.editClicked.emit(cloneRecord);
  }
  
  public newRecord()
  {
    this.newClicked.emit();
  }
  
}

  
