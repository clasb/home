import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
	test() {
		return 'test';
	}
}
