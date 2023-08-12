using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace ResearchBookDash.Model
{
    public class ResearchBookContext : DbContext
    {

        public ResearchBookContext(DbContextOptions<ResearchBookContext> options)
            : base(options)
        {
        }


        public DbSet<ResearchBook> ResearchBooks { get; set; } = null!;

        public DbSet<User> Users { get; set; } = null!;

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
               .HasMany(u => u.ResearchBooks)
               .WithOne(rb => rb.User)
               .HasForeignKey(rb => rb.UserId)
               .OnDelete(DeleteBehavior.Cascade); // Optional: Define the delete behavior

            // Any other configurations or relationships can be defined here

            base.OnModelCreating(modelBuilder);

        }

    }
}
