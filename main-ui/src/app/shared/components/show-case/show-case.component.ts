import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {
  @Input() public cake: any;
  constructor() { }

  ngOnInit() {
  }

}
