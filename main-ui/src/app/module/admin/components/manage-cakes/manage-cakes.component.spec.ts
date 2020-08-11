import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCakesComponent } from './manage-cakes.component';

describe('ManageCakesComponent', () => {
  let component: ManageCakesComponent;
  let fixture: ComponentFixture<ManageCakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
