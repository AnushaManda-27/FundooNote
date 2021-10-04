import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})

export class ForgetPasswordComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  form = new FormGroup({
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
  })

  fontcolors = ['color:#800080', 'color:#FBBC04', 'color:#f28b82', 'color:#fbbc04', 'color:#fff475', 'color:#ccff90', 'color:#a7ffeb', 'color:#cbf0f8', 'color:#aecbfa', 'color:#fdcfe8', 'color:#e6c9a8']
  fonttexts = ['F', 'u', 'n', 'd', 'o', 'o', 'N', 'o', 't', 'e', 's']

  submit() {
    console.log(this.form);
    if (this.form.valid) {
      let data = {
        "email": this.form.controls.userName.value,
      }
      this.service.email(data).subscribe((data) => {
        console.log("link sent to email",data);
      }, (error) => {
        console.log("failed sending link to email", error);
      })
    }
  }
  ngOnInit(): void {
  }

}
