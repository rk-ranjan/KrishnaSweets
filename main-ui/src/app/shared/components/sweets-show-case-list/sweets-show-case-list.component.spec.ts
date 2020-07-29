import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsShowCaseListComponent } from './sweets-show-case-list.component';

describe('SweetsShowCaseListComponent', () => {
  let component: SweetsShowCaseListComponent;
  let fixture: ComponentFixture<SweetsShowCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetsShowCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsShowCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
