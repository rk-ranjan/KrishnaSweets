import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListCake } from 'src/app/module/cakes/models/list-cake';
import { SweetsService } from '../../services/sweets.service';

@Component({
  selector: 'app-list-sweets',
  templateUrl: './list-sweets.component.html',
  styleUrls: ['./list-sweets.component.scss']
})
export class ListSweetsComponent implements OnInit {

  public sweetList: ListCake[] = [] ;
  public filterSweetList: ListCake[] = [];
  public loading: boolean = true;
  public filterBy: string;
  constructor(
    private activatedRout: ActivatedRoute,
    private sweetsService: SweetsService
  ) {
    this.activatedRout.queryParams.forEach(params => {
      this.filterBy = params['type'];
      console.log(this.filterBy);
      this.filterSweets();
  });
   }
  ngOnInit() {
    this.initSweetsData();
  }
  public initSweetsData = () => {
    this.sweetsService.getAllSweets().subscribe(
      (response: ListCake[]) => {
        this.loading = false;
        this.filterSweetList = response;
        this.filterSweets(); 
    });
  }
  public filterSweets = () => {
    if (this.filterBy !== undefined) {
      console.log(this.filterSweetList);
      this.sweetList = this.filterSweetList.filter((sweet) => sweet.itemName.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase())  > -1);
    } else {
      this.sweetList = this.filterSweetList;
    }  
  }

}
