import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  loginForm: FormGroup; 

  ngOnInit() {
    this.initForm();
  }

  Login() {
    if(this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.value)
    }
  }

  initForm() {
    this.loginForm = this.fb.group({
      name: [],
      password: []
    })
  }

}
