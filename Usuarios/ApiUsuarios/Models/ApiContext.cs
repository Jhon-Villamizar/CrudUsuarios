using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApiUsuarios.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext() : base("ApiUsuariosConnection")
        {

        }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}