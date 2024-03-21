import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
@Input() type:string="button"
@Input() value!:string
@Input() class!:string
@Output() crearEmmiter:EventEmitter<boolean>=new EventEmitter()
@Input() disabled!:boolean
crear(){
  this.crearEmmiter.emit(true)
}
}
