import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:'usuario',loadChildren:()=>import('./usuario/usuario.module').then(m=>m.UsuarioModule)
},
{
  path:'administrador',loadChildren:()=>import('./administrador/administrador.module').then(m=>m.AdministradorModule)
},
{
  path: '', redirectTo: 'administrador', pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
