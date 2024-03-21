import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Libro } from '../interfaces/libro';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor() { }
  public $search=new BehaviorSubject<string>('')
  private libros: Libro[] = [
   
   
  ];

  get libro() {
    return this.libros;
  }

  get searchObservable(){
    return this.$search.asObservable()
  }

  crearBlog(blog: Libro) {
    blog.id = this.libros.length + 1;
    this.libros.push(blog);
  }
  actualizarBlog(blog: Libro, id: number) {
    console.log(blog, id);

    const index = this.libros.findIndex((blog) => blog.id == id);

    if (index != -1) {
      blog.id = id;
      this.libros[index] = blog;

      console.log('encontrado');
    } else {
      console.log('libro no encontrado');
    }


  }

  getLibroForId(id: number) {
    console.log(id);
    
      const newLibro = this.libros.find(blog =>blog.id == id)
  
    return newLibro
}

getlibrosForSearch(search:string){
  this.$search.next(search)
  console.log(search);
  

}


}
