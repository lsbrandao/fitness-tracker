import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  isLoadingSub: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private uiService: UIService
    ) { }

  ngOnInit() {
    this.isLoadingSub = this.uiService.loadingStatusChanged.subscribe(isLoadingStatus => {
      this.isLoading = isLoadingStatus;
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
   this.authService.login({
     email: this.loginForm.value.email,
     password: this.loginForm.value.password
   });
  }

  ngOnDestroy() {
    this.isLoadingSub.unsubscribe();
  }
}
