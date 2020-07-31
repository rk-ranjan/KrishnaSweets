import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesFilterComponent } from './cakes-filter.component';

describe('CakesFilterComponent', () => {
  let component: CakesFilterComponent;
  let fixture: ComponentFixture<CakesFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
