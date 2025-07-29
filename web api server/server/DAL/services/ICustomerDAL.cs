using DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.services
{
    public interface ICustomerDAL
    {
        public bool Add(Customer customer);
        public List<Customer> GetAll();

    }
}
