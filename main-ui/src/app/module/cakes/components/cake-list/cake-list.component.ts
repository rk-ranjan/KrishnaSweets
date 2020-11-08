import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShowCakesService } from '../../services/show-cakes.service';
import { ListCake } from '../../models/list-cake';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {
  public cakeList: ListCake[] = [] ;
  public filterCakiList: ListCake[] = [];
  public loading: boolean = true;
  public filterBy: string;
  constructor(
    private activatedRout: ActivatedRoute,
    private cakeService: ShowCakesService
  ) {
    this.activatedRout.queryParams.forEach(params => {
      this.filterBy = params['type'];
      console.log(this.filterBy);
      this.filterCakes();
  });
   }
  ngOnInit() {
    this.initCakeData();
  }
  public initCakeData = () => {
    this.cakeService.getAllCakes().subscribe(
      (response: ListCake[]) => {
        this.loading = false;
        this.filterCakiList = response;
        this.filterCakes(); 
    });
  }
  public filterCakes = () => {
    if (this.filterBy !== undefined) {
      this.cakeList = this.filterCakiList.filter((cake) => cake.flavour.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase())  > -1);
    } else {
      this.cakeList = this.filterCakiList;
    }  
  }
}
