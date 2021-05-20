import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = 'http://localhost:3001/'

  constructor(private httpClient: HttpClient) { }

  loginUser(form: any) {
    return this.httpClient.post<any>(this.userURL + 'login/', form)
  }

  registerUser(form: any) {
    return this.httpClient.post<any>(this.userURL + 'register/', form);
  }

  // local storage functions
  storeLocalUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  getLocalUser() {
    const userString = localStorage.getItem('user')

    if(!userString) {return null}

    return JSON.parse(userString)
  }

  deleteLocalUser() {
    localStorage.removeItem('user')
  }
}
