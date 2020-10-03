import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowCakesService } from '../../services/show-cakes.service';
import { CakeDetails } from '../../services/cake-details';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.scss']
})
export class CakeDetailsComponent implements OnInit {
  public cakesId: string;
  public cakeDetail: CakeDetails;
  constructor(
    private route: ActivatedRoute,
    private cakeService: ShowCakesService
  ) { }

  ngOnInit() {
    this.cakesId = this.route.snapshot.queryParams["cakeId"];
    this.cakeService.getCakesById(this.cakesId).subscribe(
      (res:CakeDetails) => {
         this.cakeDetail = res;                
    });
  }

}
