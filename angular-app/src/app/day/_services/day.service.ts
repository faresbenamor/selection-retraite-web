import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IDay} from '../_models/day.model';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DayService {

  private url = environment.api_url;
  private endpoint = 'days';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<IDay[]>{
    return this.http.get<IDay[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<IDay>{
    return this.http.get<IDay>(this.url + this.endpoint + '/' + id);
  }
	save( day ): Observable<IDay>{
    return this.http.post<IDay>(this.url + this.endpoint, day);
  }
	update( day ): Observable<IDay>{
    return this.http.put<IDay>(this.url + this.endpoint, day);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
