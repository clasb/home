import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weatherservice/weather.service';

@NgModule({
  imports: [
    BrowserModule, HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [ WeatherService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
