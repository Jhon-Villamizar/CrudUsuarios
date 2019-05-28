import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Usuario} from '../../model/usuario';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  providers: [UsuarioService]
})
export class PrincipalComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  enviarRegistro(form?: NgForm) {
    console.log(form.value);

    console.log('datos');

  }

  borrarForm(form?: NgForm) {
    if(form) {
      form.reset();
    }
  }
}
