import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from '../../../core/interfaces/libro';
import { LibroService } from '../../../core/services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss'
})
export class LibroComponent {
  @Input() libro!: Libro
  @Output() wordSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private service:LibroService){}
  onChange(event: any) {
    const palabra = event.target.value;
    this.service.getlibrosForSearch(palabra)
    this.wordSearch.emit(palabra)
  }
}
