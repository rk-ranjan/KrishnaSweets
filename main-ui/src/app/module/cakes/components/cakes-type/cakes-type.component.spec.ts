import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesTypeComponent } from './cakes-type.component';

describe('CakesTypeComponent', () => {
  let component: CakesTypeComponent;
  let fixture: ComponentFixture<CakesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
