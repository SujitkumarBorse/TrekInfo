import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeTrekkersComponent } from './first-time-trekkers.component';

describe('FirstTimeTrekkersComponent', () => {
  let component: FirstTimeTrekkersComponent;
  let fixture: ComponentFixture<FirstTimeTrekkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTimeTrekkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTimeTrekkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
