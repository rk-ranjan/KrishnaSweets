import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeCarouselComponent } from './prime-carousel.component';

describe('PrimeCarouselComponent', () => {
  let component: PrimeCarouselComponent;
  let fixture: ComponentFixture<PrimeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
