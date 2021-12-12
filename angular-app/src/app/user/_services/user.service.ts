import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRole, IUser, Role, User} from "../_models/user.model";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.api_url;

  constructor(private http: HttpClient) { }

  // afficheeeer
  getUsers(): Observable <IUser[]> {
    return this.http.get<User[]>(this.url + 'users');
  }

  getRoles(): Observable <IRole[]> {
    return this.http.get<Role[]>(this.url + 'roles');
  }

 // ajouuut
  create(user: User): Observable <IUser[]> {
    return this.http.post<User[]>(this.url + 'users', user);
  }

 // modifieeer
  update(user: User): Observable <IUser[]> {
    return this.http.put<User[]>(this.url + 'users', user);
  }

 // supprimeeer
  delete(userId: number): Observable <IUser> {
    return this.http.delete<User>(this.url + 'users/'+ userId);
  }

  login(user: IUser) : Observable <any> {
    return this.http.post<User>(this.url + 'token', user);
  }

}
