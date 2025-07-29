using DAL.Models;
using DAL.services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.classes
{
    public class CustomerDAL : ICustomerDAL
    {
        FaigySegal_Shop_2025Context DB=new FaigySegal_Shop_2025Context();
        public bool Add(Customer customer)
        {
            try
            {
                DB.Customers.Add(customer);
                DB.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public List<Customer> GetAll()
        {
            return DB.Customers.ToList();
        }
    }
}
