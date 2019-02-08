import {Component, OnInit,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor() { }
  @Input() correoData: Array<any>;
  @Output() download  = new EventEmitter<any>();
  ngOnInit() {
  }
   
  public downloadFile(email)
  {
    this.download.emit(email);
  }
}
