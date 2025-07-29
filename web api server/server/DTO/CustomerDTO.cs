using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CustomerDTO
    {
        public int Id { get; set; }
        public string? CustName { get; set; }
        public string? Pass { get; set; }
        public string? CreditDetails { get; set; }
    }
}
