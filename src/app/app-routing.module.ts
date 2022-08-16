import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddlistComponent } from './addlist/addlist.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [
  {
    component:ListComponent,
    path:'list'
  },
  {
    component:AddlistComponent,
    path:'addlist'
  },
  {
    component:UpdateComponent,
    path:'update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
