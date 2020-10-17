import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sweets-show-case-list',
  templateUrl: './sweets-show-case-list.component.html',
  styleUrls: ['./sweets-show-case-list.component.scss']
})
export class SweetsShowCaseListComponent implements OnInit {
  @Input() public sweetsList;
  constructor() { }

  ngOnInit() {
  }

}
