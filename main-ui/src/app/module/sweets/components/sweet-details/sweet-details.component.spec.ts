import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetDetailsComponent } from './sweet-details.component';

describe('SweetDetailsComponent', () => {
  let component: SweetDetailsComponent;
  let fixture: ComponentFixture<SweetDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
