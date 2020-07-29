import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesShowCaseListComponent } from './cakes-show-case-list.component';

describe('CakesShowCaseListComponent', () => {
  let component: CakesShowCaseListComponent;
  let fixture: ComponentFixture<CakesShowCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesShowCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesShowCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
