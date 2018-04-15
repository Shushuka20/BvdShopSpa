import { Routes } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';
import { RetailsComponent } from './containers/retails/retails.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProvidersComponent } from './containers/providers/providers.component';
import { PartnersComponent } from './containers/partners/partners.component';
import { AddEditComponent } from '../core/components/add-edit/add-edit.component';

export const routes: Routes = [
    { path: '', redirectTo: 'users', pathMatch: 'full'  },
    { 
        path: 'users', component: UsersComponent, children: [
            { path: 'add', component: AddEditComponent }
        ]
    },
    { path: 'retails', component: RetailsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'providers', component: ProvidersComponent },
    { path: 'partners', component: PartnersComponent },
]