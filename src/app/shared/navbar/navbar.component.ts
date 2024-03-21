import { Component, EventEmitter, Output } from '@angular/core';
import { LibroService } from '../../core/services/libro.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() wordSearch: EventEmitter<string> = new EventEmitter<string>();
  @Output() ocultarComponente: EventEmitter<boolean> = new EventEmitter();

  constructor(private service:LibroService){

  }
  crear(event: any) {
    this.ocultarComponente.emit(event);
  }
  onChange(event: any) {
    const palabra = event.target.value;
    this.service.getlibrosForSearch(palabra)
    this.wordSearch.emit(palabra)
  }
}
