import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudentstepperComponent } from './addstudentstepper.component';

describe('AddstudentstepperComponent', () => {
  let component: AddstudentstepperComponent;
  let fixture: ComponentFixture<AddstudentstepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentstepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
