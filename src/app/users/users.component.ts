import { Component, OnInit } from '@angular/core';
import {  UserServiceService} from "../user-service.service";
import {User} from '../user';
import { Repos } from '../repos';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  user:User;
  repo:Repos;
  constructor(public myService: UserServiceService ,private repoService: UserServiceService) {

  }
  searchs(searchName) {
    this.myService.searchUSer(searchName).subscribe(res => {
      this.user = res as User;
      console.log('data', res);
      this.myService.getReopos(searchName).subscribe(repos => {
        console.log('repos', repos);
        this.repo = repos as Repos;
      })
    }, error => {
      console.log(error);

    });

  }

  ngOnInit(){
    // this.searchs("wangechimk");
  }
}