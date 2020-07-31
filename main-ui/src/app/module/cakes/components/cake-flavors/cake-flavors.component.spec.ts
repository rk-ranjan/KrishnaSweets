import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeFlavorsComponent } from './cake-flavors.component';

describe('CakeFlavorsComponent', () => {
  let component: CakeFlavorsComponent;
  let fixture: ComponentFixture<CakeFlavorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeFlavorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeFlavorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
