import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EnviarService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:52693/api/sendmails';
  
  
  constructor(private http: HttpClient) 
  { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public add(correo) {
    return this.http.post(this.accessPointUrl,correo, {headers: this.headers});
  }

  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl+'/GetAll/', {headers: this.headers});
  }

  public downloadFile(email){  
     return this.http.get(this.accessPointUrl + '/GetFile/' + email.Id, {responseType: 'blob'});
  }

  public getReportFilter(filters) {
    // Get all jogging data
    //let params = new HttpParams().set("paramName",paramValue).set("paramName2", paramValue2); //Create new HttpParams
    console.log(filters);
    console.log("service");
    return this.http.get(this.accessPointUrl+'/getreportfilter',{headers: this.headers,params:filters}); 
  
  }
}