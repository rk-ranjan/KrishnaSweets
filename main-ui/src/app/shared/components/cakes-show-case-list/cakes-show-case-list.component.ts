import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakes-show-case-list',
  templateUrl: './cakes-show-case-list.component.html',
  styleUrls: ['./cakes-show-case-list.component.scss']
})
export class CakesShowCaseListComponent implements OnInit {
  @Input() public cakesList;
  constructor() { }

  ngOnInit() {
  }

}
