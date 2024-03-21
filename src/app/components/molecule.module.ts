import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParagraphComponent } from './paragraph/paragraph.component';



@NgModule({
  declarations: [AlertComponent,ButtonComponent,InputComponent, ParagraphComponent],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports:[
AlertComponent,ButtonComponent,InputComponent,ParagraphComponent
  ]
})
export class MoleculeModule { }
