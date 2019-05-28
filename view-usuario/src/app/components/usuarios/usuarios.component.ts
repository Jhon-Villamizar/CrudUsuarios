import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarUsarios();
  }

  listarUsarios(){
    this.usuarioService.listarUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as {};
      });
  }
}
