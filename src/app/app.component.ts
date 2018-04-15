import { Component } from '@angular/core';
import { AuthenticationService } from './login/services/authentication';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private authenticationService: AuthenticationService){   
  }

  userIsExist: boolean;

  Log() {
    console.log(this.userIsExist, typeof(this.userIsExist));
  }

  ngOnInit() {
    this.authenticationService.userIsAuthenticated.subscribe((value: boolean) => this.userIsExist = value);
  }

}

