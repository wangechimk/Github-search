import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from '../classes/posts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url ='http://127.0.0.1:8000/api/post/'
  update_url = 'http://127.0.0.1:8000/api/update/post/'
  constructor(private http:HttpClient) { 

  }

  fetchPostsApi(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url);

  }
  create(posts: any) {
    return this.http.post(this.url, posts);
  }
  update(id: any, posts: Posts) {
    return this.http.put(`${this.update_url}${id}/`, posts);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.update_url}${id}`);
  }
}
