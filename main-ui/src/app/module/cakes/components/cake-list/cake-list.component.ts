import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {
  public arr: any[] = [1,2,3,4,5,6];
  constructor(
    private route: ActivatedRoute
  ) { }
  public filterBy: string;
  ngOnInit() {
    this.filterBy = this.route.snapshot.queryParamMap.get('name');
  }

}
