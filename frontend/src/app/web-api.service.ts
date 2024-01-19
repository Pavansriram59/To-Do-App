import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  readonly ROOT_URL: any;
  constructor(private http: HttpClient) {
    this.ROOT_URL = "http://localhost:3000";
  }

  public get(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  public post(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
  public patch(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload);
  }
  public delete(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
