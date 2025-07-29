using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingDetailsDTO
    {
        public int Id { get; set; }
        public int? ShoppingId { get; set; }
        public int? Game { get; set; }
        public string GameName { get; set; }
        public int? Qty { get; set; }
    }
}
