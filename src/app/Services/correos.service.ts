import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CorreosService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:52693/api/correo';
  constructor(private http: HttpClient) 
  { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(correo) {
    return this.http.post(this.accessPointUrl,correo, {headers: this.headers});
  }

  public remove(correo) {
    return this.http.delete(this.accessPointUrl + '/' + correo.Id, {headers: this.headers});
  }

  public update(correo) {
    return this.http.put(this.accessPointUrl + '/' + correo.Id, correo, {headers: this.headers});
  }

}
