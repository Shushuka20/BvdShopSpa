import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './layout/layout.module';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { CoreModule } from './core/core.module';
import { DataTableComponent } from './core/components/data-table/data-table.component';
import { DataSearchComponent } from './core/components/data-search/data-search.component';
import { AddEditComponent } from './core/components/add-edit/add-edit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from './login/services/authentication';
import { AuthGuard } from './_guards/auth.guard';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    LayoutModule,
    CoreModule
  ],
  exports: [BrowserAnimationsModule],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
