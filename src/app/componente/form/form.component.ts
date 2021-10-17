import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder) {
    
    this.formulario = fb.group({
      email: ['',[Validators.required,this.validarHotmail]],
      password: ['',[Validators.required, Validators.minLength(8)]]
    })
   }

  ngOnInit(): void {
  }

  aceptar(){
    const datos = this.formulario;
    const email = this.formulario.controls['email'].value
    console.log(datos);
  }

  validarNombre(control:AbstractControl){
    const nombre = control.value;
    const tieneEspacio = nombre.includes(' ');
    if (tieneEspacio) {
      return {
        tieneEspacio:true
      }
    }
    return null;
  }

  validarHotmail(control:AbstractControl){
    const email = control.value;
    if(/(hotmail)\.com$/.test(email)){
      return {
        esHotmail:true
      }
    }
    return null
  }
 

}
