import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftShowCaseListComponent } from './gift-show-case-list.component';

describe('GiftShowCaseListComponent', () => {
  let component: GiftShowCaseListComponent;
  let fixture: ComponentFixture<GiftShowCaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftShowCaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftShowCaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
