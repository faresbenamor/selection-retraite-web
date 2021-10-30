import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResidence} from '../_models/residence.model';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  private url = environment.api_url;
  private endpoint = 'residences';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<IResidence[]>{
    return this.http.get<IResidence[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<IResidence>{
    return this.http.get<IResidence>(this.url + this.endpoint + '/' + id);
  }
	save( residence ): Observable<IResidence>{
    return this.http.post<IResidence>(this.url + this.endpoint, residence);
  }
	update( residence ): Observable<IResidence>{
    return this.http.put<IResidence>(this.url + this.endpoint, residence);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
