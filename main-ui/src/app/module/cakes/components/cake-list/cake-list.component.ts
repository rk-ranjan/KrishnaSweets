import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListCake } from '../../models/list-cake';
import { filter } from 'rxjs/operators';
import { CakesService } from 'src/app/module/admin/services/cakes.service';
import { AddCake } from 'src/app/module/admin/models/add-cake';

@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.scss']
})
export class CakeListComponent implements OnInit {
  public cakeList: AddCake[] = [] ;
  public filterCakiList: AddCake[] = [];
  public loading: boolean = true;
  public filterBy: string;
  constructor(
    private activatedRout: ActivatedRoute,
    private cakeService: CakesService
  ) {
    this.activatedRout.queryParams.forEach(params => {
      this.filterBy = params['type'];
      this.filterCakes();
  });
   }
  ngOnInit() {
    this.initCakeData();
  }
  public initCakeData = () => {
    this.cakeService.getAllProduct().subscribe(
      (response: AddCake[]) => {
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
