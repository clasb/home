import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import { Weather } from './weatherService/weather';
import { WeatherService } from './weatherservice/weather.service';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 

	constructor (private weatherService: WeatherService) {}

	weather: Weather;
	weatherp: Weather;
	errorMessage: string;

	ngOnInit() { this.getWeather(); this.getWeahterP(); }

	getWeather() {
		this.weatherService.getWeather()
    		.subscribe(
         		weather => {
         			this.weather = weather;
         			console.log(weather);
         			console.log(this.weather);
         		},
           		error =>  this.errorMessage = <any>error);
  	}

  	getWeahterP() {
  		this.weatherService.getWeatherP()
  		.then(weather => {
  			this.weatherp = weather;
  			console.log(this.weatherp);
  		});
  	}

	test() {
		return 'test';
	}
}
