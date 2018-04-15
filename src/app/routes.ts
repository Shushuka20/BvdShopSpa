import { Routes } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';

export const routes:Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AuthGuard]},
    { path: 'login', loadChildren: './login/login.module#LoginModule'}
]