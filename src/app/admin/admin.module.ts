import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UsersComponent } from './containers/users/users.component';
import { routes } from './routes';
import { UserService } from './services/user.service';
import { UserRepository } from './repositories/user.repository';
import { LayoutModule } from '../layout/layout.module';
import { RetailsComponent } from './containers/retails/retails.component';
import { ProductsComponent } from './containers/products/products.component';
import { ProvidersComponent } from './containers/providers/providers.component';
import { PartnersComponent } from './containers/partners/partners.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    LayoutModule,
    CoreModule
  ],
  declarations: [UsersComponent, RetailsComponent, ProductsComponent, ProvidersComponent, PartnersComponent],
  providers: [UserService, UserRepository]
})
export class AdminModule { }
