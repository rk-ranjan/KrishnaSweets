import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSweetsComponent } from './list-sweets.component';

describe('ListSweetsComponent', () => {
  let component: ListSweetsComponent;
  let fixture: ComponentFixture<ListSweetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSweetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
