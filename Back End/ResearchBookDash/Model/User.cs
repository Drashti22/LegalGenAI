﻿

using System.ComponentModel.DataAnnotations;

namespace ResearchBookDash.Model
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        public string firstname { get; set; }
        public string lastname { get; set; }

        public string Username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        [RegularExpression("^[0-9]*$", ErrorMessage = "Contact details should only contain numeric values.")]
        public string contactdetails { get; set; }
        public string organization{ get; set; }
        public string designation { get; set; }

        public virtual ICollection<ResearchBook>? ResearchBooks { get; set; }


    }
}
