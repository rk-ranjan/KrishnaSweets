import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cake-flavors',
  templateUrl: './cake-flavors.component.html',
  styleUrls: ['./cake-flavors.component.scss']
})
export class CakeFlavorsComponent implements OnInit {
  public items: any = [1,2,3,4];
  constructor() { }

  ngOnInit() {
  }

}
