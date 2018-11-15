import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
   this.authService.login({
     email: this.loginForm.value.email,
     password: this.loginForm.value.password
   });
  }
}
