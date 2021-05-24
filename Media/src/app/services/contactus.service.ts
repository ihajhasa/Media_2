import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {


  userURL: string = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }


  send(form: any) {
    return this.httpClient.post<any>(this.userURL + 'contactus', form);
  }

}