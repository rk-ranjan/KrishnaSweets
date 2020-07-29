import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellListComponent } from './best-sell-list.component';

describe('BestSellListComponent', () => {
  let component: BestSellListComponent;
  let fixture: ComponentFixture<BestSellListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSellListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
