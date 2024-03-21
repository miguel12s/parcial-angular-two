import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';
import { ContainerComponent } from './pages/container/container.component';

const routes: Routes = [
  {path:'',component:ContainerComponent,children:[
    {path:'list',component:ListComponent},
    {path:'create',component:CreateComponent},
    {path:'update/:id',component:EditComponent},
    //  {path:'visualizar/:id',component:VisualizarComponent},  
    {path:'',redirectTo:'list',pathMatch:'full'}
  
  
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
