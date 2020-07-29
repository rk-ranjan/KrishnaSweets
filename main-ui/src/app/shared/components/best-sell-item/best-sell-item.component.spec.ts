import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellItemComponent } from './best-sell-item.component';

describe('BestSellItemComponent', () => {
  let component: BestSellItemComponent;
  let fixture: ComponentFixture<BestSellItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSellItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
