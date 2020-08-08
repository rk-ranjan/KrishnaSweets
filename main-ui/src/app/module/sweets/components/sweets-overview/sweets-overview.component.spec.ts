import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetsOverviewComponent } from './sweets-overview.component';

describe('SweetsOverviewComponent', () => {
  let component: SweetsOverviewComponent;
  let fixture: ComponentFixture<SweetsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SweetsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SweetsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
