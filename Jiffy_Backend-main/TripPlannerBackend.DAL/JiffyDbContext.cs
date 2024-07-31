using Microsoft.EntityFrameworkCore;
using JiffyBackend.DAL.Entity;

namespace JiffyBackend.DAL
{
    public class JiffyDbContext : DbContext
    {
        public JiffyDbContext()
        {

        }

        public JiffyDbContext(DbContextOptions<JiffyDbContext> options) : base(options)
        {
        }
        public DbSet<ServiceType> ServiceTypes => Set<ServiceType>();
        public DbSet<Service> Services => Set<Service>();
        public DbSet<User> Users => Set<User>();

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ServiceType>()
               .HasMany(st => st.Services)
               .WithOne(st => st.ServiceType)
               .HasForeignKey(st => st.ServiceTypeId)
               .IsRequired();

            modelBuilder.Entity<User>()
                .HasMany(u => u.Services)
                .WithOne(s => s.User)
                .HasForeignKey(s => s.UserId)
                .IsRequired();

            //Other side
            //modelBuilder.Entity<Activity>()
            //    .HasOne(e => e.Trip)
            //    .WithMany(e => e.Activities)
            //    .HasForeignKey(e => e.TripId)
            //    .IsRequired();

            modelBuilder.Entity<ServiceType>().ToTable("ServiceType");
            modelBuilder.Entity<Service>().ToTable("Service");
            modelBuilder.Entity<User>().ToTable("User");
        }
    }
}