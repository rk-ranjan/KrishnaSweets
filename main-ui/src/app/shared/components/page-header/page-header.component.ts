import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translateX(0)'
      })),
      state('out', style({
        transform: 'translateX(-100%)'
      })),
      transition('in => out', animate('200ms ease-in-out')),
      transition('out => in', animate('200ms ease-in-out')),     
    ]),
  ]
})
export class PageHeaderComponent implements OnInit {
  public toggleSecondryBar: boolean = false;
  @ViewChild('searchBox', { static: false}) public searchBoxRef: ElementRef;
  public search: boolean = false;
  value = 'Clear me';
  display: boolean = false;
  constructor() { }
  ngOnInit() {
  }
  menuState:string = 'out';
 
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
