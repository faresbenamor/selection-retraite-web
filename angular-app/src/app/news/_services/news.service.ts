import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {INews, News} from '../_models/news.model';
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
	findById( id: any ): Observable<INews>{
    return this.http.get<INews>(this.url + this.endpoint + '/' + id);
  }

  save( news: News, file: File, residenceId: any ): Observable<INews>{

    const fd = new FormData();
    if (!!news.id){
      // @ts-ignore
      fd.append('id', residence.id);
    }

    fd.append('titre', news.titre + '');
    fd.append('soustitre', news.sousTitre + '');
    fd.append('description', news.description + '');
    fd.append('image', news.image + '');
    if (!!file){
      fd.append('file', file);
    }
    return this.http.post<INews>(this.url + this.endpoint, news, {
      params: {
        residenceId
      }
    });
  }
  update( news: News ): Observable<INews>{
    return this.http.put<INews>(this.url + this.endpoint, news);
  }
  delete( id: any): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
