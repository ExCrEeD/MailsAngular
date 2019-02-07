import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

}