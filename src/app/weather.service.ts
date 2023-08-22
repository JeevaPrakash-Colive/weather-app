import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '2e7e1d8fabd7c153330e11d1f13782d9';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const url = `${this.baseUrl}?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
//   searchWeatherData(cityName: string): Observable<any> {
//     return this._http.get(this.baseUrl + cityName + '&APPID=' + this.apiKey + '&units=metric')
//       .map(response => {
//         return response.json();
//       })
//       .catch(error => {
//         console.log(error);
//         return Observable.throw(error.json());
//       });

}