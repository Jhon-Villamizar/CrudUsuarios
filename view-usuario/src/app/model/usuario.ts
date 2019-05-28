export class Usuario {
    constructor(id = 0, nombre = '', email = '', password = '') {
        this.id = id,
        this.nombre = nombre,
        this.email = email,
        this.password = password
    }
    id: number;
    nombre: string;
    email: string;
    password: string;
}
