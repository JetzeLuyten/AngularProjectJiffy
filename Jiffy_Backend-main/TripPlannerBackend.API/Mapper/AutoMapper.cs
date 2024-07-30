using AutoMapper;
using JiffyBackend.API.Dto;
using JiffyBackend.DAL.Entity;

namespace JiffyBackend.API.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<ServiceTypeDto, ServiceType>();
            CreateMap<CreateServiceTypeDto, ServiceType>();
            CreateMap<UpdateServiceTypeDto, ServiceType>();
            CreateMap<ServiceDto, Service>();
        }
    }
}
