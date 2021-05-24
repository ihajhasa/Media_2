import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  fiveDayForecast: any[]=[];

  constructor(private weatherService:WeatherService) { }
  public weather: any ;
  public date:string = new Date().toLocaleDateString();
  public weatherImage:string = '';
  public location: string = '';


  ngOnInit(): void {
    this.weatherService.getWeatherDetails().subscribe(weather => {
      console.log(weather); 
      this.weather = weather;
      this.fiveDayForecast = weather.list;
      this.location = weather.city.name;

      //this.weatherImage =`http://openweathermap.org/img/wn/${this.weather.list[0].weather[0].icon}@4x.png`
      this.weatherImage='https://www.designyourway.net/blog/wp-content/uploads/2018/08/313119-vertical-clouds-background-2560x1600-for-iphone-7-700x438.jpg';
    }, err => {
      console.log(err);

    })
  }

}
