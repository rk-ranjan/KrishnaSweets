import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullCeleberationPackComponent } from './full-celeberation-pack.component';

describe('FullCeleberationPackComponent', () => {
  let component: FullCeleberationPackComponent;
  let fixture: ComponentFixture<FullCeleberationPackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullCeleberationPackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullCeleberationPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
