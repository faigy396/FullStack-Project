using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Game
    {
        public Game()
        {
            ShoppingDetails = new HashSet<ShoppingDetail>();
        }

        public int Id { get; set; }
        public string? Name { get; set; }
        public int? CategoryId { get; set; }
        public double? Price { get; set; }
        public string? Picture { get; set; }
        public int? QuantityInStock { get; set; }

        public virtual Category? Category { get; set; }
        public virtual ICollection<ShoppingDetail> ShoppingDetails { get; set; }
    }
}
