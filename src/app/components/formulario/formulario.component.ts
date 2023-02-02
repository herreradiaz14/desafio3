import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formHerrera: FormGroup;
  hasError: boolean = false;
  formValid: boolean = false;

  constructor() {
    const formato = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let elementos: any = {
      nombres: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
      edad: new FormControl('', [Validators.required, Validators.min(18)]),
      email: new FormControl('', [Validators.required, Validators.pattern(formato)]),
      foto: new FormControl(),
      color: new FormControl(),
      estadoCivil: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required]),
      tieneEmpleo: new FormControl(),
      lugarEmpleo: new FormControl(),
      descripcion: new FormControl('', [Validators.maxLength(200)])
    }

    this.formHerrera = new FormGroup(elementos);
  }

  enviarDatos(){
      console.log(this.formHerrera);
      if (!this.formHerrera.valid){
          this.hasError = true;
          return;
      }
      this.hasError = false;
      this.formValid = true;
  }

}
