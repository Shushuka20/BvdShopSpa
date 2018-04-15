import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DataSearchComponent } from './components/data-search/data-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditComponent } from './components/add-edit/add-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  declarations: [DataTableComponent, DataSearchComponent, AddEditComponent],
  exports: [DataTableComponent, DataSearchComponent, AddEditComponent]
})
export class CoreModule { }
