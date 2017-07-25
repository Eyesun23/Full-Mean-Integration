import { Injectable } from '@angular/core';
import {User} from './user';

import {Http} from '@angular/http';
import "rxjs/Rx";


@Injectable()
export class UserService {
  currentUser: User = null;
  constructor(public _http: Http) {
  }
  registerUser(user: User) {
    console.log(user, "user registered");
    var kooni = this._http.post("/register", user).map(data=> data.json()).toPromise();
    kooni.then((data) => {
      this.currentUser = data.user;
    })
    return kooni;
  }
  find(userId){
    console.log("this is within user service", userId);
    return this._http.get('/users/${userId}').map(data => data.json()).toPromise();

  }
}
