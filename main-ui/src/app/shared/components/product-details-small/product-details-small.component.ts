import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-small',
  templateUrl: './product-details-small.component.html',
  styleUrls: ['./product-details-small.component.scss']
})
export class ProductDetailsSmallComponent implements OnInit {
  public slides = [
    { src: "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/27536_butter-scotch-cake.webp" },
    { src: "https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_300/35932_red-velvet-birthday-cake.webp" },
  ];
  public currentSlide = 0;
  constructor() { }

  ngOnInit() {
  }
}
