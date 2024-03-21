import { Pipe, PipeTransform } from '@angular/core';
import { Libro } from '../interfaces/libro';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {

  transform(libros: Libro[],word:string): Libro[] {  
    console.log(word);
    
    console.log(word)
    if(word !=''){
        const user:Libro[]=libros.filter(
          (Libro:Libro)=>
            
            Libro.titulo.toLowerCase().includes(word.toLowerCase()) ||
             Libro.descripcion.toLowerCase().includes(word.toLowerCase())||
             Libro.autor.toLowerCase().includes(word.toLowerCase())
            
        )
        console.log(user);
        return user
       }else{
        return libros
       }
       
    
    
      }

}
