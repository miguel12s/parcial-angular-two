import { Component } from '@angular/core';
import { Libro } from './core/interfaces/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showComponent:string="list"
  public blog!:Libro
public blogData!: Libro;
public blogd!: Libro;
word=""
  wordSearch(word: string) {
    console.log(word);
    
    this.word=word
  }
  crear(event:any){
    
    this.showComponent="create"

    }
}
