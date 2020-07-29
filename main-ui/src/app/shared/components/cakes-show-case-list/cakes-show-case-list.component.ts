import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cakes-show-case-list',
  templateUrl: './cakes-show-case-list.component.html',
  styleUrls: ['./cakes-show-case-list.component.scss']
})
export class CakesShowCaseListComponent implements OnInit {
  items: any[] = [1,2,3,4,5,6,7,8];
  constructor() { }

  ngOnInit() {
  }

}
