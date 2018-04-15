import { Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';

export const routes: Routes = [
    { path: '', component: LoginComponent, pathMatch: 'full' }
]