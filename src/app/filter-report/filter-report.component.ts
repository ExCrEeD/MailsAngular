import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-filter-report',
  templateUrl: './filter-report.component.html',
  styleUrls: ['./filter-report.component.css']
})
export class FilterReportComponent implements OnInit {

  constructor() { }
  @Output() reportFilter= new EventEmitter<any>();
  @Input()  currentMail:any;
  ngOnInit() {
  }

  public filter(event)
  {
     this.reportFilter.emit(this.currentMail);
  }

}
