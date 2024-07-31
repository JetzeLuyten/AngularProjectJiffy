namespace JiffyBackend.API.Dto
{
    public class UpdateServiceDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int ServiceTypeId { get; set; }
    }
}
