import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Output() recordDeleted = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Input() contactData: Array<any>;
  constructor() { }

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