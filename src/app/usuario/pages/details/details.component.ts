import { Component, inject } from '@angular/core';
import { Libro } from '../../../core/interfaces/libro';
import { LibroService } from '../../../core/services/libro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private index!:number
  private router=inject(ActivatedRoute)
  public libro?:Libro
  private sv=inject(LibroService)
  constructor(){
    this.index=this.router.snapshot.params['id']
    this.libro=this.sv.getLibroForId(this.index)
    console.log(this.libro);
    
  }
}
