import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdetailComponent } from './checkdetail.component';

describe('CheckdetailComponent', () => {
  let component: CheckdetailComponent;
  let fixture: ComponentFixture<CheckdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
