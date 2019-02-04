import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:52693/api/contact';
  constructor(private http: HttpClient) 
  { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    // Get all jogging data
    return this.http.get(this.accessPointUrl, {headers: this.headers});
  }

  public add(contacto) {
    return this.http.post(this.accessPointUrl,contacto, {headers: this.headers});
  }

  public remove(contacto) {
    return this.http.delete(this.accessPointUrl + '/' + contacto.Id, {headers: this.headers});
  }

  public update(contacto) {
    return this.http.put(this.accessPointUrl + '/' + contacto.Id, contacto, {headers: this.headers});
  }

  
}
