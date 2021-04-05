import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Repos } from "./repos";
import { User } from "./user";
import {  environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  foundUser: User;
  allRepos:Repos;

  constructor(private http: HttpClient) {

  }

  // HttpInterceptor

  searchUSer(searchName: string) {
    interface Response {
      login: string;
      url:string;
      html_url:string;
      location:string
      public_repos:number;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
    };

    let url = `${environment.baseURI}users/${searchName}`
    return this.http.get(url, {
      headers: {
        Authorization: `token ${environment.apiKey}`
      }
    });
  }
  getReopos(searchName){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      forks:number;
      watchers_count:number;
      language:string;
      created_at:Date;
    }
    let url = `${environment.baseURI}users/${searchName}/repos`
    return this.http.get(url, {
      headers: {
        Authorization: `token ${environment.apiKey}`
      }
    });
}
}