import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAlbum} from '../_models/album.model';
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private url = environment.api_url;
  private endpoint = 'albums';
  constructor(private http: HttpClient) { }

	findAll(  ): Observable<IAlbum[]>{
    return this.http.get<IAlbum[]>(this.url + this.endpoint);
  }
	findById( id ): Observable<IAlbum>{
    return this.http.get<IAlbum>(this.url + this.endpoint + '/' + id);
  }
	save( album ): Observable<IAlbum>{
    return this.http.post<IAlbum>(this.url + this.endpoint, album);
  }
	update( album ): Observable<IAlbum>{
    return this.http.put<IAlbum>(this.url + this.endpoint, album);
  }
	delete( id ): Observable<any>{
    return this.http.delete<any>(this.url + this.endpoint + '/' + id);
  }
}
