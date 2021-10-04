import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../../services/user-service.service';
// import { MustMatch } from './_helpers/must-match.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
 export class RegistrationComponent implements OnInit  {
  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private service: UserServiceService, private router: Router) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]

    }); }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    let data = {
      "firstName": this.registerForm.controls.firstName.value,
      "lastName": this.registerForm.controls.lastName.value,
      "email": this.registerForm.controls.email.value,
      "service": "advance",
      "password": this.registerForm.controls.password.value
      //"confirmPasswor" : this.registerForm.controls.confirmPassword.value
    }
    console.log(data)
    this.service.registration(data).subscribe((data) => {
      console.log("registration successfull",data);
    }, (error) => {
      console.log("registration unsuccefull", error);
    })
  }
  ngOnInit(): void {
  }
  colors = ['color:#3566b8','color:#34a853', 'color:#ea4335','color:#3566b8','color:#fabb05','color: #34a853','color:#ea4335','color:#34a853','color:#fabb05','color:#3566b8','color:#e6c9a8']
  fontText = ['F','u','n','d','o','o','n','o','t','e','s']
}