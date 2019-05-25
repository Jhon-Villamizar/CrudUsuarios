using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ApiUsuarios.Models
{
    //modelo que crea la tabla usuarios dentro de la base de datos
    [Table("Usuario")]
    public class Usuario
    {
        //id llave principal autoincrementable
        [Key]
        public int id { get; set; }
        //nombre es requerido y maximo 50 dijitos
        [MaxLength(50)]
        [Required]
        public string nombre { get; set; }
        //email es requerido y maximo 100 dijitos
        [MaxLength(100)]
        [Required]
        public string email { get; set; }
        //password es requerido y maximo 50 dijitos
        [MaxLength(50)]
        [Required]
        public string password { get; set; }
    }
}