import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  foundUser: [] = [];

  constructor(private http: HttpClient) { 
  }
  searchUSer(searchName: string) {
    // tslint:disable-next-line:class-name
    interface data {
      login: string;
    }

}
}
