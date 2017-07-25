import { Injectable } from '@angular/core';
import { Message } from './message';
import {Http} from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class MessageService {

  constructor(public _http: Http) { }
  create(message: Message) {
    console.log(message, "this is create method within message service");
    return this._http.post("/messages", message).map(data => data.json()).toPromise();
  }
  find(){
    console.log("THIS IS GET METHOD")
    return this._http.get('/messages').map(data=> data.json()).toPromise();
  }
}
