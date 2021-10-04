import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from 'src/app/services/user-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard  implements CanActivate {

  constructor(private authservice: UserServiceService, private router: Router) {}

  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
    // if ((this.authservice.dashboardIn()){
    //   return true;
    // } else {
    //   this.router.navigate(['/dashboard'])
    //   return false
    // }
  }
  
}
