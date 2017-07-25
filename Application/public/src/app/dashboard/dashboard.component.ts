import { Component, OnInit } from '@angular/core';
import { UserService } from "../user.service";
import { MessageService } from "../message.service";
import { User } from "../user";
import { Message } from "../message";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messages: Message[] = [];
  user: User;
  message: Message = new Message();
  currentId;
  constructor(public _user: UserService, private _route: ActivatedRoute, private _message: MessageService) {
    this.user = _user.currentUser;
    this._route.params.subscribe((param)=> {
    console.log("TaskDetailsComponent loaded and url id is given", param.id);
    this.currentId = param.id;
  })
  }

  ngOnInit() {
    if(!this.user){
      this._user.find(this.currentId).then((data)=>{
        console.log(data, "goozoo");
        this.user = data.user;
      })
    }
    this._message.find()
      .then((data)=> {
        console.log("This is callback in component dashboard", data);
        this.messages = data.messages;
      })
      .catch((err) =>{
        console.log("error retrieving message", err);
      })
  }

  createMessage(){
    console.log("creating message", this.message);
    this.message.userId = this.currentId;
    this._message.create(this.message)
      .then((data)=>{
        console.log("this is callback in component dashboard", data);
        this.messages.push(data.message);
        this.message = new Message();
      })
    }
}
