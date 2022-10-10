import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly apiUrl: string = 'http://localhost:8080/api/users'

  constructor(private http: HttpClient) { }

  //fetch users
  getUsers(size: number = 10): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/?size=${size}`);
  } 

  //fetch one user by username
  getUser(username: string = '', page: number = 0, size: number = 10): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/?username=${username}&page=${page}&size=${size}`);
  } 

 
}
