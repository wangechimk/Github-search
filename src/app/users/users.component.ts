import { Component, OnInit } from '@angular/core';
import {  UserServiceService} from "../user-service.service";
import { User } from "./user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user:User[];
  constructor(public myService: UserServiceService) { 

  }
  
  ngOnInit(){
    this.myService.searchUSer("");
  }
  searchs(searchName){
    this.user=this.myService.foundUser;
  }
}
