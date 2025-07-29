using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingCartDTO
    {
        public int GameId { get; set; }
        public string? GameName { get; set; }
        public int Amount { get; set; }
        public double Price { get; set; }
        public double TotalPrice { get; set; }

    }
}
