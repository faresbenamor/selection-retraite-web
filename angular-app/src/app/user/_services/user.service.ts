import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser, User} from "../_models/user.model";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.api_url;

  constructor(private http: HttpClient) { }

  // afficheeeer
  getUsers(): Observable <IUser[]> {
    return this.http.get<User[]>(this.url + '/api/users');
  }

 // ajouuut
  create(user: User): Observable <IUser[]> {
    return this.http.post<User[]>(this.url + '/api/users', user);
  }

 // modifieeer
  update(user: User): Observable <IUser[]> {
    return this.http.put<User[]>(this.url + '/api/users', user);
  }

 // supprimeeer
  delete(userId: number): Observable <IUser> {
    return this.http.delete<User>(this.url + '/api/users/'+ userId);
  }

  login(user: IUser) : Observable <any> {
    return this.http.post<User>(this.url + '/api/token', user);
  }

}
