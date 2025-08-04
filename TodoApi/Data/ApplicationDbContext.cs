using Microsoft.EntityFrameworkCore;
using TodoApi.Models;

namespace UserRegistrationApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) {}

        public DbSet<User> Users { get; set; }
    }
}
