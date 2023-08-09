using Microsoft.EntityFrameworkCore;

namespace ResearchBookDash.Model
{
    public class ResearchBookContext : DbContext
    {

        public ResearchBookContext(DbContextOptions<ResearchBookContext> options)
            : base(options)
        {
        }

        public DbSet<ResearchBook> ResearchBooks { get; set; } = null!;

    }
}
