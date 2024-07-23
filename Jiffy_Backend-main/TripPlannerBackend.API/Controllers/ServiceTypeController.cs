using AutoMapper;
using JiffyBackend.DAL;
using Microsoft.AspNetCore.Mvc;

namespace JiffyBackend.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceTypeController : Controller
    {
        private readonly JiffyDbContext _context;
        private readonly IMapper _mapper;

        public ServiceTypeController(JiffyDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
    }
}
