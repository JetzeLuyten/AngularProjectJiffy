using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JiffyBackend.DAL.Entity
{
    public class Service
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ServiceTypeId { get; set; }
        public ServiceType ServiceType { get; set; }
        public string Description { get; set; }
        public string AuthorId { get; set; }
        public string Author { get; set; }
        public DateTime PublishDate { get; set; }
    }
}
