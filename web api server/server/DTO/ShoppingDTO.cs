using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ShoppingDTO
    {
        public int Id { get; set; }
        public int? CustId { get; set; }
        public DateTime? SDate { get; set; }
        public double? PaySum { get; set; }
    }
}
