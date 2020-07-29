import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondryHeaderComponent } from './secondry-header.component';

describe('SecondryHeaderComponent', () => {
  let component: SecondryHeaderComponent;
  let fixture: ComponentFixture<SecondryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
