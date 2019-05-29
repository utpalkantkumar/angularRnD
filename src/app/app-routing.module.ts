import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmplistComponent } from './layout/emplist/emplist.component';
import { EmpaddComponent } from './layout/empadd/empadd.component';
const routes: Routes = [
 {path:'home',component:EmplistComponent},
 {path:'add',component:EmpaddComponent},
 {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
