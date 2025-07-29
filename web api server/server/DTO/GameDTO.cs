using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class GameDTO
    {
        public int Id { get; set; }
        public string Barcode { get; set; }
        public string? Name { get; set; }
        public int? CategoryId { get; set; }
        public string? CategoryName { get; set; }
        public double? Price { get; set; }
        public string? Picture { get; set; }
        public int? QuantityInStock { get; set; }
    }
}
