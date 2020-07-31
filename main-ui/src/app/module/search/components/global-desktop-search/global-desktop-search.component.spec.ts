import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalDesktopSearchComponent } from './global-desktop-search.component';

describe('GlobalDesktopSearchComponent', () => {
  let component: GlobalDesktopSearchComponent;
  let fixture: ComponentFixture<GlobalDesktopSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalDesktopSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalDesktopSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
