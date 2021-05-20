import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  adminNewsURL: string = 'http://localhost:3001/news/'
  publicNewsURL: string = 'http://localhost:3000/newsArticle/'

  constructor(private httpClient: HttpClient,
    private _user: UserService) { }

  getPublicAllNews() {
    return this.httpClient.get<any>(this.publicNewsURL);
  }

  getAllNews() {

    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.get<any>(this.adminNewsURL, httpOption);
  }

  getNews(id: string) {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.get<any>(this.adminNewsURL + id, httpOption);
  }

  deleteNews(id: string) {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.delete<any>(this.adminNewsURL + id, httpOption);
  }

  postNews(news: any) {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }


    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    console.log(httpOption.headers)
    console.log(news)

    return this.httpClient.post<any>(this.adminNewsURL, news, httpOption);
  }

  updateNews(id: string, news: any)
  {
    let user = this._user.getLocalUser();

    if (!user) {
      return this.httpClient.get<any>(this.adminNewsURL);
    }

    let httpOption = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'authorization': user.token
      })
    }

    return this.httpClient.put<any>(this.adminNewsURL + id, news, httpOption);
  }
}
