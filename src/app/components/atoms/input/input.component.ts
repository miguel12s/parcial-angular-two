import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
@Input() type:string="text"
@Input() placeholder!: string;
@Input() label!:string
@Input() control!:AbstractControl | null
@Input() value:string=""


isFormControl(control: AbstractControl | null): control is FormControl {
  return control instanceof FormControl;
}
}
