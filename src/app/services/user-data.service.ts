import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}
  url = 'https://dummyjson.com/quotes';
  Users() {
    return this.http.get(this.url);
  }
  saveUser(data: any) {
    return this.http.post(this.url, data);
  }
}
