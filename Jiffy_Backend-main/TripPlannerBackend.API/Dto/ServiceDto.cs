namespace JiffyBackend.API.Dto
{
    public class ServiceDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int OfferTypeId { get; set; }

        public ServiceTypeDto ServiceType { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public DateTime PublishDate { get; set; }
    }
}
