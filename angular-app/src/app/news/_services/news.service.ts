import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {INews} from '../_models/news.model';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private url = environment.api_url;
  private endpoint = 'newss';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<INews[]>{
    return this.http.get<INews[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<INews>{
    return this.http.get<INews>(this.url + this.endpoint + '/' + id);
  }
	save( news ): Observable<INews>{
    return this.http.post<INews>(this.url + this.endpoint, news);
  }
	update( news ): Observable<INews>{
    return this.http.put<INews>(this.url + this.endpoint, news);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
