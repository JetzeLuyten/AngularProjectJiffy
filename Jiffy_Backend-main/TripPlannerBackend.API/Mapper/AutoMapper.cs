using AutoMapper;
using JiffyBackend.API.Dto;
using JiffyBackend.DAL.Entity;

namespace JiffyBackend.API.Mapper
{
    public class AutoMapper : Profile
    {
        public AutoMapper()
        {
            CreateMap<GetTripDto, Trip>();
            CreateMap<CreateTripDto, Trip>();
            CreateMap<Trip, GetTripDto>();
                //.ForMember(dest => dest.Name, act => act.MapFrom(src => src.TripName));
            CreateMap<Activity, GetActivityDto>();
            CreateMap<GetActivityDto, Activity>();
            CreateMap<CreateActivityDto, Activity>();
        }
    }
}
