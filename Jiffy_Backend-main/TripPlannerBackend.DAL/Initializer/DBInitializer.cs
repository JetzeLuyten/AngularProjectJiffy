using JiffyBackend.DAL;
using JiffyBackend.DAL.Entity;
using System;
using System.Linq;

namespace JiffyBackend.DAL.Initializer
{
    public class DBInitializer
    {
        public static void Initialize(JiffyDbContext context)
        {
            context.Database.EnsureCreated();

            // Check if there are any existing records in the Service table
            if (context.Services.Any())
            {
                return; // DB has been seeded
            }

            // Seed the ServiceTypes table with some dummy data
            if (!context.ServiceTypes.Any())
            {
                var serviceTypes = new ServiceType[]
                {
                    new ServiceType { Name = "Consulting" },
                    new ServiceType { Name = "Design" },
                    new ServiceType { Name = "Development" }
                };

                context.ServiceTypes.AddRange(serviceTypes);
                context.SaveChanges();
            }

            // Add Services
            var Services = new List<Service>
            {
                new Service
                {
                    Title = "Service 1",
                    ServiceTypeId = 1, // Adjust to match existing category IDs
                    Description = "Content for Service 1",
                    Author = "Author 1",
                    PublishDate = DateTime.UtcNow,
                    AuthorId = "google-oauth2|108034703800733846612",
                },
                new Service
                {
                    Title = "Service 2",
                    ServiceTypeId = 2, // Adjust to match existing category IDs
                    Description = "Content for Service 2",
                    Author = "Author 2",
                    PublishDate = DateTime.UtcNow,
                    AuthorId = "google-oauth2|108034703800733846612"
                }
            };
            context.Services.AddRange(Services);
            context.SaveChanges();
        }
    }
}