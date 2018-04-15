import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';


@Injectable()
export class AuthenticationService {

    userIsAuthenticated = new BehaviorSubject<boolean>(false);

    constructor(private router: Router){
        if(localStorage.getItem('currentUser'))
            this.userIsAuthenticated.next(true);
    }

    login(loginData) {
        localStorage.setItem('currentUser', 'user')

        this.router.navigateByUrl('/admin/users');
        
        this.userIsAuthenticated.next(true);
    }

    logout() {
        localStorage.clear();

        this.router.navigateByUrl('/login');

        this.userIsAuthenticated.next(false);
    }

}