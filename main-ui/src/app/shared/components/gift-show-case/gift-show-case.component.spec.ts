import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftShowCaseComponent } from './gift-show-case.component';

describe('GiftShowCaseComponent', () => {
  let component: GiftShowCaseComponent;
  let fixture: ComponentFixture<GiftShowCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftShowCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftShowCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
