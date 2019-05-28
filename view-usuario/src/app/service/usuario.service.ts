import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {
    seleccionarUsuario: Usuario;
    usuarios: {};
    // readonly URL_API = 'http://jhonvio-001-site1.itempurl.com/api/Usuario';
    readonly URL_API = 'http://localhost:60493/api/Usuario';/*punto de conexion al api*/
    constructor(private http: HttpClient) {
        this.seleccionarUsuario = new Usuario();
    }
    /**
     * metodo que lista todos los usuarios
     */
    listarUsuarios() {
        return this.http.get(this.URL_API);
    }
    /**
     * metodo para loguear a los usuarios
     * @param email 
     * @param password 
     */
    buscarUsuario(email: string, password: string) {
        return this.http.get(this.URL_API + `/?email=${email}&password=${password}`);
    }
    /**
     * metodo que crea nuevos usuarios
     * @param usuario
     */
    crearUsuario(usuario: Usuario) {
        return this.http.post(this.URL_API, usuario);
    }
    /**
     * metodo que actializa los usuarios
     * @param usuario 
     */
    editarUsuario(usuario: Usuario) {
        return this.http.put(this.URL_API + `/${usuario.id}`, usuario);
    }
    /**
     * metodo que elimina el registro del usuario
     * @param id 
     */
    eliminarUsuario(id: number) {
        return this.http.delete(this.URL_API + `/${id}`);
    }
}


