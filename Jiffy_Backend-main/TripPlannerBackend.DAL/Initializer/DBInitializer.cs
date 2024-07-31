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
                    new ServiceType { Name = "Lawnmowing" },
                    new ServiceType { Name = "Babysitting" }
                };

                context.ServiceTypes.AddRange(serviceTypes);
                context.SaveChanges();
            }

            // Add Services
            if (!context.Users.Any())
            {
                var users = new User[]
                {
                    new User { Auth0UserId = "auth0|66a5163b7686a649a4dbc971", Email = "Emailski", FullName = "Jetze L" },
                    new User { Auth0UserId = "auth0|dummyuser2", Email = "Emailski", FullName = "Dummy User 2" }
                };

                context.Users.AddRange(users);
                context.SaveChanges();
            }
            
            if (!context.Services.Any())
            {
                var services = new List<Service>
                {
                    new Service
                    {
                        Title = "Service 1",
                        ServiceTypeId = context.ServiceTypes.FirstOrDefault(st => st.Name == "Consulting")?.Id ?? 1,
                        Description = "Content for Service 1",
                        UserId = context.Users.FirstOrDefault(u => u.FullName == "Jetze L")?.Id ?? 3,
                        PublishDate = DateTime.UtcNow
                    },
                    new Service
                    {
                        Title = "Service 2",
                        ServiceTypeId = context.ServiceTypes.FirstOrDefault(st => st.Name == "Design") ?.Id ?? 2,
                        Description = "Content for Offer 2",
                        UserId = context.Users.FirstOrDefault(u => u.FullName == "Dummy User 2")?.Id ?? 2,
                        PublishDate = DateTime.UtcNow
                    }
                };

                context.Services.AddRange(services);
                context.SaveChanges();
            }
        }
    }
}