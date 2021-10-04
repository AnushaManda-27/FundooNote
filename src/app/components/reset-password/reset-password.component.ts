import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  registerForm: FormGroup;
  submitted  = false;
  constructor(private formBuilder: FormBuilder) {
    this.registerForm  = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      password_confirm: ['', [Validators.required, Validators.minLength(6)]],
    }); }

  ngOnInit() {
    

  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted  = true;
    console.log(this.registerForm.value)

    if(this.registerForm.invalid) {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
  colors =['color:#3566b8','color:#34a853', 'color:#ea4335','color:#3566b8','color:#fabb05','color: #34a853','color:#ea4335','color:#34a853','color:#fabb05','color:#3566b8','color:#e6c9a8']
  fontText =['F','u','n','d','o','o','n','o','t','e','s']
 
  
}

