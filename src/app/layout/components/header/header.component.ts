import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../login/services/authentication';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  LogOut() {
    this.authenticationService.logout();
  }

}
