import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddCake } from 'src/app/module/admin/models/add-cake';
import { CakesService } from 'src/app/module/admin/services/cakes.service';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.scss']
})
export class CakeDetailsComponent implements OnInit {
  public cakesId: string;
  public cakeDetail: AddCake;
  constructor(
    private route: ActivatedRoute,
    private cakeService: CakesService
  ) { }

  ngOnInit() {
    this.cakesId = this.route.snapshot.queryParams["cakeId"];
    this.cakeService.getProductDetails(this.cakesId).subscribe(
      (res:AddCake) => {
         this.cakeDetail = res;                
    });
  }

}
