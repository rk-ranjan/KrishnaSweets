import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkModelComponent } from './rk-model.component';

describe('RkModelComponent', () => {
  let component: RkModelComponent;
  let fixture: ComponentFixture<RkModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
