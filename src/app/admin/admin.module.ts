import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { ListCategoryComponent } from './component/category/list-category/list-category.component';
import { AddCategoryComponent } from './component/category/add-category/add-category.component';


@NgModule({
  declarations: [
    DashboardComponent,
 
   
    ListCategoryComponent,
    AddCategoryComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
