using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Shoppings = new HashSet<Shopping>();
        }

        public int Id { get; set; }
        public string? CustName { get; set; }
        public string? Pass { get; set; }
        public string? CreditDetails { get; set; }

        public virtual ICollection<Shopping> Shoppings { get; set; }
    }
}
