import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoAndDonotComponent } from './do-and-donot.component';

describe('DoAndDonotComponent', () => {
  let component: DoAndDonotComponent;
  let fixture: ComponentFixture<DoAndDonotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoAndDonotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoAndDonotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
