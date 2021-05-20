import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService:WeatherService) { }
  public weather: any ;
  public date:string = new Date().toLocaleDateString();
  public weatherImage:string = '';

  ngOnInit(): void {
    this.weatherService.getWeatherDetails().subscribe(weather => {
      console.log(weather); 
      this.weather = weather;

      this.weatherImage =`http://openweathermap.org/img/wn/${this.weather.list[0].weather[0].icon}@4x.png`
    }, err => {
      console.log(err);

    })
  }

}
