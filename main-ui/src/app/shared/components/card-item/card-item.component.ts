import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() public cardData: any;
  public card: any = {
    name: "Butter Scotch Cake",
    cost: 123.00,
    flavour: "Butter Scotch",
    eggless: true
  }
  constructor() { }

  ngOnInit() {
    this.cardData = this.card;
  }

}
