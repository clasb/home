import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Weather }        from './weather';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class WeatherService {

	constructor (private http: Http) {}

	getWeather (): Observable<Weather> {
		return this.http.get('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/14.662628/lat/63.175433/data.json')
            .map(response => response.json())
            .catch(this.handleError);
	}

	getWeatherP (): Promise<Weather> {
	  	return this.http.get('http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/14.662628/lat/63.175433/data.json')
	   		.toPromise()
	        .then(response => response.json())
	       	.catch(this.handleError);
	}
  
  private handleError (error: any) {
    	let errMsg = (error.message) ? error.message :
    	error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    	console.error(errMsg);
    	return Observable.throw(errMsg);
  }

}