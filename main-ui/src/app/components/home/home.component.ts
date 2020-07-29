import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public slides = [
    { src: "https://image.shutterstock.com/image-vector/prevention-covid19-infographic-poster-vector-600w-1666431010.jpg" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROPUNrtn3JFRC1c9jmfRCAljbm4BDG3yw6JA&usqp=CAU" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
