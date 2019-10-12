import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from "./list/list.component"


const routes: Routes = [
  {path: 'list', component: ListComponent},  
];

@NgModule({
  // 初始化路由
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
