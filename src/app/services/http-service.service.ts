import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpServiceService {
  token : any;
  BaseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }

  post(url: string, data: any, isHeaderRequired: any = false, token: any = null) {
    console.log(data, url);
    let tokenOption = {headers: new HttpHeaders({"Authorization": token})};
    return this.httpClient.post(url, data, isHeaderRequired && tokenOption)
  }
  
  get(url: string, isHeaderRequired: any = false, token: any = null) {  
    console.log("data Get");
    let tokenOption = {headers: new HttpHeaders({"Authorization": token})};
    return this.httpClient.get(url, isHeaderRequired && tokenOption)
  }
  UpdateNote(id: any) {
    console.log(id);
    const data = {
      noteId:id.noteId,
      title: id.title,
      description: id.description
    }
    this.token = localStorage.getItem('token');
    let options = {
      headers: new HttpHeaders({
        'Authorization': this.token,
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post(this.BaseUrl + '/notes/updateNotes', data, options);
  }
}