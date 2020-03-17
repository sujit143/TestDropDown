import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YourdrsService {

  constructor(private http: HttpClient) { }
  public getyourdrs() {
    return this.http.get('assets/yourdrs.json');
  }
  public getdisplayColumns() {
    return this.http.get('assets/displaycolumns.json');
  }
  public getfilterFields() {
    return this.http.get('assets/filterfields.json');
  }
  public getDragdrop() {
    return this.http.get('assets/dragdrop.json');
  }
  public getDragdrop1() {
    return this.http.get('assets/dragdrop1.json');
  }
  public getProvidertable() {
    return this.http.get('assets/providertable.json');
  }
}
