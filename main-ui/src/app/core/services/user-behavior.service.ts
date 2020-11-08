import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserBehaviorService {

  // private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject(new User());
  private dataSource = new BehaviorSubject<any>(new User());
  data = this.dataSource.asObservable();
  // private currentUser: User = null;

  constructor() {
    // this.currentUserSubject.subscribe(_ => this.currentUser = null);
  }

  updatedDataSelection(data: User){
    this.dataSource.next(data);
  }
  // public setCurrentUser(user: User) {
  //   this.currentUserSubject.next(user);
  // }

  // public getItems(): Observable<any> {
  //   return this.currentUserSubject;
  // }
}
