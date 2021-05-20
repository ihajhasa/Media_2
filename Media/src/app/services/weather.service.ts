import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherURL: string = 'http://localhost:3000/weather'

  constructor(private httpClient: HttpClient) { } 

  getWeatherDetails(): Observable<any>{
    return this.httpClient.get(this.weatherURL);
  }
}
