import { Component } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city = '';
  weatherData: any;
  isVisible: boolean = false;

  constructor(private weatherService: WeatherService) {}

  ngOninIt(){
  }
  getWeather() {
    this.isVisible = true;
    this.weatherService.getWeather(this.city)
      .subscribe(data => {
        this.weatherData = data;
      });
  }
}