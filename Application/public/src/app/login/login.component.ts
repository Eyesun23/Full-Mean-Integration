import { Component, OnInit } from '@angular/core';
import { User } from "../user";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();

  constructor(public _user: UserService, public _router: Router) { }

  ngOnInit() {

  }
  register() {
    console.log(this.user, "register method login component");
    this._user.registerUser(this.user)
     .then((data)=> {
      console.log(data, "callback from login");
      this._router.navigate(['dashboard', data.user._id]);

    })
    .catch((err)=> {
      console.log(err, "status was an error");
    })
  }
}
