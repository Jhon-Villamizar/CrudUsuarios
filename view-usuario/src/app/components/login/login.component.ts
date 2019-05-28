import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  /**
   * variables que mustra el login y los usuarios
   */
  principal = false;
  login = true;
  /**
   * variables que guardan los datos de autenticacion
   */
  email = "";
  password = "";
  /**
   * metodo que mustra usuarios y oculata el login
   */
  cambioEstado(form?: NgForm) {
    if (this.login === true) {
      this.email = form.value.email;
      this.password = btoa(form.value.password);
      this.autenticar(this.email, this.password)
    }
  }

  /**
   * metodo que valida email y passwor del usuario, encripta password y autoriza el paso a usuarios
   * @param email 
   * @param password 
   */
  autenticar(email: string, password: string){
    this.usuarioService.buscarUsuario(email,password)
    .subscribe(res =>{
      if(res === true){
        this.login = false;
        this.principal = true;
      }
      else{
        alert('Usuario no registrado');
      }
      
    })
  }
}
