import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSidePanelComponent } from './custom-side-panel.component';

describe('CustomSidePanelComponent', () => {
  let component: CustomSidePanelComponent;
  let fixture: ComponentFixture<CustomSidePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomSidePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSidePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
