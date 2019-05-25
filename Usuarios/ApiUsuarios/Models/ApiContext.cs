using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApiUsuarios.Models
{
    //clase que realiza la conexion a la base de datos
    public class ApiContext : DbContext
    {
        public ApiContext() : base("ApiUsuariosConnection")
        {

        }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}