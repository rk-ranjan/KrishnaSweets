import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ShowCakesService } from 'src/app/module/cakes/services/show-cakes.service';

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
  public cakesList: any[] = [];
  public sweetsList: any[] = [];
  constructor(
    private cakeService: ShowCakesService
  ) { }

  ngOnInit() {
    this.cakeService.getHomeProduct().subscribe(
      (res: any[]) => {
         this.cakesList = res.filter((element) => element.productId === 1);
         this.sweetsList = res.filter((element) => element.productId === 2);
      });
  }

}
