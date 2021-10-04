import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService: HttpServiceService) { }

  url = environment.baseUrl

  registration = (data: any) => {
    return this.httpService.post(`${this.url}user/userSignUp`, data)
  }

  login = (data: any) => {
    return this.httpService.post(`${this.url}user/login`, data)
  }

  email = (data: any) => {
    return this.httpService.post(`${this.url}user/reset`, data);
  }

  password = (data: any, token: any) => {
    return this.httpService.post(`${this.url}user/reset-password`, data, true, token)
  }
  
  loggedIn () {
    return !!localStorage.getItem('token')
  } 
 
  logout() {
    localStorage.removeItem('token');
  }

}
