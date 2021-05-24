import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductTypeComponent } from './add-new-product-type.component';

describe('AddNewProductTypeComponent', () => {
  let component: AddNewProductTypeComponent;
  let fixture: ComponentFixture<AddNewProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
