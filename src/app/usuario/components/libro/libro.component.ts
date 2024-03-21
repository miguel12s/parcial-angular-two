import { Component, Input } from '@angular/core';
import { Libro } from '../../../core/interfaces/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.scss'
})
export class LibroComponent {
  @Input() libro!: Libro

}
