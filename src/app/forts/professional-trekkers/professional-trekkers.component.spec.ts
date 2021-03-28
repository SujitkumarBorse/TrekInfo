import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalTrekkersComponent } from './professional-trekkers.component';

describe('ProfessionalTrekkersComponent', () => {
  let component: ProfessionalTrekkersComponent;
  let fixture: ComponentFixture<ProfessionalTrekkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalTrekkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalTrekkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
