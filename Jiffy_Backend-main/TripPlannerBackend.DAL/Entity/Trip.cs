using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JiffyBackend.DAL.Entity
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Activity> Activities { get; set; }
    }
}
