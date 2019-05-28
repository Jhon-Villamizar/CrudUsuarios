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
    this.listarUsarios();
  }
  enviarRegistro(form?: NgForm) {
    console.log(form.value);
    if (form.value.id) {
      this.usuarioService.editarUsuario(form.value)
      .subscribe(res => {
        this.borrarForm(form);
        this.listarUsarios();
      })
    } else {
      this.usuarioService.crearUsuario(form.value)
      .subscribe(res => {
        this.listarUsarios();
        this.borrarForm(form);
      })
    }
  }
  listarUsarios(){
    this.usuarioService.listarUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as {};
        console.log( this.usuarioService.usuarios);
      });
  }
  editarUsuario(usuario:Usuario){
    console.log('Editar');
    this.usuarioService.seleccionarUsuario = usuario;
    
  }
  eliminarUsuario(id: number, form:NgForm){
    console.log('Eliminar');
    if(confirm('Esta seguro de eliminar este Usuario?')){
      this.usuarioService.eliminarUsuario(id)
      .subscribe(res => {
        this.listarUsarios();
      });
    }
  }

  borrarForm(form?: NgForm) {
    if(form) {
      form.reset();
    }
  }
}
