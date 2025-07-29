using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class Shopping
    {
        public Shopping()
        {
            ShoppingDetails = new HashSet<ShoppingDetail>();
        }

        public int Id { get; set; }
        public int? CustId { get; set; }
        public DateTime? SDate { get; set; }
        public double? PaySum { get; set; }

        public virtual Customer? Cust { get; set; }
        public virtual ICollection<ShoppingDetail> ShoppingDetails { get; set; }
    }
}
