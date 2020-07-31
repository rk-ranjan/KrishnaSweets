import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeCategoriesComponent } from './cake-categories.component';

describe('CakeCategoriesComponent', () => {
  let component: CakeCategoriesComponent;
  let fixture: ComponentFixture<CakeCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
