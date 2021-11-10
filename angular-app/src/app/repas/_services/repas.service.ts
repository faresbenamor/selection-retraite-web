import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {IRepas} from "../_models/repas.model";

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  private url = environment.api_url;
  private endpoint = 'repass';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<IRepas[]>{
    return this.http.get<IRepas[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<IRepas>{
    return this.http.get<IRepas>(this.url + this.endpoint + '/' + id);
  }
	save( repas ): Observable<IRepas>{
    return this.http.post<IRepas>(this.url + this.endpoint, repas);
  }
	update( repas ): Observable<IRepas>{
    return this.http.put<IRepas>(this.url + this.endpoint, repas);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
