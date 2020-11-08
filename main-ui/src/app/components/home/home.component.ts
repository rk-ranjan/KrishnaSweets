import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { User } from 'src/app/core/model/user';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { UserBehaviorService } from 'src/app/core/services/user-behavior.service';
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
  public user: User = new User();
  constructor(
    private cakeService: ShowCakesService,
    private localStorageService: LocalStorageService,
    private userBehaviorService: UserBehaviorService
  ) { }

  ngOnInit() {
    this.cakeService.getHomeProduct().subscribe(
      (res: any[]) => {
         this.cakesList = res.filter((element) => element.productId === 1);
         this.sweetsList = res.filter((element) => element.productId === 2);
      });
  }

}
