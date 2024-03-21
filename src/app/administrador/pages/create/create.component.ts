import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';
import { Libro } from '../../../core/interfaces/libro';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {
  public fb=inject(FormBuilder)
  public router=inject(Router)
  crearBlog!:FormGroup
  @Output() crear:EventEmitter<any>=new EventEmitter()
  constructor(private service:LibroService){
    this.crearBlog=this.initForm()
  }
  
  initForm():FormGroup{
    return this.fb.group(
      {
        titulo: new FormControl('',[Validators.required,Validators.minLength(5)]),
        descripcion:new FormControl('',[Validators.required,Validators.minLength(20)]),
        autor:new FormControl('',[Validators.required,Validators.minLength(10)]),
        poster:new FormControl('',[Validators.required,Validators.minLength(10)]),
        categoria:new FormControl('',[Validators.required,Validators.minLength(5)]),
        disponibilidad:new FormControl('',[Validators.required,Validators.minLength(5)])

      }
    )
  }   
  onSubmit() {
  const blog:Libro=this.crearBlog.value
  console.log('blog',blog);
  
  this.service.crearBlog(blog)
  this.router.navigate(['/administrador/list'])
  }
}
