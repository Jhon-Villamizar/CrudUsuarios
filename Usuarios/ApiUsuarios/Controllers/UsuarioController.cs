using ApiUsuarios.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ApiUsuarios.Controllers
{
    public class UsuarioController : ApiController
    {
        [HttpGet]
        public IEnumerable<Usuario> Get()
        {
            using (var context = new ApiContext())
            {
                return context.Usuarios.ToList();
            }
        }

        [HttpGet]
        public Usuario Get(string email)
        {
            using (var context = new ApiContext())
            {
                return context.Usuarios.FirstOrDefault(x => x.email == email);
            }
        }

        [HttpPost]
        public IHttpActionResult Post(Usuario usuario)
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

        [HttpPut]
        public Usuario Put(Usuario usuario)
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

        [HttpDelete]
        public bool Delete(int id)
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
