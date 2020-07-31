import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  public toggleSecondryBar: boolean = false;
  @ViewChild('searchBox', { static: false}) public searchBoxRef: ElementRef;
  public search: boolean = false;
  value = 'Clear me';
  constructor() { }
  ngOnInit() {
  }
}
