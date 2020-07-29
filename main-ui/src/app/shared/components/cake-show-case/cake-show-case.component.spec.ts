import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeShowCaseComponent } from './cake-show-case.component';

describe('CakeShowCaseComponent', () => {
  let component: CakeShowCaseComponent;
  let fixture: ComponentFixture<CakeShowCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeShowCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
