import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IActivity} from '../_models/activity.model';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private url = environment.api_url;
  private endpoint = 'activitys';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<IActivity[]>{
    return this.http.get<IActivity[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<IActivity>{
    return this.http.get<IActivity>(this.url + this.endpoint + '/' + id);
  }
	save( activity ): Observable<IActivity>{
    return this.http.post<IActivity>(this.url + this.endpoint, activity);
  }
	update( activity ): Observable<IActivity>{
    return this.http.put<IActivity>(this.url + this.endpoint, activity);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
