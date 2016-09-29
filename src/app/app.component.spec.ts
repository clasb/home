import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [AppComponent]});
  });

  it ('should create AppComponent', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it ('should return test (using TestBed)', () => {
    let fixture = TestBed.createComponent(AppComponent);
  	expect(fixture.componentInstance.test()).toBe('test');
  });

  it ('should return test (using new)', () => {
  	let component = new AppComponent();
  	expect(component.test()).toBe('test');
  });

});
