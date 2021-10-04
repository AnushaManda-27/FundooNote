import { Component } from '@angular/core';
import {HttpServiceService} from './services/http-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundoonotes';
  constructor(private posts: HttpServiceService) {}
  ngOnInit(){
    
  }
}
