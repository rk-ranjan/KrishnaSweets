import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../../../core/services/local-storage.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent implements OnInit {
  public username: string;
  public email: string; 
  constructor(
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
     this.username = this.localStorageService.getItem("userName");
     this.email = this.localStorageService.getItem("email");
  }

}
