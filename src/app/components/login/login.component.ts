import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  })

  get f() {
    return this.form.controls;
  }
  fontcolors = ['color:#800080', 'color:#FBBC04', 'color:#f28b82', 'color:#fbbc04', 'color:#fff475', 'color:#ccff90', 'color:#a7ffeb', 'color:#cbf0f8', 'color:#aecbfa', 'color:#fdcfe8', 'color:#e6c9a8']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o', 'N', 'o', 't', 'e', 's']
  submit() {
    // console.log(this.form); 
    if (this.form.valid) {
      let data = {
        "email": this.form.controls.userName.value,
        "service": "advance",
        "password": this.form.controls.password.value
      }

      this.service.login(data).subscribe((data: any) => {
        console.log("login success",data);

        localStorage.setItem("firstName", data["firstName"]);
        localStorage.setItem("lastName", data["lastName"]);
        localStorage.setItem("email", data["email"]);
        localStorage.setItem("token", data["id"]);
        this.router.navigate(['/dashboard']);
      
      }, (error) => {
        console.log("error in login page",error);
      });
    }


  }

  ngOnInit(): void {
  }

}