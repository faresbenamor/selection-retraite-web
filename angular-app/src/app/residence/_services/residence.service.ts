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
	findById( id: any ): Observable<IResidence>{
    return this.http.get<IResidence>(this.url + this.endpoint + '/' + id);
  }

    save(residence: IResidence, fileU: File ): Observable<IResidence>{
    const fd = new FormData();
    if(!!residence.id){

      // @ts-ignore
      fd.append('id', residence.id);
    }

      fd.append('nom',residence.nom + '');
      fd.append('region', residence.region + '');
      fd.append('email', residence.email + '');
      fd.append('file', fileU);

    return this.http.post<IResidence>(this.url + this.endpoint, fd);
  }
	update( residence: IResidence ): Observable<IResidence>{
    return this.http.put<IResidence>(this.url + this.endpoint, residence);
  }
	delete( id: any ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
