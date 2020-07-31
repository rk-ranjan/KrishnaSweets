import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMobileSearchComponent } from './global-mobile-search.component';

describe('GlobalMobileSearchComponent', () => {
  let component: GlobalMobileSearchComponent;
  let fixture: ComponentFixture<GlobalMobileSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalMobileSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalMobileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
