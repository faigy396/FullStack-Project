using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.services
{
    public interface ICustomerBL
    {
        public bool Add(CustomerDTO customer);
        public List<CustomerDTO> GetAll();
        public bool IsExist(string name, string pass);
    }
}
