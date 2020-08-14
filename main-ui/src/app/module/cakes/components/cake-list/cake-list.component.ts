import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowCakesService } from '../../services/show-cakes.service';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {
  public cakeList: any[] = [] ;
  constructor(
    private route: ActivatedRoute,
    private cakeService: ShowCakesService
  ) { }
  public filterBy: string;
  ngOnInit() {
    this.filterBy = this.route.snapshot.queryParamMap.get('name');
    this.cakeService.getAllCakes().subscribe(
      (response: any) => {
        this.cakeList = response;       
      }
    )

  }

}
