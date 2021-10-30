import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAlertes} from '../_models/alertes.model';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlertesService {

  private url = environment.api_url;
  private endpoint = 'alertess';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<IAlertes[]>{
    return this.http.get<IAlertes[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<IAlertes>{
    return this.http.get<IAlertes>(this.url + this.endpoint + '/' + id);
  }
	save( alertes ): Observable<IAlertes>{
    return this.http.post<IAlertes>(this.url + this.endpoint, alertes);
  }
	update( alertes ): Observable<IAlertes>{
    return this.http.put<IAlertes>(this.url + this.endpoint, alertes);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
