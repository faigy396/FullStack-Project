using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class ShoppingDetail
    {
        public int Id { get; set; }
        public int? ShoppingId { get; set; }
        public int? Game { get; set; }
        public int? Qty { get; set; }

        public virtual Game? GameNavigation { get; set; }
        public virtual Shopping? Shopping { get; set; }
    }
}
