import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Libro } from '../../../core/interfaces/libro';
import { LibroService } from '../../../core/services/libro.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Output() wordSearch: EventEmitter<string> = new EventEmitter<string>();

  public libros: Libro[] = [];
  private service = inject(LibroService);
  public $search=this.service.searchObservable
  public word!:string
  ngOnInit(): void {
    this.$search.pipe(
      tap((word:string)=>{
        console.log(word);
        this.word=word
      })
    ).subscribe()
    this.libros = this.service.libro;

  }

  onChange(event: any) {
    const palabra = event.target.value;
    this.service.getlibrosForSearch(palabra)
    this.wordSearch.emit(palabra)
  }
}
