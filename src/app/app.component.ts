import { Component, OnInit } from '@angular/core';
import '../../public/css/styles.css';
import { Weather, Forecast, Parameter } from './weatherService/weather';
import { WeatherService } from './weatherservice/weather.service';
import { Http, Response } from '@angular/http';
import * as _ from 'lodash';

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
                    this.weatherToForecast(weather);
                    console.log('observable ', this.weather);
         		    }, error =>  this.errorMessage = <any>error );
    }

    weatherToForecast(weather: Weather): Forecast {
        let forecast = new Forecast();
        let parameters = new Parameter()[19];
        _.each(weather.timeSeries, function(time) {
            parameters.push(time.parameters);
        });
        console.log(parameters);
        return forecast;
    }

  	getWeahterP() {
  		this.weatherService.getWeatherP()
  		.then(weather => {
  			this.weatherp = weather;
        console.log('promise ', this.weatherp);
  		});
  	}

	test() {
		return 'test';
	}
}
