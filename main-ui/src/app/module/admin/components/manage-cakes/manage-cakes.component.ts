import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { AddCake } from '../../models/add-cake';
import { CakesService } from '../../services/cakes.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-manage-cakes',
  templateUrl: './manage-cakes.component.html',
  styleUrls: ['./manage-cakes.component.scss'],
  providers: [MessageService]
})
export class ManageCakesComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
  
  public ngOnDestroy() {
    // unsubscribe to avoid memory leakage.
  }
}
