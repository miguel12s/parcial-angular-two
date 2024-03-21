import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CreateComponent } from './pages/create/create.component';
import { EditComponent } from './pages/edit/edit.component';
import { ListComponent } from './pages/list/list.component';
import { ContainerComponent } from './pages/container/container.component';
import { LibroComponent } from './component/libro/libro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MoleculeModule } from '../components/molecule.module';
import { PipesModule } from '../core/pipes/pipes.module';


@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    ListComponent,
    ContainerComponent,
    LibroComponent,
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,ReactiveFormsModule,MoleculeModule,PipesModule
  ]
})
export class AdministradorModule { }
