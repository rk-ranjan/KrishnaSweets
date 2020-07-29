import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetShowCaseComponent } from './sweet-show-case.component';

describe('SweetShowCaseComponent', () => {
  let component: SweetShowCaseComponent;
  let fixture: ComponentFixture<SweetShowCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetShowCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
