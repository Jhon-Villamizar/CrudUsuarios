using ApiUsuarios.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiUsuarios.Controllers
{
    //clase que contiene los metodos del crud
    public class UsuarioController : ApiController
    {
        //funcion que lista todos los elementos de la base de datos
        [HttpGet]
        public IEnumerable<Usuario> ListarUsuarios()
        {
            using (var context = new ApiContext())
            {
                return context.Usuarios.ToList();
            }
        }

        //funcion que busca un usuario por email
        [HttpGet]
        public Usuario BuscarUsuario(string email)
        {
            using (var context = new ApiContext())
            {
                return context.Usuarios.FirstOrDefault(x => x.email == email);
            }
        }
        
        // funcion que crea nuevos usuarios
        [HttpPost]
        public IHttpActionResult CrearUsuario(Usuario usuario)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            using (var context = new ApiContext())
            {
                context.Usuarios.Add(usuario);
                context.SaveChanges();
                return Ok(usuario);
            }
        }

        //funcion que actualiza o edita un usuario buscado por su id
        [HttpPut]
        public Usuario EditarUsuario(Usuario usuario)
        {
            using (var context = new ApiContext())
            {
                var usuarioAct = context.Usuarios.FirstOrDefault(x => x.id == usuario.id);
                usuarioAct.nombre = usuario.nombre;
                usuarioAct.email = usuario.email;
                usuarioAct.password = usuario.password; 
                context.SaveChanges();
                return usuario;
            }
        }

        //funcion que elimina un usuario buscado por su id
        [HttpDelete]
        public bool EliminarUsuario(int id)
        {
            using (var context = new ApiContext())
            {
                var usuarioDel = context.Usuarios.FirstOrDefault(x => x.id == id);
                context.Usuarios.Remove(usuarioDel);
                context.SaveChanges();
                return true;
            }
        }
    }
}
