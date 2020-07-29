import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-sell-list',
  templateUrl: './best-sell-list.component.html',
  styleUrls: ['./best-sell-list.component.scss']
})
export class BestSellListComponent implements OnInit {
  items: any[] = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

}
