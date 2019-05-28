import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    seleccionarUsuario: Usuario;
    usuarios: {};
    readonly URL_API = 'http://jhonvio-001-site1.itempurl.com/api/Usuario';
    constructor(private http: HttpClient) {
        this.seleccionarUsuario = new Usuario();
    }
    listarUsuarios() {
        return this.http.get(this.URL_API);
    }
    buscarUsuario(email: string) {
        return this.http.get(this.URL_API + `/${email}`);
    }
    crearUsuario(usuario: Usuario) {
        return this.http.post(this.URL_API, usuario);
    }
    editarUsuario(usuario: Usuario) {
        return this.http.put(this.URL_API + `/${usuario._id}`, usuario);
    }
    eliminarLugar(_id: number) {
        return this.http.delete(this.URL_API + `/${_id}`);
    }
}


