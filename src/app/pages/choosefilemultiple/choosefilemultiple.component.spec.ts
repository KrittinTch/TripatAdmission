import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosefilemultipleComponent } from './choosefilemultiple.component';

describe('ChoosefilemultipleComponent', () => {
  let component: ChoosefilemultipleComponent;
  let fixture: ComponentFixture<ChoosefilemultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosefilemultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosefilemultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
