import { Injectable } from '@angular/core';
import {User} from '';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  foundUser: User[] = [];

  constructor(private http: HttpClient) { 
  }
  searchUSer(searchName: string) {
    // tslint:disable-next-line:class-name
    interface data {
      login: string;
    }

}
}
