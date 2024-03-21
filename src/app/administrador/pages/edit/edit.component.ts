import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Libro } from '../../../core/interfaces/libro';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../../../core/services/libro.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  crearBlog!: FormGroup
  @Input() blog!: Libro
  @Output() update: EventEmitter<Libro> = new EventEmitter()
  private index!: number
  private readonly routerSna = inject(ActivatedRoute)

  constructor(private service: LibroService, private fb: FormBuilder, private router: Router) {
    this.crearBlog = this.initForm()
  }
  ngOnInit(): void {
    this.index = this.routerSna.snapshot.params['id']
    const librof = this.service.getLibroForId(this.index)
    this.crearBlog.patchValue({
      poster:librof?.poster,
      titulo: librof?.titulo,
      descripcion: librof?.descripcion,

      autor: librof?.autor,
      categoria:librof?.categoria,
      disponibilidad:librof?.disponibilidad
    })

  }

  initForm(): FormGroup {
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
    const libroCreate: Libro = this.crearBlog.value
    console.log(this.blog);

    this.service.actualizarBlog(libroCreate, this.index)
    this.router.navigate(['/administrador/list'])


  }

}
