import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  principal = false;
  login = true;

  cambioEstado(mostrarP) {
    if (this.login === true) {
      console.log('hi =>', this.login);
      this.login = false;
      this.principal = true;
      console.log('login =>', this.login);
    }
  }
  buscarUsuario(usuario: Usuario, form: NgForm){
    this.usuarioService.buscarUsuario(usuario)
      .subscribe(res => {
        console.log(this.usuarioService.seleccionarUsuario = usuario);
        
      })
  }
}
