import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserveicesService {
  arrDesig: string = "https://dfd4611f.ngrok.io/api/Settings/GetDesignations";

  constructor(private _http: HttpClient) { }

  getDesignations() {
    return this._http.get(this.arrDesig);
}
// public addDesignation(f) {
//   console.log(f);
//   console.log(JSON.stringify(f));
//   let body = JSON.stringify(f);
//    let head = new HttpHeaders().set("Content-Type", "application/json");
//   return this.http.post(this.SERVER_URL_INSERT_UPDATE_DESG, body,{headers:head});

// }


// public editDesignation(item: any): Promise<any> {
//   console.log(item);
//   return this.CommonHttpService.globalPostService(this.SERVER_URL_INSERT_UPDATE_DESG, item).then(data => {
//     return data;
//   });
// }

// public deleteDesignation(designationID) {
//   let head = new HttpHeaders().set("Content-Type", "application/json");
//   console.log('how it is getting ID?:' + designationID);
//   return this.http.post(this.SERVER_URL_DESG_DEL + designationID, { headers: head });
// }

addDesignation(item) {
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.post(this.arrDesig, body, { headers: head });
}
editDesignation(item,organizationId) {
  let body = JSON.stringify(item);
  let head = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.put(this.arrDesig+organizationId, body, { headers: head });
}
deleteDesignation(organizationId) {
  let head = new HttpHeaders().set("Content-Type", "application/json");
  return this._http.delete(this.arrDesig + organizationId, { headers: head });
}
}
