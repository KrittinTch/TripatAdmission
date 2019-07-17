import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddatastudentComponent } from './adddatastudent.component';

describe('AdddatastudentComponent', () => {
  let component: AdddatastudentComponent;
  let fixture: ComponentFixture<AdddatastudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddatastudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddatastudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
