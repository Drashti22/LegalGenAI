using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ResearchBookDash.Model
{
    public class ResearchBook
    {
        //[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int ResearchbookId { get; set; }
        public string name { get; set; }
        public DateTime DateCreated { get; set; }

        public DateTime LastModified { get; set; }

        [ForeignKey(nameof(User))]
        public int UserId { get; set; }

        //[ForeignKey("UserId")]
        public  User User { get; set; }
    }
}
