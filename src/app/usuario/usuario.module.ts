import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListComponent } from './pages/list/list.component';
import { DetailsComponent } from './pages/details/details.component';
import { LibroComponent } from './components/libro/libro.component';
import { PipesModule } from '../core/pipes/pipes.module';


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent,
    LibroComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,PipesModule
  ]
})
export class UsuarioModule { }
