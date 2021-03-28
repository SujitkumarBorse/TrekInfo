import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FortsComponent } from './forts.component';

describe('FortsComponent', () => {
  let component: FortsComponent;
  let fixture: ComponentFixture<FortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
