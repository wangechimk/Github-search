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
    this.repoService.getReopos(searchName).subscribe(res => {
      console.log('repos', res);

    });
  }

  ngOnInit() {
    this.repoSearch('wangechimk');
  }

}