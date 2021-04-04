import { Component, OnInit } from '@angular/core';
import {UserServiceService} from '../user-service.service';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {
   
  repo:Repos;
  constructor( public repoService : UserServiceService) { }

  repoSearch(searchName){
    this.repoService.getReopos(searchName).then(
      (results)=>{
        this.repo =this.repoService.allRepos
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.repoSearch('wangechimk');
  }

}
