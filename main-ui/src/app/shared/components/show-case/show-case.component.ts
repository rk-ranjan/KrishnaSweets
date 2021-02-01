import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-case',
  templateUrl: './show-case.component.html',
  styleUrls: ['./show-case.component.scss']
})
export class ShowCaseComponent implements OnInit {
  @Input() public cake: any;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    console.log(this.cake);
  }

  public createFilterLink = () => {
     if(this.cake.productId === 1) {
         this.router.navigate(['cakes'], { queryParams: {type: this.cake.flavour}});
     }
  }

}
