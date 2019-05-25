using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ApiUsuarios.Models
{
    [Table("Usuario")]
    public class Usuario
    {
        [Key]
        public int id { get; set; }
        [MaxLength(50)]
        [Required]
        public string nombre { get; set; }
        [MaxLength(100)]
        [Required]
        public string email { get; set; }
        [MaxLength(50)]
        [Required]
        public string password { get; set; }
    }
}