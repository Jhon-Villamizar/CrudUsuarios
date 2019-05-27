export class Usuario {
    constructor(_id = 0, nombre = '', email = '', password = '') {
        this._id = _id,
        this.nombre = nombre,
        this.email = email,
        this.password = password
    }
    _id: number;
    nombre: string;
    email: string;
    password: string;
}
